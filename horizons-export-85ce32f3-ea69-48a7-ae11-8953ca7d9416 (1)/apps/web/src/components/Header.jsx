
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Flower2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Services', path: '/services' },
    { label: 'Portfolio', path: '/portfolio' },
    { label: 'About', path: '/about' },
    { label: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <Flower2 className="w-8 h-8 text-[#2E7BA8] group-hover:text-[#1B8B7E] transition-colors duration-300" />
            <span className="font-serif text-2xl font-bold tracking-tight text-foreground">
              Welldone<span className="text-[#1B8B7E]">beauty</span>saloon
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                    isActive ? 'text-[#1B8B7E]' : 'text-foreground/80 hover:text-[#2E7BA8]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link 
              to="/contact"
              className="bg-[#2E7BA8] hover:bg-[#1B8B7E] text-white px-6 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              Book Now
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-[#2E7BA8] transition-colors"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-x-0 top-[72px] bg-background border-t border-border overflow-y-auto"
          >
            <nav className="flex flex-col px-6 py-8 space-y-6">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-serif transition-colors duration-200 ${
                      isActive ? 'text-[#1B8B7E]' : 'text-foreground hover:text-[#2E7BA8]'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <div className="pt-6 border-t border-border">
                <Link 
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block w-full text-center bg-[#2E7BA8] text-white px-6 py-4 rounded-full text-lg font-medium transition-colors hover:bg-[#1B8B7E]"
                >
                  Book Appointment
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
