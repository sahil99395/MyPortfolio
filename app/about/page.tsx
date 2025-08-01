'use client';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import AboutHero from './AboutHero';
import PersonalStory from './PersonalStory';
import SkillsSection from './SkillsSection';
import InterestsSection from './InterestsSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <AboutHero />
      <PersonalStory />
      <SkillsSection />
      <InterestsSection />
      <Footer />
    </div>
  );
}