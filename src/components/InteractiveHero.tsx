"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import MagneticButton from "./MagneticButton";
import ThreeScene from "./ThreeScene";

export default function InteractiveHero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0,1], [0,-120]);
  const opacity = useTransform(scrollYProgress, [0,.7,1], [1,.85,0]);
  return <section ref={ref} className="relative min-h-[100svh] overflow-hidden border-b border-white/[.07] pt-28 md:pt-32">
    <div className="absolute inset-0 grid-bg"/>
    <div className="absolute -right-[15%] top-[18%] h-[650px] w-[650px] rounded-full bg-cyan-400/[.07] blur-[120px]"/>
    <div className="absolute -left-[20%] bottom-0 h-[500px] w-[500px] rounded-full bg-violet-500/[.07] blur-[120px]"/>
    <div className="section-shell relative flex min-h-[calc(100svh-7rem)] flex-col justify-center pb-16">
      <div className="grid items-center gap-4 lg:grid-cols-[1.05fr_.95fr]">
        <motion.div style={{ y, opacity }} className="relative z-10 max-w-4xl">
          <div className="mono flex items-center gap-3 text-[10px] uppercase tracking-[.3em] text-white/40"><span className="h-1.5 w-1.5 rounded-full bg-[var(--lime)] shadow-[0_0_16px_var(--lime)]"/> Digital engineering studio · Kenya</div>
          <h1 className="display mt-7 text-[clamp(4.5rem,10.5vw,10rem)] leading-[.78]">WE BUILD<br/><span className="text-white/28">WHAT</span> <span className="text-gradient">MATTERS.</span></h1>
          <p className="mt-9 max-w-xl text-base leading-7 text-white/45 md:text-lg">Websites, mobile applications, business software and automation — engineered around the way your business actually works.</p>
          <div className="mt-9 flex flex-wrap items-center gap-3"><MagneticButton href="#work">Explore the work</MagneticButton><a href="#contact" className="rounded-full border border-white/10 px-6 py-3 text-sm font-medium text-white/55 transition hover:border-white/25 hover:text-white">Tell us the problem ↗</a></div>
        </motion.div>
        <motion.div style={{ opacity }} className="relative -my-8 lg:my-0"><ThreeScene/><div className="pointer-events-none absolute right-2 top-1/2 hidden -translate-y-1/2 flex-col gap-2 lg:flex"><span className="mono text-[8px] uppercase tracking-[.25em] text-white/25 [writing-mode:vertical-rl]">Systems / Interfaces / Motion</span></div></motion.div>
      </div>
      <div className="mt-6 flex items-center justify-between border-t border-white/[.07] pt-5"><span className="mono text-[9px] uppercase tracking-[.25em] text-white/25">Scroll to enter</span><span className="mono text-[9px] uppercase tracking-[.25em] text-white/25">01 — 07</span></div>
    </div>
  </section>;
}
