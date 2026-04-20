/**
 * @file page.js — Home Page
 * @description Main entry page that composes all portfolio sections in order.
 *              The layout follows a basketball game structure:
 *
 *   Navbar          → Fixed top navigation with section links
 *   Hero            → Q1 "Tip-Off" — intro, tagline, social links
 *   StatsSheet      → Q2 "Stats Sheet" — Concentrix KPIs & performance metrics
 *   Playbook        → Q3 "Playbook" — project showcase cards
 *   TrainingLog     → Q4 "Training Log" — work experience timeline
 *   ShotChart       → Scouting Report — skills on a basketball half-court
 *   AwardsEducation → Hall of Fame + Draft Class — awards & education
 *   Footer          → Contact links, Kobe quote, theme toggle
 */

import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import StatsSheet from '@/components/StatsSheet';
import Playbook from '@/components/Playbook';
import TrainingLog from '@/components/TrainingLog';
import ShotChart from '@/components/ShotChart';
import AwardsEducation from '@/components/AwardsEducation';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-7xl mx-auto">
        <Hero />
        <StatsSheet />
        <Playbook />
        <TrainingLog />
        <ShotChart />
        <AwardsEducation />
      </main>
      <Footer />
    </>
  );
}
