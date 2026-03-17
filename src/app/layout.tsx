import type { Metadata } from "next";
import { Playfair_Display, Lato } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hilary Lucas Counselling Services",
  description:
    "Compassionate, neurodiversity-affirming counselling for youth and adults in Alberta. Specializing in nervous system regulation, trauma-informed care, and person-centred therapy.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${lato.variable} font-[family-name:var(--font-lato)] antialiased`}>
        <Navbar />
        {children}
        <footer className="bg-forest-dark text-cream">
          <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Hilary Lucas Counselling</h3>
              <p className="text-sm text-cream/70 leading-relaxed">
                Compassionate, neurodiversity-affirming counselling for youth and adults in Alberta.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <ul className="text-sm text-cream/70 space-y-2">
                <li><a href="/about" className="hover:text-gold-light transition-colors">About</a></li>
                <li><a href="/services" className="hover:text-gold-light transition-colors">Services</a></li>
                <li><a href="/groups" className="hover:text-gold-light transition-colors">Groups & Workshops</a></li>
                <li><a href="/resources" className="hover:text-gold-light transition-colors">Resources</a></li>
                <li><a href="/regulation" className="hover:text-gold-light transition-colors">Regulation Tool</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Book a Session</h3>
              <div className="text-sm text-cream/70 space-y-3">
                <div>
                  <p className="font-medium text-cream mb-1">Virtual — Alberta-wide</p>
                  <a
                    href="https://HilaryLucas.as.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-light transition-colors"
                  >
                    Book via Acuity
                  </a>
                </div>
                <div>
                  <p className="font-medium text-cream mb-1">In-Person — Camrose, AB</p>
                  <a
                    href="https://camrosewellness.janeapp.com/#/counselling-psychology-mental-health"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-gold-light transition-colors"
                  >
                    Camrose Wellness Collective
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-white/10 text-center text-xs text-cream/40 py-4">
            © {new Date().getFullYear()} Hilary Lucas Counselling Services. All rights reserved.
          </div>
        </footer>
      </body>
    </html>
  );
}
