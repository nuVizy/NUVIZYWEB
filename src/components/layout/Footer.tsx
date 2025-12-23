import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-[rgba(0,255,65,0.04)] bg-[var(--panel)] text-neon-dim">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2 space-y-3">
          <h3 className="font-display text-2xl neon">nuViz Studio</h3>
          <p className="text-sm text-[var(--muted)]">
            Crafted visuals with rhythm, patience, and sharp intuition. We chase the frame that moves people.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-wide text-neon-dim">Quick links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/work" className="hover:text-neon">Work</Link></li>
            <li><Link to="/about" className="hover:text-neon">About</Link></li>
            <li><Link to="/contact" className="hover:text-neon">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-wide text-neon-dim">Social</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-neon">Instagram</a></li>
            <li><a href="#" className="hover:text-neon">Vimeo</a></li>
            <li><a href="#" className="hover:text-neon">Behance</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[rgba(0,255,65,0.03)] py-4 text-center text-xs text-neon-dim">
        © {new Date().getFullYear()} nuViz Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
