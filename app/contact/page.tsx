import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Mail, Phone, Clock } from "lucide-react";
import Container from "@/components/ui/Container";
import ContactForm from "@/components/shared/ContactForm";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { contactInfo } from "@/lib/data";
import { fadeInLeft, fadeInRight } from "@/lib/animations";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with the Orbital Resources team in Lagos, Nigeria for all engineering, consultancy, and marine services enquiries.",
};

const contactDetails = [
  {
    Icon: MapPin,
    label: "Office Address",
    value: contactInfo.address,
    href: null,
  },
  {
    Icon: Mail,
    label: "Email Address",
    value: contactInfo.email,
    href: `mailto:${contactInfo.email}`,
  },
  {
    Icon: Phone,
    label: "Phone",
    value: contactInfo.phones.join(" · "),
    href: `tel:${contactInfo.phones[0].replace(/\s/g, "")}`,
  },
  {
    Icon: Clock,
    label: "Working Hours",
    value: contactInfo.hours,
    href: null,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[40vh] flex items-end bg-navy-950 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80"
            alt="Contact us"
            fill
            className="object-cover opacity-15"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-navy-950 via-navy-950/70 to-navy-950/40" />
        </div>
        <Container className="relative pb-16">
          <ScrollReveal>
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-xs font-semibold text-amber-400 tracking-widest uppercase mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              Get In Touch
            </span>
            <h1 className="font-display text-xl sm:text-3xl lg:text-4xl font-bold text-white mt-4">
              Let&apos;s Start a{" "}
              <span className="text-gradient">Conversation</span>
            </h1>
          </ScrollReveal>
        </Container>
      </section>

      {/* Contact section */}
      <section className="section-padding bg-slate-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Info panel */}
            <ScrollReveal variants={fadeInLeft}>
              <div className="space-y-8">
                <div className="flex flex-col gap-3 items-start text-left">
                  <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wider">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    Contact ORL
                  </span>
                  <h2 className="font-display text-xl sm:text-2xl lg:text-3xl font-bold text-navy-950 leading-tight">
                    We&apos;d Love to{" "}
                    <span className="text-gradient">Hear From You</span>
                  </h2>
                  <p className="text-sm sm:text-base text-slate-500 leading-relaxed">
                    Whether you have a project to discuss, want to explore a partnership, or simply need more information — our team is ready to help.
                  </p>
                </div>

                <div className="space-y-4">
                  {contactDetails.map(({ Icon, label, value, href }) => (
                    <div
                      key={label}
                      className="flex gap-4 p-5 rounded-2xl bg-white border border-slate-100 hover:border-amber-200 transition-colors duration-300 group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors duration-300">
                        <Icon className="w-5 h-5 text-amber-500" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-0.5">
                          {label}
                        </p>
                        {href ? (
                          <a
                            href={href}
                            className="text-navy-950 text-sm font-medium hover:text-amber-600 transition-colors duration-200"
                          >
                            {value}
                          </a>
                        ) : (
                          <p className="text-navy-950 text-sm font-medium">
                            {value}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map placeholder */}
                <div className="relative rounded-2xl overflow-hidden h-48 bg-slate-200">
                  <Image
                    src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=800&q=80"
                    alt="Lagos, Nigeria"
                    fill
                    className="object-cover opacity-70"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="glass px-4 py-2 rounded-xl text-white text-sm font-semibold">
                      📍 Ikoyi, Lagos, Nigeria
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Form */}
            <ScrollReveal variants={fadeInRight}>
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                <h2 className="font-display text-lg sm:text-2xl font-bold text-navy-950 mb-2">
                  Send Us a Message
                </h2>
                <p className="text-slate-500 text-sm mb-8">
                  Fill in the form and a member of our team will respond within
                  24 hours.
                </p>
                <ContactForm />
              </div>
            </ScrollReveal>
          </div>
        </Container>
      </section>
    </>
  );
}
