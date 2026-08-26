import { useState } from 'react';
import type { NavLayout } from './types/profile';
import { profileData } from './data/profile';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from './hooks/useTheme';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import GithubTab from './components/GithubTab';
import { FadeUp } from './components/AnimatedSection';

export default function App() {
  const [layout, setLayout] = useState<NavLayout>('left');
  const [activeTab, setActiveTab] = useState<'main' | 'github'>('main');
  const { mode: themeMode, resolvedTheme, cycleTheme } = useTheme();

  const toggleLayout = () => {
    setLayout((prev) => (prev === 'top' ? 'left' : 'top'));
  };

  return (
    <div className={`app app--${layout}`}>
      <ParticleCanvas resolvedTheme={resolvedTheme} />
      <Navbar
        layout={layout}
        onToggleLayout={toggleLayout}
        themeMode={themeMode}
        onCycleTheme={cycleTheme}
        activeTab={activeTab}
        onTabChange={setActiveTab}
      />

      <main className={`main main--${layout}`}>
        <AnimatePresence mode="wait">
          {activeTab === 'main' ? (
            <motion.div
              key="main"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Hero data={profileData} />
              <About data={profileData} />
              <Experience data={profileData.experience} />
              <Education data={profileData.education} />
              <Projects data={profileData.projects} />
              <Skills data={profileData.skillGroups} />
              <Certifications data={profileData.certifications} />
              <Contact data={profileData.contact} />

              <FadeUp as="footer" className="footer" delay={0}>
                <p>&copy; 2026 Biswajit Mohapatra. Crafted with passion.</p>
              </FadeUp>
            </motion.div>
          ) : (
            <motion.div
              key="github"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <GithubTab
                githubUsername={profileData.contact.github.replace('github.com/', '')}
                pinnedRepos={profileData.githubPinnedRepos || []}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
