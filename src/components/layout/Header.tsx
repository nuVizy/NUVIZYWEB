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
    <header className="sticky top-0 z-50 bg-[var(--panel)]/80 backdrop-blur border-b border-[rgba(0,255,65,0.06)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 font-display text-lg neon" onClick={closeMenu}>
            <span className="w-9 h-9 bg-[var(--neon)]/8 text-[var(--neon)] border border-[rgba(0,255,65,0.08)] flex items-center justify-center rounded">nV</span>
            <span className="tracking-tight">nuViz Studio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  classNames(
                    'transition-colors duration-200 hover:text-neon',
                    isActive || location.pathname.startsWith(item.to)
                      ? 'text-neon border-b border-[rgba(0,255,65,0.08)]'
                      : 'text-neon-dim'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            className="md:hidden p-2 text-neon-dim"
            aria-label="Toggle menu"
            onClick={handleToggle}
          >
            <span className="block w-6 h-0.5 bg-neon-dim mb-1" />
            <span className="block w-6 h-0.5 bg-neon-dim mb-1" />
            <span className="block w-6 h-0.5 bg-neon-dim" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 border-t border-[rgba(0,255,65,0.04)]">
            <nav className="flex flex-col gap-3 pt-3 text-sm font-medium">
              {navItems.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    classNames(
                      'transition-colors duration-200',
                      isActive || location.pathname.startsWith(item.to) ? 'text-neon' : 'text-neon-dim'
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
