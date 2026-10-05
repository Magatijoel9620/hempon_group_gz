"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useRef, useState } from "react";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import MagneticButton from "@/components/MagneticButton";

const services = [
  [
    "01",
    "Websites",
    "High-performance websites that make complex businesses feel simple.",
    "Next.js / React",
  ],
  [
    "02",
    "Business Systems",
    "Dashboards, portals and internal tools built around the way your team actually works.",
    "Flutter / Supabase",
  ],
  [
    "03",
    "Mobile Apps",
    "Focused mobile experiences for customers, teams and field operations.",
    "Flutter / API",
  ],
  [
    "04",
    "Automation",
    "Remove repetitive work with connected workflows, reporting and intelligent processes.",
    "Automation / AI",
  ],
  [
    "05",
    "AI Experiences",
    "Useful AI integrated where it creates leverage — not added just for the headline.",
    "AI / Data",
  ],
  [
    "06",
    "Digital Products",
    "From first interaction to production system, we turn ideas into usable products.",
    "Design / Engineering",
  ],
];

const projects = [
  {
    name: "Farmora",
    type: "Operations platform",
    image: "/assets/famora_landscape.jpg",
    number: "01",
  },
  {
    name: "InvoiceEasy",
    type: "Business software",
    image: "/assets/ie_landscape.jpg",
    number: "02",
  },
  {
    name: "Landlord Ledger",
    type: "Property platform",
    image: "/assets/LL_landscape.jpg",
    number: "03",
  },
  {
    name: "Digital Experiences",
    type: "Web & product design",
    image: "/assets/digital_exp.png",
    number: "04",
  },
];

const process = [
  ["01", "Discover", "Understand the business, users and the real problem."],
  ["02", "Shape", "Turn the problem into a focused product direction."],
  ["03", "Build", "Design, engineer and test the experience together."],
  ["04", "Launch", "Ship cleanly, measure what matters and hand over clearly."],
  [
    "05",
    "Evolve",
    "Keep improving as the business, users and opportunities change.",
  ],
];

const plans = [
  {
    name: "Starter Website",
    price: "From KSh 15,000",
    desc: "A sharp, credible online presence for a small business or professional.",
    tags: ["1–5 pages", "Responsive", "Contact setup"],
  },
  {
    name: "Business Website",
    price: "From KSh 30,000",
    desc: "A conversion-focused website with stronger structure, content and integrations.",
    tags: ["Multi-page", "SEO foundation", "Integrations"],
  },
  {
    name: "Online Store",
    price: "From KSh 45,000",
    desc: "A practical e-commerce experience built around your catalogue and customers.",
    tags: ["Products", "Checkout", "Orders"],
  },
  {
    name: "Custom Solution",
    price: "Let's scope it",
    desc: "Business software, mobile apps and systems where the product needs to be engineered around you.",
    tags: ["Custom UX", "Database", "Automation"],
  },
];

const socials = [
  ["Instagram", "https://www.instagram.com/hempongroup/"],
  ["LinkedIn", "https://www.linkedin.com/in/joel-magati"],
  ["X", "https://x.com/hempon_group"],
  ["TikTok", "https://www.tiktok.com/@hempon.digital.so"],
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="mono flex items-center gap-3 text-[10px] font-bold uppercase tracking-[.28em] text-white/40">
      <span className="h-px w-8 bg-[var(--accent)]" />
      {children}
    </div>
  );
}

function SocialIcon({ label }: { label: string }) {
  if (label === "Instagram") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="none" stroke="currentColor" strokeWidth="1.8">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="18" cy="6" r="1" fill="currentColor" stroke="none" />
      </svg>
    );
  }
  if (label === "LinkedIn") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="currentColor">
        <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9.4h3.8v11.3H3.3zM9.4 9.4H13v1.5h.1a4 4 0 0 1 3.6-1.9c3.8 0 4.5 2.5 4.5 5.7v6h-3.8v-5.3c0-1.3 0-3-1.9-3s-2.2 1.4-2.2 2.9v5.4H9.4z" />
      </svg>
    );
  }
  if (label === "X") {
    return (
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[16px] w-[16px]" fill="currentColor">
        <path d="M18.9 2H22l-6.8 7.8L23.2 22h-6.3L12 14.6 5.8 22H2.7l7.3-8.4L2.2 2h6.5l4.4 6.9L18.9 2Zm-1.1 17.8h1.7L7.7 4.1H5.9l11.9 15.7Z" />
      </svg>
    );
  }
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24" className="h-[17px] w-[17px]" fill="currentColor">
      <path d="M19.6 8.1a6.1 6.1 0 0 1-4.2-2V15a5.2 5.2 0 1 1-5.2-5.2c.4 0 .8 0 1.1.1v3a2.3 2.3 0 1 0 1.1 2V2h3.1a5.1 5.1 0 0 0 4.1 4.9v1.2Z" />
    </svg>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["Work", "#work"],
    ["Capabilities", "#capabilities"],
    ["Process", "#process"],
    ["About", "#about"],
    ["Contact", "#contact"],
  ];
  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5 sm:pt-4 lg:px-8">
      <div className="nav-shell mx-auto max-w-[1440px] rounded-[24px] border border-white/[.1] bg-[#080b10]/82 px-3 py-2 shadow-2xl shadow-black/25 backdrop-blur-2xl sm:rounded-full sm:px-4">
        <div className="flex items-center justify-between gap-3">
          <a
            href="#top"
            className="group flex min-w-0 items-center gap-2.5"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-9 w-9 shrink-0 place-items-center overflow-hidden rounded-full border border-white/[.12] bg-white/[.035] p-0 transition duration-500 group-hover:rotate-6 group-hover:border-white/30">
              <Image
                src="/assets/logo/logo_round.png"
                alt="HempOn Group logo"
                width={36}
                height={36}
                className="h-full w-full object-cover"
              />
            </span>
            <span className="hidden truncate text-xs font-bold tracking-[.18em] sm:inline">
              HEMPON GROUP
            </span>
          </a>
          <nav className="hidden items-center gap-0.5 lg:flex">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="nav-link rounded-full px-3.5 py-2 text-[11px] font-medium text-white/52 transition hover:bg-white/[.055] hover:text-blue"
              >
                {label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <div className="hidden items-center gap-1 sm:flex" role="group" aria-label="Social media">
              {socials.map(([label, url]) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  title={label}
                  className="grid h-9 w-9 place-items-center rounded-full text-white/55 transition hover:bg-white/[.07] hover:text-[var(--accent)]"
                >
                  <SocialIcon label={label} />
                </a>
              ))}
            </div>
            <a
              href="#contact"
              className="quiet-cta hidden rounded-full border border-white/[.14] bg-white/[.92] px-4 py-2.5 text-[11px] font-bold text-[#000000] transition hover:bg-white sm:inline-flex"
            >
              Start a project <span className="ml-1.5">↗</span>
            </a>
            <button
              aria-label="Toggle navigation"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
              className="grid h-10 w-10 place-items-center rounded-full border border-white/[.1] bg-white/[.035] lg:hidden"
            >
              <span className="relative h-3.5 w-4">
                <span
                  className={`absolute left-0 top-0 h-px w-full bg-white transition ${open ? "translate-y-[6px] rotate-45" : ""}`}
                />
                <span
                  className={`absolute left-0 top-[6px] h-px w-full bg-white transition ${open ? "opacity-0" : ""}`}
                />
                <span
                  className={`absolute left-0 top-3 h-px w-full bg-white transition ${open ? "-translate-y-[6px] -rotate-45" : ""}`}
                />
              </span>
            </button>
          </div>
        </div>
        <motion.div
          initial={false}
          animate={{ height: open ? "auto" : 0, opacity: open ? 1 : 0 }}
          className="overflow-hidden lg:hidden"
        >
          <nav className="grid gap-1 border-t border-white/[.08] pt-3 mt-3 pb-1">
            {links.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm text-white/65 transition hover:bg-white/[.05] hover:text-white"
              >
                {label}
                <span className="float-right text-white/25">↗</span>
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-2xl bg-[var(--accent)] px-4 py-3 text-sm font-bold text-[#080b10]"
            >
              Start a project <span className="float-right">↗</span>
            </a>
          </nav>
        </motion.div>
      </div>
    </header>
  );
}

function HeroBrand() {
  return (
    <div className="hero-brand relative mx-auto h-[430px] w-full max-w-[600px] sm:h-[500px] lg:h-[620px]">
      <div className="hero-ring hero-ring-a" />
      <div className="hero-ring hero-ring-b" />
      <div className="hero-card hero-card-a">
        <Image
          src="/assets/famora_landscape.jpg"
          alt="Farmora product interface"
          fill
          sizes="220px"
          className="object-cover"
        />
      </div>
      <div className="hero-card hero-card-b">
        <Image
          src="/assets/ie_landscape.jpg"
          alt="InvoiceEasy product interface"
          fill
          sizes="180px"
          className="object-cover"
        />
      </div>
      <div className="hero-card hero-card-c">
        <Image
          src="/assets/digital_exp.png"
          alt="Digital experiences project"
          fill
          sizes="190px"
          className="object-cover"
        />
      </div>
      <div className="hero-card hero-card-d">
        <Image
          src="/assets/LL_landscape.jpg"
          alt="Landlord Ledger product interface"
          fill
          sizes="150px"
          className="object-cover"
        />
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
        className="hero-monogram hero-monogram--invoice absolute right-[13%] top-[16%] z-10"
      >
        <div className="hero-monogram-inner">
          <span>HG</span>
          <small>
            HEMPON
            <br />
            GROUP
          </small>
        </div>
      </motion.div>
      <div className="absolute bottom-5 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/[.1] bg-[#090d13]/80 px-4 py-2 backdrop-blur-xl">
        <span className="mono text-[9px] uppercase tracking-[.24em] text-white/45">
          Responsive • Fast • Easy to Manage
        </span>
      </div>
    </div>
  );
}

function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.75, 1], [1, 0.9, 0]);
  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] overflow-hidden border-b border-white/[.07] pt-28 sm:pt-32 lg:pt-36"
      id="home"
    >
      <div className="absolute inset-0 grid-bg" />
      <div className="hero-light hero-light-a" />
      <div className="hero-light hero-light-b" />
      <div className="section-shell relative flex min-h-[calc(100svh-7rem)] items-center pb-10 lg:pb-14">
        <div className="grid w-full items-center gap-4 lg:grid-cols-[1.02fr_.98fr]">
          <motion.div
            style={{ y, opacity }}
            className="relative z-10 max-w-4xl pt-6 lg:pt-0"
          >
            <div className="mono flex items-center gap-3 text-[9px] uppercase tracking-[.28em] text-white/38 sm:text-[10px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--accent)]" />{" "}
              DIGITAL PRODUCTS • SYSTEMS • AUTOMATION
            </div>
            <h1 className="display mt-6 text-[clamp(3.9rem,10vw,9.7rem)] leading-[.79]">
              WE BUILD
              <br />
              <span className="text-white/25">WHAT</span>{" "}
              <span className="text-gradient">MATTERS.</span>
            </h1>
            <p className="mt-8 max-w-xl text-[15px] leading-7 text-white/46 sm:text-base md:text-lg">
              Websites, mobile applications, business software and automation —
              engineered around the way your business actually works.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <MagneticButton href="#work">Explore the work</MagneticButton>
              <a
                href="#contact"
                className="quiet-outline rounded-full border border-white/[.13] px-5 py-3 text-sm font-medium text-white/62 transition hover:border-white/30 hover:bg-white/[.035] hover:text-white"
              >
                Tell us the problem ↗
              </a>
            </div>
          </motion.div>
          <motion.div
            style={{ opacity }}
            className="relative order-first -mt-4 lg:order-last lg:mt-0"
          >
            <HeroBrand />
          </motion.div>
        </div>
      </div>
      <div className="section-shell relative flex items-center justify-between border-t border-white/[.07] py-4">
        <span className="mono text-[9px] uppercase tracking-[.25em] text-white/25">
          Journey Along...
        </span>
        <span className="mono text-[9px] uppercase tracking-[.25em] text-white/25">
          01 — 07
        </span>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section
      id="capabilities"
      className="relative border-y border-white/[.07] py-24 sm:py-28 md:py-36"
    >
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[.75fr_1.25fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <SectionLabel>Capabilities</SectionLabel>
            <h2 className="display mt-6 max-w-lg text-5xl leading-[.94] sm:text-6xl md:text-7xl">
              Build the <span className="text-white/25">thing</span> your
              business is missing.
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/48 md:text-base">
              Websites are only one layer. We build the digital systems around
              the business too — from customer-facing experiences to the tools
              that make the operation run.
            </p>
            <div className="mt-10 mono text-[10px] uppercase tracking-[.24em] text-white/25">
              Design × Engineering × Operations
            </div>
          </div>
          <div className="grid gap-px overflow-hidden rounded-[28px] border border-white/[.08] bg-white/[.08] sm:grid-cols-2">
            {services.map(([num, title, desc, tech]) => (
              <motion.a
                href="#contact"
                key={num}
                whileHover={{ y: -3 }}
                className="group relative min-h-[230px] bg-[#0b0f15] p-6 transition-colors hover:bg-[#10161e] sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="mono text-[10px] text-white/22">{num}</span>
                  <span className="mono text-[9px] uppercase tracking-[.18em] text-[var(--accent)] opacity-65 group-hover:opacity-100">
                    {tech}
                  </span>
                </div>
                <div className="mt-14">
                  <h3 className="display text-2xl tracking-[-.045em]">
                    {title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-white/40">
                    {desc}
                  </p>
                </div>
                <span className="absolute bottom-7 right-7 text-white/20 transition-all group-hover:translate-x-1 group-hover:text-[var(--accent)]">
                  ↗
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work" className="relative py-24 sm:py-28 md:py-40">
      <div className="section-shell">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <SectionLabel>Selected work</SectionLabel>
            <h2 className="display mt-6 max-w-4xl text-5xl leading-[.92] sm:text-6xl md:text-8xl">
              Real products.
              <br />
              <span className="text-white/25">Real problems.</span>
            </h2>
          </div>
          <p className="max-w-xs text-sm leading-6 text-white/42">
            A selection of platforms and experiences engineered for real
            operational use.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:mt-16 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.a
              href="#contact"
              key={p.name}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/[.08] bg-[#0b0f15]"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition duration-1000 group-hover:scale-[1.045]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#07090d] via-transparent to-black/5" />
                <div className="absolute left-5 top-5 mono text-[10px] text-white/55">
                  {p.number} / 04
                </div>
                <div className="absolute right-5 top-5 rounded-full border border-white/15 bg-black/25 px-3 py-1 text-[10px] text-white/60 backdrop-blur">
                  View case ↗
                </div>
              </div>
              <div className="flex items-end justify-between gap-6 p-6 sm:p-7">
                <div>
                  <p className="mono text-[9px] uppercase tracking-[.22em] text-[var(--accent)]">
                    {p.type}
                  </p>
                  <h3 className="display mt-2 text-3xl sm:text-4xl">
                    {p.name}
                  </h3>
                </div>
                <span className="hidden text-sm text-white/25 md:block">
                  Digital product
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section
      id="process"
      className="overflow-hidden border-y border-white/[.07] py-24 sm:py-28 md:py-36"
    >
      <div className="section-shell">
        <div className="max-w-3xl">
          <SectionLabel>Process</SectionLabel>
          <h2 className="display mt-6 text-5xl leading-[.94] sm:text-6xl md:text-7xl">
            Less ceremony.
            <br />
            <span className="text-gradient">More momentum.</span>
          </h2>
          <p className="mt-7 max-w-xl text-sm leading-7 text-white/42 md:text-base">
            A lean process that keeps decisions close to the actual problem and
            the finished product close to the people using it.
          </p>
        </div>
        <div className="mt-14 flex min-w-max gap-4 overflow-x-auto pb-4 md:mt-16 md:min-w-0 md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
          {process.map(([n, t, d], i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: i * 0.08 }}
              className="w-[275px] shrink-0 rounded-[26px] border border-white/[.08] bg-white/[.025] p-6 sm:w-[290px] sm:p-7 md:w-auto"
            >
              <span className="mono text-[10px] text-[var(--accent)]">{n}</span>
              <h3 className="display mt-14 text-2xl">{t}</h3>
              <p className="mt-3 text-sm leading-6 text-white/40">{d}</p>
              <div className="mt-8 h-px w-full bg-white/[.08]">
                <div className="pulse-line h-px w-1/2 origin-left bg-[var(--accent)]" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" className="relative py-24 sm:py-28 md:py-40">
      <div className="section-shell">
        <div className="grid gap-14 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <div>
            <SectionLabel>About Hempon</SectionLabel>
            <h2 className="display mt-6 text-5xl leading-[.92] sm:text-6xl md:text-7xl">
              Technology should{" "}
              <span className="text-white/25">fit the business.</span>
            </h2>
          </div>
          <div>
            <p className="max-w-3xl text-xl leading-[1.35] text-white/72 sm:text-2xl md:text-3xl">
              We help businesses and organizations turn ideas into modern websites, applications
              automation tools, and digital systems that solve real operational problems.
            </p>
            <p className="mt-7 max-w-2xl text-sm leading-7 text-white/40 md:text-base">
              We combine thoughtful design, reliable technology, and practical business 
              understanding to create solutions that are not only visually impressive, but useful,
              manageable, and ready to grow with you.
            </p>
            <div className="mt-9 flex flex-wrap gap-2">
              {[
                "Business first",
                "Built to evolve",
                "Clear communication",
                "Modern technology",
              ].map((x) => (
                <span
                  key={x}
                  className="rounded-full border border-white/[.09] px-3.5 py-2 text-[11px] text-white/48"
                >
                  {x}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section
      id="pricing"
      className="border-y border-white/[.07] bg-[#090c11] py-24 sm:py-28 md:py-36"
    >
      <div className="section-shell">
        <div className="grid gap-12 lg:grid-cols-[.72fr_1.28fr] lg:items-start">
          <div className="lg:sticky lg:top-28">
            <SectionLabel>Starting points</SectionLabel>
            <h2 className="display mt-6 text-5xl leading-[.94] sm:text-6xl md:text-7xl">
              Choose a <span className="text-white/25">direction.</span>
            </h2>
            <p className="mt-7 max-w-md text-sm leading-7 text-white/42 md:text-base">
              Clear starting points for common projects. Custom software and
              larger systems are scoped around the actual problem.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex text-sm font-semibold text-white/72 underline decoration-white/20 underline-offset-8 transition hover:text-white"
            >
              Let's scope something different ↗
            </a>
          </div>
          <div className="grid gap-3">
            {plans.map((p, i) => (
              <motion.a
                href="#contact"
                key={p.name}
                whileHover={{ x: 4 }}
                className="group grid gap-6 rounded-[26px] border border-white/[.08] bg-white/[.025] p-6 transition hover:border-white/20 sm:grid-cols-[1fr_auto] sm:items-center sm:p-7"
              >
                <div>
                  <div className="mono text-[9px] uppercase tracking-[.2em] text-[var(--accent)]">
                    0{i + 1}
                  </div>
                  <h3 className="display mt-3 text-2xl sm:text-3xl">
                    {p.name}
                  </h3>
                  <p className="mt-2 max-w-lg text-sm leading-6 text-white/40">
                    {p.desc}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/[.08] px-2.5 py-1 text-[9px] text-white/35"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between gap-5 sm:block sm:text-right">
                  <div className="text-sm font-semibold text-white/72">
                    {p.price}
                  </div>
                  <span className="mt-2 inline-block text-white/20 transition group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden py-24 sm:py-28 md:py-40"
    >
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="section-shell relative">
        <div className="rounded-[32px] border border-white/[.09] bg-[#0a0e14]/82 p-6 sm:p-9 md:p-12 lg:p-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_.7fr] lg:items-end">
            <div>
              <SectionLabel>Start a conversation</SectionLabel>
              <h2 className="display mt-6 max-w-4xl text-5xl leading-[.9] sm:text-6xl md:text-8xl">
                Have a problem
                <br />
                <span className="text-gradient">worth building?</span>
              </h2>
              <p className="mt-7 max-w-xl text-sm leading-7 text-white/42 md:text-base">
                Tell us what you are trying to improve. We’ll help you figure
                out whether that means a website, app, automation, business
                system — or something else.
              </p>
            </div>
            <div>
              <a
                href="mailto:hempongroup@gmail.com?subject=Project%20enquiry"
                className="contact-link group block rounded-[24px] border border-white/10 bg-white/[.035] p-5 transition hover:border-white/25 hover:bg-white/[.055]"
              >
                <div className="mono text-[10px] uppercase tracking-[.2em] text-white/32">
                  Email
                </div>
                <div className="mt-3 text-base font-semibold sm:text-lg">
                  hempongroup@gmail.com
                </div>
                <div className="mt-6 flex items-center justify-between text-sm text-white/30">
                  <span>Open email draft</span>
                  <span className="text-xl transition group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </div>
              </a>
              <a
                href="https://wa.me/254738219953?text=Hello%20Hempon%20Group%2C%20I%27d%20like%20to%20discuss%20a%20project."
                target="_blank"
                rel="noreferrer"
                className="contact-link group mt-3 block rounded-[24px] border border-white/10 bg-white/[.035] p-5 transition hover:border-white/25 hover:bg-white/[.055]"
              >
                <div className="mono text-[10px] uppercase tracking-[.2em] text-white/32">
                  WhatsApp
                </div>
                <div className="mt-3 text-base font-semibold sm:text-lg">
                  +254 738 219 953
                </div>
                <div className="mt-6 flex items-center justify-between text-sm text-white/30">
                  <span>Message Hempon Group</span>
                  <span className="text-xl transition group-hover:translate-x-1 group-hover:text-white">
                    ↗
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/[.08] pt-16 sm:pt-20">
      <div className="section-shell">
        <div className="grid gap-12 pb-14 lg:grid-cols-[1.35fr_.65fr_.65fr_.7fr]">
          <div>
            <a href="#top" className="inline-flex items-center gap-3">
              <Image
                src="/assets/logo.svg"
                alt="Hempon Group"
                width={170}
                height={56}
                className="h-auto w-[145px] invert sm:w-[170px]"
              />
            </a>
            <p className="mt-6 max-w-sm text-sm leading-7 text-white/38">
              Digital engineering for businesses that want their technology to
              do more.
            </p>
            <a
              href="mailto:hempongroup@gmail.com"
              className="mt-5 inline-block text-sm font-semibold text-white/65 transition hover:text-white"
            >
              hempongroup@gmail.com
            </a>
          </div>
          <div>
            <div className="mono text-[9px] uppercase tracking-[.24em] text-white/25">
              Explore
            </div>
            <div className="mt-5 grid gap-3 text-sm text-white/45">
              <a href="#work" className="hover:text-white">
                Work
              </a>
              <a href="#capabilities" className="hover:text-white">
                Capabilities
              </a>
              <a href="#process" className="hover:text-white">
                Process
              </a>
              <a href="#about" className="hover:text-white">
                About
              </a>
              <a href="#pricing" className="hover:text-white">
                Pricing
              </a>
            </div>
          </div>
          <div>
            <div className="mono text-[9px] uppercase tracking-[.24em] text-white/25">
              Connect
            </div>
            <div className="mt-5 grid gap-3 text-sm text-white/45">
              {socials.map(([label, url]) => (
                <a
                  key={label}
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-white"
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </div>
          <div>
            <div className="mono text-[9px] uppercase tracking-[.24em] text-white/25">
              Based in
            </div>
            <p className="mt-5 text-sm leading-6 text-white/45">
              Mombasa, Kenya
              <br />
              Working beyond borders.
            </p>
            <a
              href="#contact"
              className="mt-5 inline-flex rounded-full border border-white/[.12] px-4 py-2 text-xs font-semibold text-white/70 transition hover:border-white/25 hover:text-white"
            >
              Start a project ↗
            </a>
          </div>
        </div>
        <div className="border-t border-white/[.08] py-5">
          <div className="flex flex-col justify-between gap-3 text-[9px] uppercase tracking-[.18em] text-white/25 sm:flex-row">
            <span>
              © {new Date().getFullYear()} Hempon Group. All rights reserved.
            </span>
            <div className="flex gap-5">
              <a href="/privacy-policy" className="hover:text-white/60">
                Privacy
              </a>
              <a href="/terms" className="hover:text-white/60">
                Terms
              </a>
              <span>Digital Engineering · Kenya</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function BackToTop() {
  return (
    <motion.a
      href="#top"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      className="back-top fixed bottom-5 right-4 z-40 inline-flex items-center gap-2 rounded-full border border-white/[.12] bg-[#0a0e14]/85 px-3.5 py-2.5 text-[10px] font-bold uppercase tracking-[.16em] text-white/55 shadow-2xl backdrop-blur-xl transition hover:border-white/25 hover:text-white sm:bottom-7 sm:right-7"
    >
      <span>Top</span>
      <span>↑</span>
    </motion.a>
  );
}

export default function Home() {
  const workRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: workRef,
    offset: ["start end", "end start"],
  });
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 0.5, 1], [0.98, 1, 0.98]),
    { stiffness: 80, damping: 20 },
  );
  return (
    <div id="top" className="noise relative min-h-screen bg-[var(--bg)]">
      <Nav />
      <Hero />
      <Reveal>
        <Services />
      </Reveal>
      <div ref={workRef} style={{ transform: "translateZ(0)" }}>
        <motion.div style={{ scale }}>
          <Work />
        </motion.div>
      </div>
      <Reveal>
        <Process />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Pricing />
      </Reveal>
      <Reveal>
        <Contact />
      </Reveal>
      <Footer />
      <BackToTop />
    </div>
  );
}
