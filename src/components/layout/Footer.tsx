import { socialLinks } from "../../data/socialLinks";

function Footer() {
  return (
    <footer className="border-t border-border bg-black px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <div className="text-center md:text-left">
          <p className="text-3xl text-gold">SESC</p>
          <p className="mt-1 font-body text-sm text-muted">Scientific & Educational Community</p>
        </div>

        {socialLinks.length > 0 && (
          <div className="flex flex-wrap justify-center gap-5">
            {socialLinks.map((link) => (
              <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="font-body text-sm text-gray transition-colors hover:text-gold">
                {link.label}
              </a>
            ))}
          </div>
        )}

        <p className="font-body text-sm text-muted">© {new Date().getFullYear()} SESC</p>
      </div>
      <div className="mx-auto mt-8 max-w-7xl"><div className="magic-divider" /></div>
      <p className="mt-6 text-center font-body text-sm text-muted">Built with curiosity, creativity, and a little magic.</p>
    </footer>
  );
}

export default Footer;
