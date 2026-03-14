import { Link } from "wouter";
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from "lucide-react";

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
                alt="Well Beaute Home Spa logo"
                className="w-12 h-12 object-contain brightness-0 invert"
              />
              <div className="leading-tight">
                <span className="font-serif text-xl font-bold tracking-tight block">
                  Well Beaute
                </span>
                <span className="text-xs font-medium text-primary-foreground/70 uppercase tracking-widest">
                  Home Spa
                </span>
              </div>
            </Link>
            <p className="text-primary-foreground/70 leading-relaxed max-w-none">
              Elevating your wellness with premium at-home spa services. Experience luxury, professionalism, and true relaxation delivered to your door.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-secondary transition-colors">
                <Twitter size={18} />
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
                    className="text-primary-foreground/70 hover:text-secondary transition-colors"
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
                <Mail className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <a href="mailto:Wellbeautehomeservice@gmail.com" className="hover:text-white transition-colors break-all">
                  Wellbeautehomeservice@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <a href="https://wa.me/971509270282" className="hover:text-white transition-colors">
                  +971 50 927 0282
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-secondary shrink-0 mt-1" />
                <span>Luxury Avenue, Suite 100<br />Dubai, UAE</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-serif font-semibold mb-6">Business Hours</h4>
            <ul className="space-y-4 text-primary-foreground/70">
              <li className="flex justify-between border-b border-white/10 pb-2 gap-4">
                <span>Monday – Friday</span>
                <span className="whitespace-nowrap">9:00 AM – 8:00 PM</span>
              </li>
              <li className="flex justify-between border-b border-white/10 pb-2 gap-4">
                <span>Saturday</span>
                <span className="whitespace-nowrap">10:00 AM – 6:00 PM</span>
              </li>
              <li className="flex justify-between pb-2 gap-4">
                <span>Sunday</span>
                <span>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-primary-foreground/50 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p>&copy; {currentYear} Well Beaute Home Spa. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
