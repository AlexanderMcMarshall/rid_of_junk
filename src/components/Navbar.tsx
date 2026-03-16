import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
    <nav className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-20 sm:px-6 lg:px-8">
        <a
          href="#home"
          className="font-display text-lg font-semibold tracking-[0.22em] text-slate-50 sm:text-xl"
        >
          RID OF{" "}
          <span className="rounded-full bg-gradient-to-r from-emerald-400 to-lime-300 px-2 py-0.5 text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
            JUNK
          </span>
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="relative text-sm font-medium text-slate-300 transition-colors duration-300 hover:text-emerald-300"
            >
              <span className="relative">
              {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-to-r from-emerald-400 to-lime-300 transition-all duration-300 group-hover:w-full" />
              </span>
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-emerald-500 px-5 py-2.5 text-sm font-semibold font-display tracking-wide text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
          >
            Get Estimate
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="p-2 text-slate-50 md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden border-b border-white/5 bg-slate-950/95 backdrop-blur-xl"
          >
            <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-2 text-base text-slate-300 transition-colors hover:text-emerald-300"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-full bg-emerald-500 px-5 py-3 text-center text-sm font-semibold font-display tracking-wide text-slate-950"
              >
                Get Estimate
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
