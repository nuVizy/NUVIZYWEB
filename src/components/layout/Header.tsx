import { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { classNames } from '../../lib/classNames';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/work', label: 'Work' },
  { to: '/photography', label: 'Photography' },
  { to: '/videography', label: 'Videography' },
  { to: '/music-videos', label: 'Music Videos' },
  { to: '/design', label: 'Design' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' }
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const handleToggle = () => setOpen(prev => !prev);
  const closeMenu = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate/20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2 font-serif text-xl tracking-tight" onClick={closeMenu}>
            <span className="w-8 h-8 bg-charcoal text-white flex items-center justify-center">nV</span>
            <span>nuViz Studio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  classNames(
                    'transition-colors duration-200 hover:text-charcoal',
                    isActive || location.pathname.startsWith(item.to)
                      ? 'text-charcoal border-b border-charcoal'
                      : 'text-slate'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            className="md:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
            onClick={handleToggle}
          >
            <span className="block w-6 border-t border-charcoal mb-1" />
            <span className="block w-6 border-t border-charcoal mb-1" />
            <span className="block w-6 border-t border-charcoal" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 border-t border-slate/20">
            <nav className="flex flex-col gap-3 pt-3 text-sm font-medium">
              {navItems.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    classNames(
                      'transition-colors duration-200',
                      isActive || location.pathname.startsWith(item.to) ? 'text-charcoal' : 'text-slate'
                    )
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
