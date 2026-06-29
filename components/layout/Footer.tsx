import Link from "next/link";
import { MapPin, Mail, Phone } from "lucide-react";
import Container from "@/components/ui/Container";
import { contactInfo, services } from "@/lib/data";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "QHSE Policy", href: "/about#qhse" },
  { label: "Careers", href: "/careers" },
  { label: "News", href: "/news" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/8" role="contentinfo">
      {/* Top gradient line */}
      <div className="h-px bg-linear-to-r from-transparent via-amber-500/50 to-transparent" />

      <Container>
        {/* Main footer grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-16">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center mb-5 group w-fit ">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/orbit-logo1.png" alt="Orbital Resources Limited" className="h-12 w-auto border-2 border-amber-200 rounded-2xl" />
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              ORL is an indigenous service company with global partnerships incorporated to provide oil field solutions, equipments and support services to local and multinational operators in Nigeria and the West African sub-region.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { label: "LinkedIn", href: "#", letter: "in" },
                { label: "X / Twitter", href: "#", letter: "𝕏" },
                { label: "Facebook", href: "#", letter: "f" },
              ].map(({ label, href, letter }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg glass flex items-center justify-center text-white/50 hover:text-amber-400 transition-all duration-200 text-xs font-bold"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-5">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/services#${s.slug}`}
                    className="text-slate-400 text-sm hover:text-amber-400 transition-colors duration-200"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links column */}
          <div>
            <h3 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-5">
              Company
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-slate-400 text-sm hover:text-amber-400 transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-display font-bold text-white text-sm tracking-widest uppercase mb-5">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-amber-400 mt-0.5 shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  {contactInfo.address}
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="text-slate-400 text-sm hover:text-amber-400 transition-colors duration-200"
                >
                  {contactInfo.email}
                </a>
              </li>
              {contactInfo.phones.map((phone) => (
                <li key={phone} className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                  <a
                    href={`tel:${phone.replace(/\s/g, "")}`}
                    className="text-slate-400 text-sm hover:text-amber-400 transition-colors duration-200"
                  >
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-white/8">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
            <p className="text-slate-500 text-xs text-center">
              &copy; 2012 Orbital Resources Limited. All Rights Reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="#"
                className="text-slate-500 text-xs hover:text-slate-300 transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-slate-500 text-xs hover:text-slate-300 transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
}
