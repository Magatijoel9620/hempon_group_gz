"use client";
import { useEffect } from "react";
import Lenis from "lenis";
export default function SmoothScroll(){useEffect(()=>{if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const lenis=new Lenis({smoothWheel:true,lerp:.085});let raf=0;const loop=(t:number)=>{lenis.raf(t);raf=requestAnimationFrame(loop)};raf=requestAnimationFrame(loop);return()=>{cancelAnimationFrame(raf);lenis.destroy()}},[]);return null}
