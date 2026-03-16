
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Phone, MapPin, Clock, Star, CheckCircle2, ArrowRight } from "lucide-react";

const services = [
  {
    title: "Full-service junk removal",
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
    title: "Eco-friendly disposal",
    description: "We prioritize donating, recycling, and responsible disposal whenever possible.",
    items: ["Donation drop-offs", "Metal & electronics recycling", "Responsible landfill use"],
  },
];

const faqs = [
  {
    question: "What areas do you serve?",
    answer: "We proudly serve North Dallas, Richardson, Plano, and surrounding DFW communities. Give us a quick call to confirm we cover your specific neighborhood.",
  },
  {
    question: "How does pricing work?",
    answer: "Pricing is based on how much space your items take up in our truck. We provide upfront, transparent pricing with no hidden fees. We always give a final quote on-site before starting.",
  },
  {
    question: "Do I need to move anything outside?",
    answer: "No! Our full-service crew handles all the heavy lifting. We take items from anywhere on your property—attics, basements, or backyards.",
  },
  {
    question: "Can you come same-day?",
    answer: "Yes, we often have same-day and next-day availability. Call early for the fastest response!",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-12">
              <div className="flex-1 space-y-8 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold text-primary">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                  </span>
                  Open 7:00 AM – 8:00 PM · Same‑day available
                </div>
                
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight">
                  Get Rid of <span className="text-primary">Junk</span>
                  <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-600 mt-2">Fast, clean, and stress‑free.</span>
                </h1>
                
                <p className="max-w-xl mx-auto lg:mx-0 text-lg sm:text-xl text-slate-600">
                  Junk Removal & Hauling in North Dallas. Friendly crew, upfront pricing, and spotless clean‑up so your space feels brand new.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                  <a href="#contact" className="btn-secondary w-full sm:w-auto text-lg px-8 py-4">
                    Get a Fast Estimate
                  </a>
                  <a href="tel:6195306943" className="btn-primary w-full sm:w-auto text-lg px-8 py-4 bg-primary flex items-center gap-2">
                    <Phone size={20} />
                    Call (619) 530-6943
                  </a>
                </div>

                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 pt-4">
                  <div className="flex items-center gap-1.5">
                    <div className="flex text-orange-500">
                      {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                    </div>
                    <span className="font-bold text-slate-900">5★ Trusted</span>
                  </div>
                  <div className="h-4 w-px bg-slate-300 hidden sm:block"></div>
                  <p className="text-sm text-slate-500 font-medium italic">
                    Licensed · Insured · Locally Owned · Professional
                  </p>
                </div>
              </div>

              <div className="flex-1 w-full max-w-2xl lg:max-w-none">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                  <img 
                    src="/rid_of_junk/hero-truck.png" 
                    alt="Rid of Junk truck in Dallas, TX" 
                    className="w-full h-auto object-cover transform transition duration-700 hover:scale-105"
                  />
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                    <p className="text-lg font-bold">On-time, every time.</p>
                    <p className="text-sm text-slate-200">Two-hour arrival windows & real-time updates.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats / Proof */}
        <section className="bg-slate-50 py-12 border-y border-slate-200">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { label: "Avg Response", value: "15 min" },
                { label: "Satisfied Customers", value: "2k+" },
                { label: "Locally Owned", value: "Dallas, TX" },
                { label: "Service", value: "Everywhere" }
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <p className="text-sm uppercase tracking-widest text-slate-500 font-bold mb-1">{stat.label}</p>
                  <p className="text-2xl font-extrabold text-primary">{stat.value}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 lg:py-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
                Junk removal services <br />
                <span className="text-primary italic font-semibold">built around your schedule.</span>
              </h2>
              <p className="text-lg text-slate-600">
                From single-item pickups to full property cleanouts, Rid of Junk makes it effortless to reclaim your space. Tell us what needs to go, and we handle the rest.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, i) => (
                <div key={i} className="service-card p-8 flex flex-col h-full bg-white hover:border-primary/40">
                  <h3 className="text-xl font-bold text-slate-900 mb-4">{service.title}</h3>
                  <p className="text-slate-600 mb-6 text-sm flex-1">{service.description}</p>
                  <ul className="space-y-3 mb-8">
                    {service.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-2 text-sm text-slate-700 font-medium">
                        <CheckCircle2 size={16} className="text-primary" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="pt-6 border-t border-slate-100 mt-auto">
                    <p className="text-xs font-bold text-primary uppercase tracking-wider">Residential & Commercial</p>
                    <p className="text-xs text-slate-500 mt-1">Free upfront estimates</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / Process */}
        <section id="about" className="py-20 lg:py-32 bg-slate-900 text-white overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row items-center gap-16">
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                  Locally owned. <br />
                  <span className="text-secondary">Community-minded.</span>
                </h2>
                <div className="space-y-4 text-slate-300 text-lg">
                  <p>
                    Rid of Junk is a Dallas-based junk removal company built on respect, reliability, and doing the job the right way. Our team shows up on time, treats your home like our own, and leaves every space broom-clean.
                  </p>
                  <p>
                    We care about where your items end up. Whenever possible, we donate usable furniture and goods, recycle materials responsibly, and minimize what goes to the landfill.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 text-white">
                    <CheckCircle2 className="text-secondary" />
                    <div>
                      <p className="font-bold">Eco-Friendly</p>
                      <p className="text-xs text-slate-400">We donate & recycle</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 text-white">
                    <CheckCircle2 className="text-secondary" />
                    <div>
                      <p className="font-bold">Upfront Price</p>
                      <p className="text-xs text-slate-400">No hidden fees ever</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full space-y-8">
                <div className="rounded-3xl overflow-hidden border-8 border-white shadow-2xl">
                  <img 
                    src="/rid_of_junk/crew.png" 
                    alt="Our professional junk removal crew" 
                    className="w-full h-72 object-cover transform transition duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative">
                  <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-2xl text-slate-900">
                    <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                      How It Works
                    </h3>
                    <div className="space-y-8 relative">
                      <div className="absolute left-4 top-2 bottom-2 w-0.5 bg-slate-100"></div>
                      {[
                        { step: 1, title: "Tell us what needs to go", desc: "Call, text photos, or use our form for a quick estimate." },
                        { step: 2, title: "We arrive & confirm", desc: "We give a final quote on-site before any work begins." },
                        { step: 3, title: "We haul & sweep up", desc: "We leave the area spotless and ready to use." }
                      ].map((item, i) => (
                        <div key={i} className="relative flex gap-6">
                          <div className="z-10 flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                            {item.step}
                          </div>
                          <div>
                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                            <p className="text-slate-600 text-sm">{item.desc}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-10 p-4 rounded-xl bg-primary/5 border border-primary/10 text-primary text-sm font-medium flex items-start gap-3">
                      <Clock size={20} className="flex-shrink-0" />
                      <p>Typical service takes less than 2 hours from arrival to broom-clean!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section id="faqs" className="py-20 lg:py-32 bg-white">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600">Quick answers to common questions about our junk removal services.</p>
            </div>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl border border-slate-200 overflow-hidden transition-all hover:border-primary/30">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer list-none font-bold text-slate-900">
                      <span>{faq.question}</span>
                      <span className="transition duration-300 group-open:rotate-180">
                        <ArrowRight size={20} className="rotate-90" />
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 border-t border-slate-50 pt-4">
                      {faq.answer}
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section id="contact" className="py-20 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-16">
              <div className="flex-1 space-y-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
                  Ready to be <br />
                  <span className="text-primary italic">Rid of Junk?</span>
                </h2>
                <p className="text-lg text-slate-600">
                  Share a few details about what you need removed. We’ll reply quickly with a friendly, no-pressure estimate.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary border border-slate-100">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">Call or Text</p>
                      <a href="tel:6195306943" className="text-2xl font-black text-primary hover:underline">(619) 530-6943</a>
                      <p className="text-sm text-slate-500">Fastest for same-day bookings.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary border border-slate-100">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">Location</p>
                      <p className="text-xl font-bold text-slate-700">17000 Preston Rd, Dallas, TX 75248</p>
                      <p className="text-sm text-slate-500">Serving the Greater North Dallas area.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center text-primary border border-slate-100">
                      <Clock size={24} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-slate-900 uppercase tracking-widest">Hours</p>
                      <p className="text-xl font-bold text-slate-700">7:00 AM – 8:00 PM</p>
                      <p className="text-sm text-slate-500">Available 7 days a week.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Quick Estimate</h3>
                <p className="text-sm text-slate-500 mb-8 italic text-balance">
                  This demo form is for visualization. For fastest service, please call or text us.
                </p>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">Your Name</label>
                      <input type="text" placeholder="Jane Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">Phone Number</label>
                      <input type="tel" placeholder="(619) 530-6943" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">Email (Optional)</label>
                    <input type="email" placeholder="you@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-500 px-1">What needs to go?</label>
                    <textarea rows={4} placeholder="Tell us about the items or areas you'd like cleared..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-primary focus:ring-4 focus:ring-primary/10 outline-none transition"></textarea>
                  </div>
                  <button type="button" className="btn-secondary w-full py-4 text-lg font-bold">
                    Submit Request
                  </button>
                  <p className="text-[10px] text-center text-slate-400">
                    By submitting, you agree to receive a follow-up about your estimate. We respect your privacy.
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
