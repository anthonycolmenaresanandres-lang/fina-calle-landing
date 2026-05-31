from PIL import Image
from pathlib import Path

src = Path('public/assets/fina-calle-os-logo.png')
out_png = Path('public/assets/fina-calle-os-logo-white.png')
out_webp = Path('public/assets/fina-calle-os-logo-white.webp')

img = Image.open(src).convert('RGBA')
pix = img.load()
w, h = img.size

for y in range(h):
    for x in range(w):
        r, g, b, a = pix[x, y]
        if a == 0:
            continue
        # Convert visible logo pixels to bright white while preserving texture through alpha.
        luma = int(0.299 * r + 0.587 * g + 0.114 * b)
        bright = max(220, 255 - int(luma * 0.15))
        # Keep subtle shape depth by softly lifting alpha for very dark strokes.
        alpha_boost = min(255, a + int((255 - luma) * 0.12))
        pix[x, y] = (bright, bright, bright, alpha_boost)

alpha = img.split()[-1]
bbox = alpha.getbbox()
if bbox is None:
    raise RuntimeError('No visible pixels in source image.')

cropped = img.crop(bbox)
padding = 16
canvas = Image.new('RGBA', (cropped.width + padding * 2, cropped.height + padding * 2), (0, 0, 0, 0))
canvas.paste(cropped, (padding, padding), cropped)

canvas.save(out_png, format='PNG', optimize=True)
canvas.save(out_webp, format='WEBP', lossless=True, method=6)

print(f'PNG={out_png} {canvas.width}x{canvas.height}')
print(f'WEBP={out_webp} {canvas.width}x{canvas.height}')
