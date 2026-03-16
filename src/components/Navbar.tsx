
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "FAQs", href: "#faqs" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" className="font-display text-2xl font-black tracking-tighter text-slate-900 flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white text-lg">R</div>
          RID OF <span className="text-primary italic">JUNK</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-bold uppercase tracking-widest text-slate-600 transition-colors duration-200 hover:text-primary"
            >
              {item.label}
            </a>
          ))}
          <a
            href="tel:6195306943"
            className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-primary shadow-lg shadow-slate-900/10"
          >
            <Phone size={16} />
            (619) 530-6943
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-slate-900 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="md:hidden absolute top-20 left-0 right-0 overflow-hidden border-b border-slate-100 bg-white shadow-2xl p-6"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="text-lg font-bold text-slate-900 border-b border-slate-50 pb-2 flex justify-between items-center"
                >
                  {item.label}
                  <div className="w-2 h-2 rounded-full bg-primary/20"></div>
                </a>
              ))}
              <a
                href="tel:6195306943"
                onClick={() => setIsOpen(false)}
                className="mt-4 rounded-xl bg-primary px-5 py-4 text-center font-bold text-white shadow-xl shadow-primary/20 flex items-center justify-center gap-3"
              >
                <Phone size={20} />
                Call (619) 530-6943
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
