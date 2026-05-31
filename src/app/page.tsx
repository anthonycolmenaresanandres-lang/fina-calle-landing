import Image from "next/image";

export default function Home() {
  return (
    <main className="poster-wrap flex min-h-dvh flex-col justify-between px-6 py-10 sm:px-8 sm:py-12">
      <section className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center text-center">
        <Image
          src="/assets/fina-calle-os-logo.webp"
          alt="Fina Calle OS logo"
          width={1017}
          height={806}
          priority
          className="h-auto w-full max-w-[28rem] sm:max-w-[34rem]"
        />

        <h1 className="mt-8 max-w-3xl text-balance font-display text-3xl font-semibold uppercase leading-[1.05] tracking-[0.08em] text-white sm:text-5xl">
          SOFTWARE FOR BRANDS THAT MOVE DIFFERENT.
        </h1>

        <p className="mt-5 max-w-3xl text-balance text-sm leading-6 tracking-[0.02em] text-white/82 sm:text-base">
          Interactive storefronts, QR experiences, mini-games, and brand systems for local businesses.
        </p>

        <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:mt-12">
          <a
            href="mailto:anthonycolmenaresanandres@gmail.com?subject=Fina%20Calle%20Project%20Inquiry"
            className="street-btn"
          >
            Start a Project
          </a>
          <a href="https://colattao-cafe-rush.vercel.app" target="_blank" rel="noreferrer" className="street-btn">
            View Colattao
          </a>
          <a href="https://colattao-cafe-rush.vercel.app/menu" target="_blank" rel="noreferrer" className="street-btn">
            View Menu
          </a>
        </div>

        <p className="mt-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-white/66 sm:mt-10">
          COLATTAO CAFÉ RUSH IS THE FIRST LIVE CASE STUDY.
        </p>
      </section>

      <footer className="pt-10 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white/52 sm:text-xs">
        FINA CALLE OS / AMMA VENTURES LLC
      </footer>
    </main>
  );
}
