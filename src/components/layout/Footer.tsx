import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="border-t border-slate/20 bg-charcoal text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10 grid gap-8 md:grid-cols-4">
        <div className="md:col-span-2 space-y-3">
          <h3 className="font-serif text-xl">nuViz Studio</h3>
          <p className="text-sm text-gray-200">
            Crafted visuals with rhythm, patience, and sharp intuition. We chase the frame that moves people.
          </p>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-wide text-gray-300">Quick links</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><Link to="/work" className="hover:text-white">Work</Link></li>
            <li><Link to="/about" className="hover:text-white">About</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm uppercase tracking-wide text-gray-300">Social</h4>
          <ul className="mt-3 space-y-2 text-sm">
            <li><a href="#" className="hover:text-white">Instagram</a></li>
            <li><a href="#" className="hover:text-white">Vimeo</a></li>
            <li><a href="#" className="hover:text-white">Behance</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} nuViz Studio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
