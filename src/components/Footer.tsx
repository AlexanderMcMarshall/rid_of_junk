const Footer = () => {
  return (
    <footer className="border-t border-white/10 bg-slate-950/95 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <a
          href="#home"
          className="font-display text-base font-semibold tracking-[0.22em] text-slate-200 sm:text-lg"
        >
          RID OF <span className="text-emerald-400">JUNK</span>
        </a>
        <p className="text-xs text-slate-400 sm:text-sm">
          © {new Date().getFullYear()} Rid of Junk. All rights reserved.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-xs text-slate-400 sm:text-sm">
          {["Home", "Services", "About", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="transition-colors hover:text-emerald-300"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
