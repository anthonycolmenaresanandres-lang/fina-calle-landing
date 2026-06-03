import Image from "next/image";

export default function Home() {
  return (
    <main className="poster-wrap flex min-h-dvh flex-col justify-between px-6 py-10 sm:px-8 sm:py-12">
      <section className="mx-auto flex w-full max-w-4xl flex-1 flex-col items-center justify-center text-center">
        <Image
          src="/assets/fina-calle-os-logo-white.webp"
          alt="Fina Calle OS logo"
          width={1017}
          height={806}
          priority
          className="h-auto w-full max-w-[24rem] sm:max-w-[30rem]"
        />

        <h1 className="mt-8 max-w-3xl text-balance font-display text-3xl font-semibold uppercase leading-[1.05] tracking-[0.08em] text-white sm:text-5xl">
          Fina Calle OS has moved.
        </h1>

        <p className="mt-5 max-w-2xl text-balance text-sm leading-6 tracking-[0.02em] text-white/82 sm:text-base">
          The active Fina Calle system now lives at the new canonical site.
        </p>

        <div className="mt-10 flex w-full max-w-md flex-col gap-3 sm:mt-12">
          <a href="https://amma-fina-calle.vercel.app" className="street-btn">
            Enter Fina Calle OS
          </a>
          <a
            href="https://colattao-cafe-rush.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="street-btn"
          >
            View Colattao Café Rush
          </a>
        </div>
      </section>

      <footer className="pt-10 text-center text-[11px] font-semibold uppercase tracking-[0.22em] text-white/52 sm:text-xs">
        Legacy landing preserved for reference.
      </footer>
    </main>
  );
}
