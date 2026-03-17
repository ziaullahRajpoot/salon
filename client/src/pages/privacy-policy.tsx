import { Helmet } from "react-helmet";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | Well Done Beauty Salon Dubai</title>
        <meta
          name="description"
          content="Privacy Policy for Well Done Beauty Salon. Learn how we collect, use, and protect your personal information."
        />
        <link rel="canonical" href="https://welldonebeautysalon.com/privacy-policy" />
      </Helmet>

      <Header />
      <WhatsAppButton />

      <main className="min-h-screen pt-32 pb-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
            <p className="text-muted-foreground">Last updated: March 2026</p>
          </div>

          <div className="prose prose-neutral max-w-none space-y-8 text-foreground/80">

            <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="leading-relaxed">
                Welcome to Well Done Beauty Salon ("we", "our", or "us"). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website at welldonebeautysalon.com or contact us for our beauty and spa services in Dubai, UAE.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="leading-relaxed mb-4">We may collect the following types of information:</p>
              <ul className="space-y-2 list-disc list-inside text-foreground/80">
                <li><strong>Personal Information:</strong> Name, email address, phone number when you submit our contact form</li>
                <li><strong>Service Information:</strong> The type of beauty or spa service you are interested in</li>
                <li><strong>Communication Data:</strong> Messages you send us via our contact form or WhatsApp</li>
                <li><strong>Usage Data:</strong> Information about how you use our website, collected via cookies and analytics tools</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="leading-relaxed mb-4">We use the information we collect to:</p>
              <ul className="space-y-2 list-disc list-inside text-foreground/80">
                <li>Respond to your booking requests and inquiries</li>
                <li>Provide and improve our beauty and spa services</li>
                <li>Send you appointment confirmations and reminders</li>
                <li>Improve our website and user experience</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">4. Cookies and Tracking</h2>
              <p className="leading-relaxed mb-4">
                Our website uses cookies and similar tracking technologies to improve your browsing experience. We use:
              </p>
              <ul className="space-y-2 list-disc list-inside text-foreground/80">
                <li><strong>Google Analytics:</strong> To understand how visitors interact with our website</li>
                <li><strong>Google AdSense:</strong> To display relevant advertisements to our visitors</li>
                <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
              </ul>
              <p className="leading-relaxed mt-4">
                You can control cookies through your browser settings. Disabling cookies may affect some features of our website.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">5. Google AdSense and Third-Party Advertising</h2>
              <p className="leading-relaxed mb-4">
                We use Google AdSense to display advertisements on our website. Google may use cookies to serve ads based on your prior visits to our website or other websites. You may opt out of personalized advertising by visiting{" "}
                <a
                  href="https://www.google.com/settings/ads"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Google Ads Settings
                </a>.
              </p>
              <p className="leading-relaxed">
                Third-party vendors, including Google, use cookies to serve ads based on a user's prior visits to our website and/or other websites on the internet. These cookies allow Google and its partners to serve ads to our users based on their visit to our site.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">6. Data Sharing</h2>
              <p className="leading-relaxed mb-4">We do not sell your personal information. We may share your data with:</p>
              <ul className="space-y-2 list-disc list-inside text-foreground/80">
                <li><strong>Service Providers:</strong> Third-party tools that help us operate our website (EmailJS, Google Analytics)</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">7. Data Security</h2>
              <p className="leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">8. Your Rights</h2>
              <p className="leading-relaxed mb-4">You have the right to:</p>
              <ul className="space-y-2 list-disc list-inside text-foreground/80">
                <li>Access the personal information we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your personal data</li>
                <li>Opt out of marketing communications</li>
                <li>Lodge a complaint with a data protection authority</li>
              </ul>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">9. Children's Privacy</h2>
              <p className="leading-relaxed">
                Our website is not directed to children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
              </p>
            </section>

            <section className="bg-card rounded-2xl p-8 border border-border/50 shadow-sm">
              <h2 className="text-2xl font-serif font-semibold text-foreground mb-4">10. Contact Us</h2>
              <p className="leading-relaxed mb-4">
                If you have any questions about this Privacy Policy or how we handle your data, please contact us:
              </p>
              <ul className="space-y-2 text-foreground/80">
                <li><strong>Email:</strong>{" "}
                  <a href="mailto:Wellbeautehomeservice@gmail.com" className="text-primary hover:underline">
                    Wellbeautehomeservice@gmail.com
                  </a>
                </li>
                <li><strong>WhatsApp:</strong>{" "}
                  <a href="https://wa.me/971509270282" className="text-primary hover:underline">
                    +971 50 927 0282
                  </a>
                </li>
                <li><strong>Location:</strong> Dubai, UAE</li>
              </ul>
            </section>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}