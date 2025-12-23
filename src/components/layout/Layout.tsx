import { Outlet, ScrollRestoration } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="min-h-screen matrix-bg bg-[var(--bg)] text-neon-dim flex flex-col">
      <Header />
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-10">
          <Outlet />
        </div>
      </main>
      <Footer />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
