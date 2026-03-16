
const Footer = () => {
  return (
    <footer className="border-t border-slate-100 bg-slate-900 py-16 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#home" className="font-display text-2xl font-black tracking-tighter">
            RID OF <span className="text-secondary italic">JUNK</span>
          </a>
          <div className="flex flex-wrap justify-center gap-8 text-sm font-bold uppercase tracking-widest text-slate-400">
            {["Home", "Services", "About", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="transition-colors hover:text-primary"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-medium">
          <p>© {new Date().getFullYear()} Rid of Junk. Dallas, TX. All rights reserved.</p>
          <p>Licensed & Insured Junk Removal & Hauling Services.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
