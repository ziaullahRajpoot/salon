import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useLocation } from "wouter";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { SiWhatsapp, SiInstagram } from "react-icons/si";
import { toast } from "sonner";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    detail: "Wellbeautehomeservice@gmail.com",
    link: "mailto:Wellbeautehomeservice@gmail.com",
  },
  {
    icon: Phone,
    title: "WhatsApp",
    detail: "+971 50 927 0282",
    link: "https://wa.me/971509270282",
  },
  {
    icon: MapPin,
    title: "Service Area",
    detail: "Dubai, UAE – We come to you!",
    link: null,
  },
  {
    icon: Clock,
    title: "Opening Hours",
    detail: "Every Day: 10:00 AM – 12:00 Midnight",
    link: null,
  },
];

export default function ContactPage() {
  const [location] = useLocation();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const serviceParam = params.get("service");
    if (serviceParam) {
      setFormData((prev) => ({ ...prev, service: serviceParam }));
    }
  }, [location]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      toast.success("Message sent! We will get back to you soon.");
      setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    } catch (error: any) {
      toast.error(error.message || "Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Contact Us | Well Done Beauty Salon Dubai</title>
        <meta
          name="description"
          content="Book your home beauty or spa appointment in Dubai. WhatsApp us or fill the form — available 10am to midnight, every day."
        />
        <link rel="canonical" href="https://welldonebeautysalon.com/contact" />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="min-h-screen pt-32 pb-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex justify-center mb-4">
              <img src="/logo.png" alt="Well Done Beauty Salon logo" className="w-16 h-16 object-contain" />
            </div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-secondary font-medium tracking-widest uppercase mb-2 block"
            >
              Get in Touch
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              Book Your Experience
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-muted-foreground max-w-2xl mx-auto font-light"
            >
              Ready to relax at home? Reach out via WhatsApp for the fastest reply, or fill in the form below.
            </motion.p>
          </div>

          {/* Quick Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <a
              href="https://wa.me/971509270282?text=Hello,%20I%20want%20to%20book%20a%20home%20beauty%20service."
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-whatsapp-quick"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bc5c] text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-lg"
            >
              <SiWhatsapp size={22} />
              Book via WhatsApp
            </a>
            <a
              href="https://www.instagram.com/wellbeautee?igsh=ZDBscHptemltaGZ6&utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-instagram-quick"
              className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-8 py-4 rounded-full font-medium text-lg transition-all duration-300 shadow-lg hover:opacity-90"
            >
              <SiInstagram size={22} />
              Follow on Instagram
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-card p-8 md:p-10 rounded-2xl shadow-xl border border-border/50"
            >
              <h2 className="text-3xl mb-8 font-serif">Send a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-foreground">
                    Full Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    data-testid="input-name"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-foreground">
                      Email Address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@example.com"
                      data-testid="input-email"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+971 50 000 0000"
                      data-testid="input-phone"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="service" className="text-sm font-medium text-foreground">
                    Service of Interest
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    data-testid="select-service"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow appearance-none"
                  >
                    <option value="" disabled>Select a service</option>
                    <option value="Swedish Relaxation Massage">Swedish Relaxation Massage</option>
                    <option value="Hot Stone Therapy">Hot Stone Therapy</option>
                    <option value="Wood Therapy (Maderotherapy)">Wood Therapy (Maderotherapy)</option>
                    <option value="Cupping Therapy">Cupping Therapy</option>
                    <option value="Hydrating Facial Treatment">Hydrating Facial Treatment</option>
                    <option value="Advanced Facial Technology">Advanced Facial Technology</option>
                    <option value="Gel Nail Treatment">Gel Nail Treatment</option>
                    <option value="Full Nail Care">Full Nail Care</option>
                    <option value="Signature Home Spa Experience">Signature Home Spa Experience</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    placeholder="Please share your address, preferred date and time, and any special requests."
                    data-testid="textarea-message"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-shadow min-h-[120px] resize-y"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  data-testid="button-submit"
                  className="w-full py-4 rounded-full bg-primary hover:bg-secondary text-primary-foreground font-medium uppercase tracking-wider transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>Send Message <Send className="w-4 h-4" /></>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="space-y-10"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <div key={index} className="flex flex-col gap-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                        <Icon size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-serif font-semibold mb-2">{info.title}</h3>
                        {info.link ? (
                          <a href={info.link} className="text-muted-foreground hover:text-primary transition-colors break-all">
                            {info.detail}
                          </a>
                        ) : (
                          <p className="text-muted-foreground">{info.detail}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Brand Image */}
              <div className="rounded-2xl overflow-hidden shadow-lg h-64">
                <img
                  src="/images/spa8.jpg"
                  alt="Well Done Beauty Salon branded setup"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Social Links */}
              <div className="bg-secondary/10 border border-secondary/20 rounded-2xl p-8">
                <h3 className="text-2xl font-serif mb-2">Follow Us</h3>
                <p className="text-muted-foreground mb-6 text-sm">
                  See our latest work and client results on Instagram.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://www.instagram.com/wellbeautee?igsh=ZDBscHptemltaGZ6&utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045] text-white px-6 py-3 rounded-full font-medium hover:opacity-90 transition-opacity shadow-md"
                  >
                    <SiInstagram size={18} />
                    @wellbeautee
                  </a>
                  <a
                    href="https://wa.me/971509270282"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-[#25D366] text-white px-6 py-3 rounded-full font-medium hover:bg-[#20bc5c] transition-colors shadow-md"
                  >
                    <SiWhatsapp size={18} />
                    WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
