import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Marine Services",
  description:
    "ORL is a leading provider of engineered marine solutions to the Nigerian oil and gas sector — subsea, ROV, diving, logistics and more.",
};

const sideNav = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Consultancy Services", href: "/services/consultancy" },
  { label: "Engineering Services", href: "/services/engineering" },
  { label: "Marine Services", href: "/services/marine", active: true },
  { label: "QHSE", href: "/qhse" },
  { label: "Contact Us", href: "/contact" },
];

const coreServices = [
  "Provision of tugs / ROV support and diving support vessels",
  "Provision of barges and offshore logistics",
  "Supply Base / Warehouse / Storage & Moving",
  "Rental – Special Vehicles",
  "Air Transport Services of Passengers and Freight",
];

const rovServices = [
  "Exploration Drilling Support",
  "Survey Support",
  "Construction Support",
  "Inspection, Repair & Maintenance (IRM)",
];

const divingServices = [
  "Offshore & Subsea IRM",
  "Dry Underwater Welding",
  "Platform Inspections (Level II, III, IV)",
  "Pipeline Repairs and Abandonments",
  "Subsea Tie-Ins and Tree Installations",
  "Rig Support and Positioning",
];

const supplyBaseServices = [
  "Warehousing and Yard Management that optimizes the safe storage and flow of materials and equipment.",
  "Loading and Unloading by a team who are familiar with the equipment and operational needs to ensure safe and efficient handling and load sequencing.",
  "Cleaning, Maintenance, and Preservation by a team who have hands-on knowledge to ensure operational readiness and value preservation.",
  "Rental and Leasing of specialist offshore baskets, skips, and tanks for the safe and efficient handling of materials and supplies.",
  "Provision of Manpower for short-and long-term outsourcing of personnel requirements.",
  "Charter Vessels on spot or term basis including supply boats, tugs and barges, work and accommodation barges, and LCTs.",
  "Sourcing & Procurement of materials and equipment to support project and operational requirements.",
];

export default function MarinePage() {
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
              Marine <span className="text-gradient">Services</span>
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
                    ORL is emerging as a leading provider of engineered marine solutions to the Nigerian oil and gas sector. We have an exceptional reputation for professional standards, timely service and technical expertise in the field of underwater operations, full turnkey design, marine construction and support.
                  </p>
                  <p>
                    ORL's primary focus is the offshore oil and gas sector where its comprehensive suite of subsea services can be tailored to provide solutions for both new 'Greenfield' construction projects and existing 'Brownfield' inspection, repair and maintenance (IRM) projects.
                  </p>
                </div>
                <div className="p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-100 mt-4">
                  <p className="text-amber-800 font-semibold text-xs sm:text-sm mb-3">Core service lines include:</p>
                  <ul className="space-y-2">
                    {coreServices.map((s) => (
                      <li key={s} className="flex items-start gap-2 text-amber-700 text-xs sm:text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* ROV */}
              <ScrollReveal>
                <div className="border-l-2 sm:border-l-4 border-amber-500 pl-4 sm:pl-6">
                  <h2 className="font-display text-lg sm:text-2xl font-bold text-navy-950 mb-3">ROV Support</h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    ORL's ROV division specializes in the provision of quality remotely operated vehicle (ROV) services and tooling solutions for both shallow and deepwater applications. We offer a unique and economic solution with uncompromised performance and dependability.
                  </p>
                  <div className="bg-navy-950 rounded-2xl p-4 sm:p-5">
                    <p className="text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3">ORL ROV division provides:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {rovServices.map((s) => (
                        <div key={s} className="flex items-center gap-2 text-slate-300 text-xs sm:text-sm">
                          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                          {s}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Diving */}
              <ScrollReveal>
                <div className="border-l-2 sm:border-l-4 border-navy-950 pl-4 sm:pl-6">
                  <h2 className="font-display text-lg sm:text-2xl font-bold text-navy-950 mb-3">Diving Support Vessels</h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    ORL provides a complete range of commercial diving and inspection, repair and maintenance services to clients in the oil and gas, shipping, defense and marine infrastructure industries. Combining state-of-art equipment, the precise allocation of resources and highly experienced personnel, ORL's diving division has the capability to complete projects of any scale, to the highest industry standards.
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {divingServices.map((s) => (
                      <div key={s} className="flex items-start gap-2 text-slate-600 text-xs sm:text-sm">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-navy-900 shrink-0" />
                        {s}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>

              {/* Barges */}
              <ScrollReveal>
                <div className="border-l-2 sm:border-l-4 border-amber-500 pl-4 sm:pl-6">
                  <h2 className="font-display text-lg sm:text-2xl font-bold text-navy-950 mb-3">Provision of Barges and Offshore Logistics</h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    ORL provides various barges for offshore operation. This includes Dumb, self-propelled and Towage. ORL in addition provides an integrated logistics service, ensuring on-time delivery of all materials from vendor to rig or platform and back again. We manage warehouse, packing, pipe yard, transport, fuels and bulks, CCU, quayside and waste operations — using our own assets and resources or third party suppliers according to client requirements and local custom.
                  </p>
                </div>
              </ScrollReveal>

              {/* Supply Base */}
              <ScrollReveal>
                <div className="border-l-2 sm:border-l-4 border-navy-950 pl-4 sm:pl-6">
                  <h2 className="font-display text-lg sm:text-2xl font-bold text-navy-950 mb-3">Supply Base / Warehouse / Storage and Moving</h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed mb-4">
                    We operate supply bases where we provide personnel, equipment, warehousing, bulk plants, open storage areas, and related assets and services to support exploration, drilling, project and production activities in the oil and gas industry.
                  </p>
                  <ul className="space-y-3">
                    {supplyBaseServices.map((s, i) => (
                      <li key={i} className="flex gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-slate-100 border border-slate-200 text-slate-500 text-[10px] font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Cranes */}
              <ScrollReveal>
                <div className="border-l-2 sm:border-l-4 border-amber-500 pl-4 sm:pl-6">
                  <h2 className="font-display text-lg sm:text-2xl font-bold text-navy-950 mb-3">Rental — Cranes and Special Vehicles</h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    ORL has a fleet of modern all terrain and truck mounted cranes, with lifting capacities of 8 tonne to 100 tonne. We provide lifting services to companies in the oil & gas industry and cover a wide customer base in a number of sectors. In addition the company operates a fleet of lorry mounted cranes (hiabs) on flat bed and articulated units with capacities up to 56 tonne metre, and low loaders with STGO Cat 2 rating. We emphasize safe operations. All lifts are performed according to BS7121 Safe Lifting Operations. All personnel hold the relevant CPCS (Construction Plant Competency Scheme) certification.
                  </p>
                </div>
              </ScrollReveal>

              {/* Air Transport */}
              <ScrollReveal>
                <div className="border-l-2 sm:border-l-4 border-navy-950 pl-4 sm:pl-6">
                  <h2 className="font-display text-lg sm:text-2xl font-bold text-navy-950 mb-3">Air Transport Services of Passengers and Freight</h2>
                  <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                    ORL Helicopter is an industry leader in the provision of transportation to offshore oil and gas platforms and vessels. Helicopter flight over open water is a specialized form of aviation that requires specific equipment, training and procedures. As rigs move farther and farther offshore, the challenges posed by weather, distance and other factors require a dedication to safety and quality that is unsurpassed. Each year, ORL aircraft transport thousands of passengers between our bases and their offshore workplaces, operating in almost every major oil-producing region in Nigeria.
                  </p>
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
