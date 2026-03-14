import { Link } from "wouter";
import { SiInstagram, SiFacebook, SiWhatsapp } from "react-icons/si";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Well Done Beauty Salon logo"
                className="w-12 h-12 object-contain brightness-0 invert"
              />
              <div className="leading-tight">
                <span className="font-serif text-xl font-bold tracking-tight block">
                  Well Done
                </span>
                <span className="text-xs font-medium text-primary-foreground/70 uppercase tracking-widest">
                  Beauty Salon
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed">
              Elevating your wellness with premium at-home beauty and spa services. Experience luxury, professionalism, and true relaxation delivered to your door in Dubai.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/wellbeautee?igsh=ZDBscHptemltaGZ6&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary transition-colors"
              >
                <SiInstagram size={18} />
              </a>
              <a
                href="https://wa.me/971509270282"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-[#25D366] transition-colors"
              >
                <SiWhatsapp size={18} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-secondary transition-colors"
              >
                <SiFacebook size={18} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Services", "Portfolio", "About", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-white transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-white shrink-0 mt-1" />
                <a href="mailto:Wellbeautehomeservice@gmail.com" className="hover:text-white transition-colors break-all">
                  Wellbeautehomeservice@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-white shrink-0 mt-1" />
                <a href="https://wa.me/971509270282" className="hover:text-white transition-colors">
                  +971 50 927 0282
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-white shrink-0 mt-1" />
                <span>Dubai, UAE<br />We come to you!</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Business Hours</h4>
            <div className="flex items-start gap-3 text-primary-foreground/70">
              <Clock className="w-5 h-5 text-white shrink-0 mt-1" />
              <div>
                <p className="font-medium text-white mb-2">Every Day — No Days Off!</p>
                <p>10:00 AM – 12:00 Midnight</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-white/10 rounded-xl border border-white/10 text-sm text-primary-foreground/80">
              <p className="font-medium text-white mb-1">Ready to book?</p>
              <p>Message us on WhatsApp or call us anytime between 10am and midnight.</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-primary-foreground/50 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} Well Done Beauty Salon. All rights reserved.</p>
          <p>
            <a href="https://welldonebeautysalon.com" className="hover:text-white transition-colors">
              welldonebeautysalon.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
