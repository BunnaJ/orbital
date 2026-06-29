import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";
import CTASection from "@/components/sections/CTASection";
import ScrollReveal from "@/components/ui/ScrollReveal";

export const metadata: Metadata = {
  title: "Consultancy Services",
  description:
    "ORL provides specialized consulting services to the petroleum industry including equipment procurement and training/certification.",
};

const sideNav = [
  { label: "About Us", href: "/about" },
  { label: "Our Services", href: "/services" },
  { label: "Consultancy Services", href: "/services/consultancy", active: true },
  { label: "Engineering Services", href: "/services/engineering" },
  { label: "Marine Services", href: "/services/marine" },
  { label: "QHSE", href: "/qhse" },
  { label: "Contact Us", href: "/contact" },
];

const procurementItems = [
  "Drilling Equipment OCTG (Casing, Tubing, Linear connectors & Accessories)",
  "Instrumentation / Communication And Process Control Equipment / Materials",
  "Valves And Accessories (Check Valves, Control Valves, Safety Valves, Relief Valves, Subsea Valves, Solenoid Valves, Actuators, Ball Valves, Butterfly Valves, Gate Valves, Globe Valves, Needle Valves, Plug Valves, etc.)",
  "Pipes / Tubes / Hoses And Fittings (Seamless Pipes, Welded Pipes and Tubes, Hoses, Flanges, Elbows, Fittings, Gaskets, Flexible Pipes, etc.)",
  "Pressure Relief Equipments and All Valves and Accessories",
  "Compressors and Accessories (Centrifugal, reciprocating, rotary, axial and jet compressors)",
];

const courses = [
  "Oil and Gas Processing course",
  "Subsea Awareness Course",
  "Introduction to Subsea Design",
  "Introduction to HAZOP Studies",
  "Safety and Loss Prevention",
  "Environmental Management Systems (EMS)",
  "Environmental Impact Assessments (EIA)",
  "Environmental Risk Assessment",
  "Environmental Best Practice",
  "Oil Spill Response",
  "Crisis Management and Emergency Response",
  "Petroleum Economics",
  "Risk Analysis",
];

export default function ConsultancyPage() {
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
            <h1 className="font-display text-2xl sm:text-4xl lg:text-6xl font-bold text-white leading-tight">
              Consultancy <span className="text-gradient">Services</span>
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
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  ORL provides specialized consulting services to the petroleum industry. Our oil and gas consulting services include equipment procurement and training/certification. The most up-to-date techniques, tools, and procedures are always used. But our strongest offering is innovation. We find solutions to unusual oil field development problems. Our oil industry development solutions always consider economics, feasibility, and timeliness.
                </p>
                <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-amber-50 border border-amber-100">
                  <p className="text-amber-800 font-semibold text-xs sm:text-sm">Business areas are:</p>
                  <ul className="mt-2 space-y-1 text-amber-700 text-xs sm:text-sm">
                    <li>• Equipment Procurement</li>
                    <li>• Training/Certification</li>
                  </ul>
                </div>
              </ScrollReveal>

              {/* Equipment Procurement */}
              <ScrollReveal>
                <div className="border-l-2 sm:border-l-4 border-amber-500 pl-4 sm:pl-6">
                  <h2 className="font-display text-lg sm:text-2xl font-bold text-navy-950 mb-3">Equipment Procurement</h2>
                  <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    <p>
                      ORL in conjunction with local vendors and international OEMs solve for our clients the often time consuming and expensive problems associated with equipment procurement. By securing firm agreements with our OEM partners, we are able to pass the benefits of such agreements to save time and cost for our clients.
                    </p>
                    <p>
                      We are a market leader in oilfield procurement. ORL supplies a wide range of products necessary for all drilling, exploration and production operations including:
                    </p>
                  </div>
                  <ul className="mt-4 space-y-3">
                    {procurementItems.map((item, i) => (
                      <li key={i} className="flex gap-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                        <span className="mt-0.5 w-5 h-5 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-[10px] font-bold flex items-center justify-center shrink-0">
                          {i + 1}
                        </span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>

              {/* Training */}
              <ScrollReveal>
                <div className="border-l-2 sm:border-l-4 border-navy-950 pl-4 sm:pl-6">
                  <h2 className="font-display text-lg sm:text-2xl font-bold text-navy-950 mb-3">Training</h2>
                  <div className="space-y-3 text-slate-600 text-xs sm:text-sm leading-relaxed">
                    <p>
                      Our courses are typically designed for engineers and operations personnel, with a mix of theoretical and practical content. ORL core strengths are appraisal studies, multiphase and subsea design, facilities and process design, environmental and safety issues.
                    </p>
                    <p>
                      Instructors who are specialists in their sub-disciplines conduct each of the courses. Application of course material is taught by the use of case studies based on specific industry projects, and an interactive environment is encouraged.
                    </p>
                    <p>
                      Courses can be tailored to suit the needs of clients and to match the experience of the participants. Customization of courses to meet specific client requirements entails close liaison between ORL and the client during course planning and execution.
                    </p>
                  </div>

                  <div className="mt-5 bg-navy-950 rounded-2xl p-4 sm:p-6">
                    <p className="text-amber-400 text-[10px] sm:text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">Courses Available:</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {courses.map((course) => (
                        <div key={course} className="flex items-start gap-2 text-slate-300 text-xs sm:text-sm">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                          {course}
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
