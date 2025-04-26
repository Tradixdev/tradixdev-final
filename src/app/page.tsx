'use client'

import CTA from "@/components/sections/home/cta";
import Grid from "@/components/sections/home/grid";
import Hero from "@/components/sections/home/hero";
import StickyGrid from "@/components/sections/home/stickygrid";
import Support from "@/components/sections/home/support";
import Token from "@/components/sections/home/token";
import Spline from '@splinetool/react-spline/next';

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero/>
      <Support/>
      <Grid/>
      <StickyGrid/>
      <Token/>
      <CTA/>
    </main>
  );
}
