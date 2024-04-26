/* eslint-disable react/no-unescaped-entities */

import FeaturedSection from "@/components/FeaturedSection";
import HeroSection from "@/components/HeroSection";
import MovingCards from "@/components/MovingCards";
import Webinars from "@/components/Webinars";
import WhyChooseUs from "@/components/WhyChooseUs";
import { Metadata } from "next";
import Instructor from "@/components/Instructor";

export const metadata: Metadata ={
  title: 'Music Project'
}
export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased
    bg-grid-white/[0.02]"> 
    <HeroSection/> 
    <FeaturedSection/>
    <WhyChooseUs /> 
    <MovingCards />
    <Webinars />
    <Instructor/> 
    </main>
  );
}
