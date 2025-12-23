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
    <header className="absolute inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-center justify-between h-20 py-4">
          <Link to="/" className="flex items-center gap-3 font-display text-sm" onClick={closeMenu}>
            <span className="text-[var(--accent-green)] font-mono text-xs tracking-wider">nuViz</span>
            <span className="tracking-tight text-[var(--muted)] text-xs">/</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium bg-transparent">
            {navItems.map(item => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  classNames(
                    'transition-colors duration-200 hover:text-[var(--accent-green)]',
                    isActive || location.pathname.startsWith(item.to)
                      ? 'text-[var(--accent-green)] border-b border-[var(--accent-dim)]'
                      : 'text-[var(--muted)]'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button type="button" className="md:hidden p-2 text-[var(--muted)]" aria-label="Toggle menu" onClick={handleToggle}>
            <span className="block w-6 h-0.5 bg-[var(--muted)] mb-1" />
            <span className="block w-6 h-0.5 bg-[var(--muted)] mb-1" />
            <span className="block w-6 h-0.5 bg-[var(--muted)]" />
          </button>
        </div>
        {open && (
          <div className="md:hidden pb-4 border-t border-[var(--accent-dim)] bg-[var(--panel)]/95 backdrop-blur-sm">
            <nav className="flex flex-col gap-3 pt-3 text-sm font-medium px-3">
              {navItems.map(item => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={closeMenu}
                  className={({ isActive }) =>
                    classNames(
                      'transition-colors duration-200',
                      isActive || location.pathname.startsWith(item.to) ? 'text-[var(--accent-green)]' : 'text-[var(--text)]'
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
