"use client";
import { motion, useMotionValue, useSpring } from "motion/react";
import { useRef } from "react";

export default function MagneticButton({children,href="#work"}:{children:React.ReactNode;href?:string}) {
 const ref=useRef<HTMLAnchorElement>(null);
 const x=useMotionValue(0), y=useMotionValue(0);
 const sx=useSpring(x,{stiffness:220,damping:20}), sy=useSpring(y,{stiffness:220,damping:20});
 const move=(e:React.PointerEvent<HTMLAnchorElement>)=>{if(!ref.current||e.pointerType==='touch')return;const r=ref.current.getBoundingClientRect();x.set((e.clientX-r.left-r.width/2)*.1);y.set((e.clientY-r.top-r.height/2)*.1)};
 return <motion.a ref={ref} href={href} style={{x:sx,y:sy}} onPointerMove={move} onPointerLeave={()=>{x.set(0);y.set(0)}} className="magnetic-cta group inline-flex items-center gap-4 rounded-full border border-white/[.13] bg-white/[.93] px-5 py-3 text-sm font-bold text-[#080b10] transition hover:bg-white">
  <span>{children}</span><span className="transition-transform group-hover:translate-x-1">↗</span>
 </motion.a>
}
