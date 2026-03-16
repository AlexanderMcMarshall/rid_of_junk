
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Full‑service junk removal",
    description: "We load, haul, and dispose of everything for you so you never lift a finger.",
    items: ["Household clutter", "Garage & attic cleanouts", "Storage units"],
  },
  {
    title: "Furniture & appliance pickup",
    description: "From bulky couches to old fridges, we handle the heavy lifting safely.",
    items: ["Couches & mattresses", "Refrigerators & washers", "Office furniture"],
  },
  {
    title: "Property & yard cleanouts",
    description: "Perfect for moves, renovations, estates, and storm debris cleanups.",
    items: ["Estate cleanouts", "Rental turnovers", "Storm & yard debris"],
  },
  {
    title: "Eco‑friendly disposal",
    description: "We prioritize donating, recycling, and responsible disposal whenever possible.",
    items: ["Donation drop‑offs", "Metal & electronics recycling", "Responsible landfill use"],
  },
];

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We proudly serve Dallas–Fort Worth and surrounding communities. Give us a quick call to confirm we cover your specific neighborhood.",
  },
  {
    question: "How does pricing work?",
    answer: "Pricing is based on how much space your items take up in our truck, plus any special disposal fees. We always provide a clear, no‑obligation quote before starting.",
  },
  {
    question: "Do I need to move anything outside?",
    answer: "No. Our team can remove items from anywhere on your property, including basements, attics, backyards, and storage units.",
  },
  {
    question: "Can you come same‑day?",
    answer: "In many cases, yes. Call early and we’ll do our best to schedule same‑day or next‑day service.",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-50">
      <Navbar />
      <main className="flex-1 pt-24 md:pt-28">
        {/* Hero */}
        <section
          id="home"
          className="relative overflow-hidden border-b border-white/5 bg-gradient-to-br from-emerald-500/10 via-slate-950 to-slate-950"
        >
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-40 top-[-10%] h-72 w-72 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute -right-40 bottom-[-10%] h-72 w-72 rounded-full bg-lime-400/10 blur-3xl" />
          </div>

          <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 md:flex-row md:items-center md:py-20 lg:px-8">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/30 bg-slate-900/60 px-3 py-1 text-xs font-medium text-emerald-200 shadow-[0_0_40px_rgba(16,185,129,0.25)]">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
                Open 7:00 AM – 8:00 PM · Same‑day junk removal available
              </div>

              <div className="space-y-3">
                <h1 className="font-display text-4xl tracking-tight text-slate-50 sm:text-5xl lg:text-6xl">
                  Get Rid of Junk
                  <span className="block text-emerald-400">Fast, clean, and stress‑free.</span>
                </h1>
                <p className="max-w-xl text-base text-slate-300 sm:text-lg">
                  Junk Removal &amp; Hauling in North Dallas. Friendly crew, upfront pricing, and spotless clean‑up so
                  your space feels brand new.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
                >
                  Get a fast estimate
                </a>
                <a
                  href="tel:+16195306943"
                  className="inline-flex items-center justify-center rounded-full border border-slate-700 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-400 hover:text-emerald-200"
                >
                  Call now (619) 530‑6943
                </a>
              </div>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 sm:text-sm">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-slate-900/80 text-xs font-semibold text-emerald-300">
                    5★
                  </span>
                  <span>Trusted by homeowners &amp; businesses across Dallas–Fort Worth</span>
                </div>
                <div className="h-4 w-px bg-slate-700 hidden sm:block" />
                <p>Licensed · Insured · Locally owned &amp; operated · Verified by business</p>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative mx-auto max-w-md">
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-emerald-500/40 via-emerald-400/10 to-transparent blur-2xl" />
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 shadow-[0_24px_60px_rgba(15,23,42,0.9)] backdrop-blur">
                  <img
                    src="/truck-rid-of-junk.jpg"
                    alt="Rid of Junk truck in Dallas, TX"
                    className="h-64 w-full object-cover sm:h-80"
                  />
                  <div className="space-y-3 border-t border-white/5 p-5">
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.16em] text-emerald-300">
                          On‑time, every time
                        </p>
                        <p className="text-sm text-slate-200">Two‑hour arrival windows & real‑time updates.</p>
                      </div>
                      <div className="rounded-2xl bg-slate-900/80 px-3 py-2 text-right">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">Average response</p>
                        <p className="text-lg font-semibold text-emerald-300">15 min</p>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 text-[11px] text-slate-300">
                      <span className="rounded-full bg-slate-800/80 px-3 py-1">Same‑day & next‑day booking</span>
                      <span className="rounded-full bg-slate-800/80 px-3 py-1">Upfront, transparent pricing</span>
                      <span className="rounded-full bg-slate-800/80 px-3 py-1">We sweep up before we leave</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="border-b border-white/5 bg-slate-950/60">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <h2 className="font-display text-3xl tracking-tight text-slate-50 sm:text-4xl">
                  Junk removal services
                  <span className="block text-emerald-400">built around your schedule.</span>
                </h2>
                <p className="mt-3 max-w-2xl text-sm text-slate-300 sm:text-base">
                  From single‑item pickups to full property cleanouts, Rid of Junk makes it effortless to reclaim your
                  space. Tell us what needs to go, and we handle the rest.
                </p>
              </div>
              <p className="text-sm text-slate-400 md:max-w-xs">
                Not sure which service you need? Reach out and we’ll recommend the best option and send a quick estimate.
              </p>
            </div>

            <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service) => (
                <article
                  key={service.title}
                  className="group flex flex-col justify-between rounded-2xl border border-slate-800 bg-gradient-to-b from-slate-900/80 to-slate-950/80 p-5 shadow-[0_18px_40px_rgba(15,23,42,0.9)] transition hover:-translate-y-1 hover:border-emerald-400/70 hover:shadow-emerald-500/20"
                >
                  <div>
                    <h3 className="font-display text-lg text-slate-50">{service.title}</h3>
                    <p className="mt-2 text-sm text-slate-300">{service.description}</p>
                    <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                      {service.items.map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs text-slate-400">
                    <span>Residential & commercial</span>
                    <span className="rounded-full bg-slate-900/80 px-2 py-1 text-[11px] font-medium text-emerald-300">
                      Free estimates
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* About / Process */}
        <section id="about" className="border-b border-white/5 bg-slate-950">
          <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 py-14 sm:px-6 lg:flex-row lg:items-center lg:px-8 lg:py-18">
            <div className="flex-1 space-y-5">
              <h2 className="font-display text-3xl tracking-tight text-slate-50 sm:text-4xl">
                Locally owned.{" "}
                <span className="text-emerald-400">
                  Community‑minded.
                </span>
              </h2>
              <p className="text-sm text-slate-300 sm:text-base">
                Rid of Junk is a Dallas‑based junk removal company built on respect, reliability, and doing the job the
                right way. Our team shows up on time, treats your home like our own, and leaves every space broom‑clean.
              </p>
              <p className="text-sm text-slate-300 sm:text-base">
                We care about where your items end up. Whenever possible, we donate usable furniture and goods, recycle
                materials responsibly, and minimize what goes to the landfill.
              </p>
              <dl className="grid gap-4 text-sm text-slate-200 sm:grid-cols-3">
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-slate-400">Founded</dt>
                  <dd className="mt-1 font-semibold">Dallas, TX</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-slate-400">Response time</dt>
                  <dd className="mt-1 font-semibold">&lt; 15 minutes on average</dd>
                </div>
                <div>
                  <dt className="text-xs uppercase tracking-[0.18em] text-slate-400">Customer focus</dt>
                  <dd className="mt-1 font-semibold">Friendly, no‑pressure estimates</dd>
                </div>
              </dl>
            </div>

            <div className="flex-1">
              <div className="relative mx-auto max-w-md">
                <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-tr from-emerald-500/30 via-slate-900 to-slate-950 blur-2xl" />
                <div className="space-y-4 overflow-hidden rounded-3xl border border-white/10 bg-slate-900/80 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
                  <h3 className="font-display text-lg text-slate-50">How it works</h3>
                  <ol className="space-y-3 text-sm text-slate-200">
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-300">
                        1
                      </span>
                      <div>
                        <p className="font-medium">Tell us what needs to go.</p>
                        <p className="text-slate-300">
                          Call, text a few photos, or use the form below and we’ll give you a quick, upfront estimate.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-300">
                        2
                      </span>
                      <div>
                        <p className="font-medium">We arrive on time & confirm pricing.</p>
                        <p className="text-slate-300">
                          Our crew gives a final quote on‑site before any work begins – no surprises.
                        </p>
                      </div>
                    </li>
                    <li className="flex gap-3">
                      <span className="mt-0.5 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/10 text-xs font-semibold text-emerald-300">
                        3
                      </span>
                      <div>
                        <p className="font-medium">We haul everything & sweep up.</p>
                        <p className="text-slate-300">
                          We remove items from anywhere on your property and leave the area clean and ready to use.
                        </p>
                      </div>
                    </li>
                  </ol>
                  <div className="mt-2 rounded-2xl border border-emerald-400/40 bg-emerald-500/5 px-4 py-3 text-xs text-emerald-100">
                    Eco‑friendly note: we donate and recycle whenever possible so your junk can get a second life.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="border-b border-white/5 bg-slate-950/80">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
            <div className="text-center">
              <h2 className="font-display text-3xl tracking-tight text-slate-50 sm:text-4xl">Frequently asked questions</h2>
              <p className="mt-3 text-sm text-slate-300 sm:text-base">
                Quick answers to common questions about our junk removal services in Dallas–Fort Worth.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm text-slate-100 transition hover:border-emerald-400/60 sm:px-5 sm:py-4"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                    <span className="text-left font-medium">{faq.question}</span>
                    <span className="shrink-0 rounded-full border border-slate-700 bg-slate-900/70 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-300 group-open:border-emerald-400 group-open:text-emerald-300">
                      {` ${"More"}`}
                    </span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-300">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="bg-slate-950">
          <div className="mx-auto max-w-5xl px-4 py-14 sm:px-6 lg:px-8 lg:py-18">
            <div className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] md:items-start">
              <div className="space-y-4">
                <h2 className="font-display text-3xl tracking-tight text-slate-50 sm:text-4xl">
                  Ready to be rid of junk?
                </h2>
                <p className="text-sm text-slate-300 sm:text-base">
                  Share a few details about what you need removed and how soon you’d like service. We’ll reply quickly
                  with a friendly, no‑pressure estimate.
                </p>

                <div className="mt-4 grid gap-3 text-sm text-slate-200 sm:grid-cols-2">
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Call or text</p>
                    <a
                      href="tel:+16195306943"
                      className="mt-1 block text-lg font-semibold text-emerald-300 hover:text-emerald-200"
                    >
                      (619) 530‑6943
                    </a>
                    <p className="mt-1 text-xs text-slate-400">Fastest response for same‑day bookings.</p>
                  </div>
                  <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-4">
                    <p className="text-xs uppercase tracking-[0.18em] text-slate-400">Location &amp; hours</p>
                    <p className="mt-1 text-sm font-semibold text-slate-100">
                      17000 Preston Rd, Dallas, TX 75248
                    </p>
                    <p className="mt-1 text-xs text-slate-300">Serving the greater Dallas area.</p>
                    <p className="mt-2 text-xs font-medium text-slate-200">Open 7:00 AM – 8:00 PM, 7 days a week</p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-white/10 bg-slate-950/90 p-6 shadow-[0_24px_60px_rgba(15,23,42,0.9)]">
                <h3 className="font-display text-lg text-slate-50">Request a quick estimate</h3>
                <p className="mt-1 text-xs text-slate-400">
                  This simple form is for demo purposes only – for real jobs, please call or text for the fastest
                  response.
                </p>
                <form className="mt-5 space-y-4">
                  <div className="space-y-1">
                    <label htmlFor="name" className="text-xs font-medium text-slate-200">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Jane Doe"
                      className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 outline-none ring-emerald-500/40 focus:border-emerald-400 focus:ring-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="phone" className="text-xs font-medium text-slate-200">
                      Phone number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="(619) 530‑6943"
                      className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 outline-none ring-emerald-500/40 focus:border-emerald-400 focus:ring-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="email" className="text-xs font-medium text-slate-200">
                      Email (optional)
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 outline-none ring-emerald-500/40 focus:border-emerald-400 focus:ring-2"
                    />
                  </div>
                  <div className="space-y-1">
                    <label htmlFor="details" className="text-xs font-medium text-slate-200">
                      What needs to go?
                    </label>
                    <textarea
                      id="details"
                      rows={3}
                      placeholder="Tell us about the items, rooms or areas you’d like cleared and your ideal timing."
                      className="w-full rounded-xl border border-slate-800 bg-slate-900/80 px-3 py-2 text-sm text-slate-50 placeholder:text-slate-500 outline-none ring-emerald-500/40 focus:border-emerald-400 focus:ring-2"
                    />
                  </div>
                  <button
                    type="button"
                    className="mt-2 inline-flex w-full items-center justify-center rounded-full bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
                  >
                    Submit (demo)
                  </button>
                  <p className="text-[11px] text-slate-500">
                    By contacting us, you agree to receive a follow‑up call or text about your estimate. No spam, ever.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
