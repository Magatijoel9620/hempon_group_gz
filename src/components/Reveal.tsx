"use client";
import { motion } from "motion/react";
export default function Reveal({children}:{children:React.ReactNode}){return <motion.div initial={{opacity:0,y:28}} whileInView={{opacity:1,y:0}} viewport={{once:true,margin:'-8% 0px'}} transition={{duration:.7,ease:[.22,1,.36,1]}}>{children}</motion.div>}
