from PIL import Image
from collections import deque
from pathlib import Path

src = Path(r"C:\Users\antho\OneDrive\Desktop\Colattao Rush\.codex-remote-attachments\019e54d2-2dd5-7dd2-8c65-bdd04534fa13\d7c6af4f-e6db-4940-8abd-f3ab06af47e2\1-Photo-1.jpg")
out_png = Path(r"C:\Users\antho\OneDrive\Desktop\Fina Calle Landing\public\assets\fina-calle-os-logo.png")
out_webp = Path(r"C:\Users\antho\OneDrive\Desktop\Fina Calle Landing\public\assets\fina-calle-os-logo.webp")

img = Image.open(src).convert("RGBA")
pix = img.load()
w, h = img.size

# Remove only edge-connected checkerboard-like background.
# Keeps white logo strokes that are disconnected from image borders.
visited = [[False]*w for _ in range(h)]
q = deque()


def bg_like(r, g, b):
    mx = max(r, g, b)
    mn = min(r, g, b)
    chroma = mx - mn
    return mx >= 160 and chroma <= 28

for x in range(w):
    q.append((x, 0))
    q.append((x, h-1))
for y in range(h):
    q.append((0, y))
    q.append((w-1, y))

while q:
    x, y = q.popleft()
    if x < 0 or y < 0 or x >= w or y >= h or visited[y][x]:
        continue
    visited[y][x] = True
    r, g, b, a = pix[x, y]
    if not bg_like(r, g, b):
        continue
    pix[x, y] = (r, g, b, 0)
    q.append((x+1, y))
    q.append((x-1, y))
    q.append((x, y+1))
    q.append((x, y-1))

# Hard-clean any remaining semi-bg pixels that became isolated but very light/neutral
for y in range(h):
    for x in range(w):
        r, g, b, a = pix[x, y]
        if a == 0:
            continue
        mx = max(r, g, b)
        mn = min(r, g, b)
        if mx >= 236 and (mx - mn) <= 12:
            pix[x, y] = (r, g, b, 0)

alpha = img.split()[-1]
bbox = alpha.getbbox()
if bbox is None:
    raise RuntimeError("No foreground detected after background removal.")

cropped = img.crop(bbox)

padding = 16
cw, ch = cropped.size
canvas = Image.new("RGBA", (cw + padding*2, ch + padding*2), (0, 0, 0, 0))
canvas.paste(cropped, (padding, padding), cropped)

# Trim any accidental transparent excess if needed (keeps intended padding)
canvas.save(out_png, format="PNG", optimize=True)
canvas.save(out_webp, format="WEBP", lossless=True, method=6)

print(f"SRC={src}")
print(f"PNG={out_png}")
print(f"WEBP={out_webp}")
print(f"DIM={canvas.size[0]}x{canvas.size[1]}")
