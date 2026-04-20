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
