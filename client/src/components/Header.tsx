import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Services", path: "/services" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "About", path: "/about" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Well Done Beauty Salon logo"
              className="w-12 h-12 object-contain group-hover:scale-105 transition-transform duration-300"
            />
            <div className="leading-tight">
              <span className="font-serif text-lg font-bold tracking-tight text-foreground block">
                Well Done
              </span>
              <span className="text-xs font-medium text-secondary uppercase tracking-widest">
                Beauty Salon
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-sm font-medium uppercase tracking-wider transition-colors duration-200 ${
                    isActive
                      ? "text-secondary"
                      : "text-foreground/75 hover:text-primary"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <a
              href="https://wa.me/971509270282"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-whatsapp-header"
              title="Chat on WhatsApp"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20bc5c] text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <SiWhatsapp size={16} />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="bg-primary hover:bg-secondary text-primary-foreground px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              Book Now
            </Link>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed inset-x-0 top-[68px] bg-background border-t border-border overflow-y-auto"
          >
            <nav className="flex flex-col px-6 py-8 space-y-6">
              {navItems.map((item) => {
                const isActive = location === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-2xl font-serif transition-colors duration-200 ${
                      isActive ? "text-secondary" : "text-foreground hover:text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <a
                href="https://wa.me/971509270282"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-full text-lg font-medium transition-colors hover:bg-[#20bc5c]"
              >
                <SiWhatsapp size={20} />
                Chat on WhatsApp
              </a>
              <div className="pt-2">
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="inline-block w-full text-center bg-primary text-primary-foreground px-6 py-4 rounded-full text-lg font-medium transition-colors hover:bg-secondary"
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
