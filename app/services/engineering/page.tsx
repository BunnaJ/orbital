import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Engineering Services",
  description:
    "ORL Engineering delivers turn key EPCI projects covering the full project lifecycle from concept studies to commissioning.",
};

const sideNav = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Consultancy Services", href: "/services/consultancy" },
  { label: "Engineering Services", href: "/services/engineering", active: true },
  { label: "Marine Services", href: "/services/marine" },
  { label: "QHSE", href: "/qhse" },
  { label: "Contact Us", href: "/contact" },
];

const deliverables = ["PLET / PLEM", "Inline TEE", "Protection Structures", "Riser Base"];

export default function EngineeringPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-[38vh] flex items-end bg-navy-950 overflow-hidden pt-24">
        <div className="absolute inset-0 bg-grid-pattern" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />
        <Container className="relative pb-10 sm:pb-14">
          <ScrollReveal>
            <p className="text-amber-400 text-[10px] sm:text-xs font-semibold tracking-widest uppercase mb-3 leading-relaxed max-w-xs sm:max-w-none">
              We are never satisfied with anything less, and continually improve our processes until your requirements are met.
            </p>
            <h1 className="font-display text-xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight">
              Engineering <span className="text-gradient">Services</span>
            </h1>
          </ScrollReveal>
        </Container>
      </section>

      {/* ── Content ── */}
      <section className="py-10 sm:py-16 lg:py-24 bg-white">
        <Container>

          {/* Mobile horizontal nav */}
          <div className="lg:hidden mb-8 -mx-4 px-4 overflow-x-auto pb-2">
            <div className="flex gap-2 min-w-max">
              {sideNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-all duration-200 ${
                    item.active
                      ? "bg-amber-500 text-navy-950 font-bold"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-14">

            {/* Desktop sidebar */}
            <aside className="hidden lg:block lg:col-span-1">
              <div className="sticky top-28 rounded-2xl border border-slate-100 bg-slate-50 overflow-hidden">
                <div className="bg-navy-950 px-5 py-4">
                  <p className="text-xs font-bold text-white/60 uppercase tracking-widest">Navigation</p>
                </div>
                <nav className="p-2">
                  {sideNav.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm transition-all duration-200 mb-0.5 ${
                        item.active
                          ? "bg-amber-500 text-navy-950 font-bold"
                          : "text-slate-600 hover:bg-white hover:text-navy-950 hover:shadow-sm font-medium"
                      }`}
                    >
                      {item.label}
                      {item.active && <ChevronRight className="w-3.5 h-3.5" />}
                    </Link>
                  ))}
                </nav>
              </div>
            </aside>

            {/* Main content */}
            <div className="lg:col-span-3 space-y-10 sm:space-y-12">

              {/* Intro */}
              <ScrollReveal>
                <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                  <p>
                    ORL Engineering is a highly qualified solution provider in engineering services and can deliver turn key projects (EPCI) in co-operation with our foreign partners.
                  </p>
                  <p>
                    Our engineering capabilities cover the entire project life cycle: from Concept Studies to Commissioning.
                  </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                  <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-100">
                    <p className="text-amber-800 font-semibold text-xs sm:text-sm mb-2">Main Business Areas</p>
                    <ul className="space-y-1 text-amber-700 text-xs sm:text-sm">
                      <li>• Fabrication and Construction</li>
                      <li>• Maintenance and Modification</li>
                      <li>• Subsea, offshore modules and structures</li>
                    </ul>
                  </div>
                  <div className="p-4 sm:p-5 rounded-2xl bg-navy-50 border border-navy-100">
                    <p className="text-navy-800 font-semibold text-xs sm:text-sm mb-2">Competencies</p>
                    <ul className="space-y-1 text-navy-700 text-xs sm:text-sm">
                      <li>• Project management</li>
                      <li>• Engineering and engineering management</li>
                      <li>• Marine operations</li>
                      <li>• Procurement and procurement management</li>
                    </ul>
                  </div>
                </div>
                <p className="text-slate-400 text-[11px] sm:text-xs italic mt-3">
                  The company's strength and competitive advantage is vast experience from engineering-fabrication interface. ORL Engineering is registered in the Nipex Joint Qualification System for the Nigerian oil and gas industry.
                </p>
              </ScrollReveal>

              {/* Fabrication */}
              <ScrollReveal>
                <div className="border-l-2 sm:border-l-4 border-amber-500 pl-4 sm:pl-6">
                  <h2 className="font-display text-lg sm:text-2xl font-bold text-navy-950 mb-3">Fabrication and Construction</h2>
                  <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    <p>
                      We are renowned for dependable fabrication/construction capabilities and the ability to handle large-scale and fast-track projects in Nigeria.
                    </p>
                    <p>
                      Supporting our vast construction capability through pre-commissioning of multiple structures, large integrated topsides and subsea components are robust management systems, standardized fabrication processes and procedures, advanced welding technology, superior material handling and comprehensive craft training.
                    </p>
                    <p>
                      Throughout our operations, our exemplary safety quality and local content performance is world class. It is accomplished through a relentless pursuit of excellence, comprehensive training and an in-depth, far-reaching culture dedicated to safety and economic improvement.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Maintenance */}
              <ScrollReveal>
                <div className="border-l-2 sm:border-l-4 border-navy-950 pl-4 sm:pl-6">
                  <h2 className="font-display text-lg sm:text-2xl font-bold text-navy-950 mb-3">Maintenance and Modification</h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    The business area focuses on modification and maintenance projects for offshore installations. We cover the full range of engineering, procurement, fabrication and installation services (EPCI).
                  </p>
                </div>
              </ScrollReveal>

              {/* Installation */}
              <ScrollReveal>
                <div className="border-l-2 sm:border-l-4 border-amber-500 pl-4 sm:pl-6">
                  <h2 className="font-display text-lg sm:text-2xl font-bold text-navy-950 mb-3">Installation</h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Thorough planning, risk evaluations, HSE and coordination are all key elements in the preparations for our installation tasks. ORL Engineering offers services for all types of installations, and is recognized as a versatile company with good knowledge, valuable experience and solid resources. Our aim is long-term, trustful and foreseeable relations with our clients.
                  </p>
                </div>
              </ScrollReveal>

              {/* Project Management */}
              <ScrollReveal>
                <div className="border-l-2 sm:border-l-4 border-navy-950 pl-4 sm:pl-6">
                  <h2 className="font-display text-lg sm:text-2xl font-bold text-navy-950 mb-3">Project Management</h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    Stringent planning, structuring, cost control and document control are essential in order to complete a project on-time and on-budget. ORL Engineering has highly qualified personnel with different backgrounds such as engineers, planners, economists etc., with broad experience from a variety of projects within the offshore and industry.
                  </p>
                </div>
              </ScrollReveal>

              {/* Subsea */}
              <ScrollReveal>
                <div className="border-l-2 sm:border-l-4 border-amber-500 pl-4 sm:pl-6">
                  <h2 className="font-display text-lg sm:text-2xl font-bold text-navy-950 mb-3">Subsea, Offshore Modules and Structures</h2>
                  <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    <p>
                      ORL Subsea is a provider of subsea engineering services related to small and medium-sized subsea structures. Within ORL, we are responsible for all subsea EPC contracts. We undertake all kinds of problem solving projects and analyze services, and actively cooperate with fabrication and Product Company. We deliver functional solutions with a high HSE focus.
                    </p>
                  </div>
                  <div className="bg-navy-950 rounded-2xl p-4 sm:p-6 mt-4">
                    <p className="text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3">Core deliverables include:</p>
                    <div className="grid grid-cols-2 gap-2">
                      {deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                          {d}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </Container>
      </section>

      <CTASection />
    </>
  );
}
