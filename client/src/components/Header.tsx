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
    { label: "Blogs", path: "/blog" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-white transition-all duration-300 ${
        isScrolled
          ? "shadow-[0_2px_20px_rgba(0,0,0,0.08)] py-2"
          : "shadow-[0_1px_4px_rgba(0,0,0,0.06)] py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/logo.png"
                alt="Well Done Beauty Salon logo"
                className="w-11 h-11 object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="leading-tight">
              <span className="font-serif text-lg font-bold tracking-tight text-neutral-900 block">
                Well Done
              </span>
              <span className="text-[10px] font-semibold text-rose-400 uppercase tracking-[0.2em]">
                Beauty Salon
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = location === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`relative px-4 py-2 text-sm font-medium uppercase tracking-wider transition-colors duration-200 rounded-full ${
                    isActive
                      ? "text-rose-500 bg-rose-50"
                      : "text-neutral-500 hover:text-neutral-900 hover:bg-neutral-50"
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-rose-400"
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://wa.me/971509270282"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-whatsapp-header"
              title="Chat on WhatsApp"
              className="flex items-center gap-2 border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white px-4 py-2 rounded-full text-sm font-medium transition-all duration-300"
            >
              <SiWhatsapp size={15} />
              <span>WhatsApp</span>
            </a>

            <Link
              href="/contact"
              className="bg-neutral-900 hover:bg-rose-500 text-white px-5 py-2.5 rounded-full text-sm font-medium uppercase tracking-wider transition-all duration-300 hover:shadow-lg active:scale-95"
            >
              Book Now
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-neutral-600 hover:text-neutral-900 transition-colors"
            aria-label="Toggle menu"
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="md:hidden fixed inset-x-0 top-[68px] bg-white border-t border-neutral-100 overflow-y-auto"
          >
            <nav className="flex flex-col px-6 py-8 space-y-2">
              {navItems.map((item) => {
                const isActive = location === item.path;
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`text-xl font-serif px-4 py-3 rounded-xl transition-colors duration-200 ${
                      isActive
                        ? "text-rose-500 bg-rose-50"
                        : "text-neutral-700 hover:text-neutral-900 hover:bg-neutral-50"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 space-y-3">
                <a
                  href="https://wa.me/971509270282"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-3 border-2 border-[#25D366] text-[#25D366] px-6 py-3.5 rounded-full text-base font-medium transition-colors hover:bg-[#25D366] hover:text-white"
                >
                  <SiWhatsapp size={18} />
                  Chat on WhatsApp
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="flex items-center justify-center w-full bg-neutral-900 hover:bg-rose-500 text-white px-6 py-3.5 rounded-full text-base font-medium transition-colors"
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
