import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Rocket } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../utils/cn';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Blogs', path: '/blogs' },
  { name: 'Career', path: '/career' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300',
        isScrolled
          ? 'bg-primary-navy/90 backdrop-blur-md border-b border-white/10 shadow-lg py-3'
          : 'bg-transparent py-5'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-white/10 group-hover:bg-primary-blue/20 transition-colors">
            <Rocket className="w-6 h-6 text-primary-cyan" />
          </div>
          <span className="font-display font-bold text-xl md:text-2xl text-white">
            Future<span className="text-primary-blue">Tech</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary-cyan',
                location.pathname === link.path ? 'text-primary-cyan' : 'text-text-muted'
              )}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/hire-us"
            className="px-6 py-2 rounded-full bg-gradient-button text-white font-medium hover:opacity-90 transition-opacity hover:shadow-[0_0_15px_rgba(46,123,255,0.5)]"
          >
            Hire Us
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-primary-navy border-b border-white/10 lg:hidden shadow-xl"
          >
            <div className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    'text-base font-medium p-2 rounded-md transition-colors',
                    location.pathname === link.path
                      ? 'bg-primary-blue/10 text-primary-cyan'
                      : 'text-text-muted hover:text-white hover:bg-white/5'
                  )}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                to="/hire-us"
                onClick={() => setMobileMenuOpen(false)}
                className="mt-2 text-center px-6 py-3 rounded-md bg-gradient-button text-white font-medium"
              >
                Hire Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
