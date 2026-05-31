const buildItems = [
  "Digital QR Menus",
  "Mini-Games",
  "Premium Website Concepts",
  "Owner Request Intake",
  "QR Signage & Sticker Campaigns",
  "Future Client Command Centers",
];

const packageItems = [
  "Starter Digital Menu",
  "Interactive Menu Plus",
  "Game Experience Package",
  "Full Digital Storefront",
  "Seasonal Campaign Add-On",
];

export default function Home() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 pb-20 pt-10 sm:px-8 lg:px-10">
      <section className="rounded-3xl border border-[#c4a56b33] bg-[#0d121dd9] p-7 shadow-[0_20px_80px_rgba(0,0,0,0.35)] sm:p-10">
        <p className="mb-4 text-xs tracking-[0.22em] text-[#cbbba1] uppercase">AMMA Ventures LLC</p>
        <h1 className="font-display text-4xl leading-tight text-[#f2e7d3] sm:text-6xl">Fina Calle</h1>
        <p className="mt-4 max-w-2xl text-lg text-[#e8dac3] sm:text-xl">
          Interactive digital storefronts for local businesses.
        </p>
        <p className="mt-5 max-w-3xl text-sm leading-7 text-[#cbbba1] sm:text-base">
          We build QR menus, mini-games, digital storefronts, owner intake systems, and brand experiences that help local businesses look premium and engage customers.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://colattao-cafe-rush.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#c4a56b] px-6 py-3 text-center text-sm font-semibold text-[#111826] transition hover:bg-[#d6b57a]"
          >
            See the Colattao Case Study
          </a>
          <a
            href="mailto:anthonycolmenaresanandres@gmail.com?subject=Fina%20Calle%20Project%20Inquiry"
            className="rounded-full border border-[#c4a56b66] px-6 py-3 text-center text-sm font-semibold text-[#f2e7d3] transition hover:border-[#c4a56b] hover:bg-[#c4a56b1a]"
          >
            Start a Project
          </a>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-[#f2e7d3] sm:text-4xl">What We Build</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {buildItems.map((item) => (
            <article key={item} className="rounded-2xl border border-[#c4a56b2b] bg-[#121824bf] p-5">
              <h3 className="text-lg font-semibold text-[#f2e7d3]">{item}</h3>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-[#c4a56b33] bg-[#151b2bba] p-7 sm:p-10">
        <h2 className="font-display text-3xl text-[#f2e7d3] sm:text-4xl">Colattao Cafe Rush</h2>
        <p className="mt-4 max-w-3xl text-sm leading-7 text-[#d7c8b2] sm:text-base">
          Colattao Cafe Rush is our flagship proof of concept: a live interactive cafe experience combining a mobile game, digital menu, owner presentation, website concept, and request intake system.
        </p>
        <a
          href="https://colattao-cafe-rush.vercel.app"
          target="_blank"
          rel="noreferrer"
          className="mt-5 inline-block text-sm font-semibold text-[#c4a56b] underline-offset-4 hover:underline"
        >
          https://colattao-cafe-rush.vercel.app
        </a>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <a
            href="https://colattao-cafe-rush.vercel.app"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#c4a56b] px-6 py-3 text-center text-sm font-semibold text-[#111826] transition hover:bg-[#d6b57a]"
          >
            Play Cafe Rush
          </a>
          <a
            href="https://colattao-cafe-rush.vercel.app/menu"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border border-[#c4a56b66] px-6 py-3 text-center text-sm font-semibold text-[#f2e7d3] transition hover:border-[#c4a56b] hover:bg-[#c4a56b1a]"
          >
            View Digital Menu
          </a>
        </div>
      </section>

      <section className="mt-14">
        <h2 className="font-display text-3xl text-[#f2e7d3] sm:text-4xl">Packages Preview</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {packageItems.map((pkg) => (
            <article key={pkg} className="rounded-2xl border border-[#c4a56b2b] bg-[#101723c7] p-5">
              <h3 className="text-lg font-semibold text-[#f2e7d3]">{pkg}</h3>
              <p className="mt-2 text-sm text-[#cbbba1]">Custom quote</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mt-14 rounded-3xl border border-[#c4a56b33] bg-[#111726bf] p-7 sm:p-10">
        <h2 className="font-display text-3xl text-[#f2e7d3] sm:text-4xl">Philosophy</h2>
        <ul className="mt-5 space-y-3 text-sm leading-7 text-[#d7c8b2] sm:text-base">
          <li>No unnecessary payment liability</li>
          <li>Client POS stays separate</li>
          <li>Stripe-hosted billing links later for AMMA/Fina Calle clients</li>
          <li>Fast mobile-first experiences</li>
          <li>Built in modules so the system can grow</li>
        </ul>
      </section>

      <section className="mt-14 rounded-3xl border border-[#c4a56b4d] bg-[#0f1522d9] p-7 text-center sm:p-10">
        <h2 className="font-display text-3xl text-[#f2e7d3] sm:text-4xl">Ready to turn your business into an interactive digital brand?</h2>
        <a
          href="mailto:anthonycolmenaresanandres@gmail.com?subject=Fina%20Calle%20Project%20Inquiry"
          className="mt-7 inline-block rounded-full bg-[#c4a56b] px-8 py-3 text-sm font-semibold text-[#111826] transition hover:bg-[#d6b57a]"
        >
          Start a Project
        </a>
      </section>
    </main>
  );
}
