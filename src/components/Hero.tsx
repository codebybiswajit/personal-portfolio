import { motion } from 'framer-motion';
import type { ProfileData } from '../types/profile';
import { useTypingEffect } from '../hooks/useAnimations';

interface HeroProps {
  data: ProfileData;
}

const typingStrings = [
  'Full Stack Developer .',
  'Asp.Net Core Developer .',
  'MERN Stack Developer .',
  'React Developer .',
  'TypeScript Developer .',
  'Node.js Expert .',
  'Python Developer .',
];

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 35 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] as const },
});

export default function Hero({ data }: HeroProps) {
  const typedText = useTypingEffect(typingStrings);

  return (
    <section id="hero" className="section hero">
      <div className="hero__content">
        <motion.div className="hero__badge" {...fadeUp(0.1)}>
          <span className="pulse-dot" />
          Open to Work — Available {data.availableFrom}
        </motion.div>

        <motion.h1 className="hero__title" {...fadeUp(0.25)}>
          Hi, I'm{' '}
          <span className="gradient-text">
            {data.firstName} {data.lastName}
          </span>
        </motion.h1>

        <motion.div className="hero__typing" {...fadeUp(0.4)}>
          <span className="typing-prefix">I'm a </span>
          <span className="typing-text">{typedText}</span>
          <span className="typing-cursor">|</span>
        </motion.div>

        <motion.p className="hero__tagline" {...fadeUp(0.55)}>
          {data.tagline}
        </motion.p>

        <motion.div className="hero__cta" {...fadeUp(0.7)}>
          <a href="#contact" className="btn btn--primary"
            onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
            Get in Touch
          </a>
          <a href="#projects" className="btn btn--ghost"
            onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
            View Projects
          </a>
        </motion.div>

        <motion.div className="hero__socials" {...fadeUp(0.85)}>
          <motion.a href={`https://${data.contact.github}`} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="GitHub"
            whileHover={{ y: -4, scale: 1.15 }} whileTap={{ scale: 0.95 }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 .5C5.37.5 0 5.78 0 12.292c0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.333-1.723-1.333-1.723-1.089-.73.083-.715.083-.715 1.205.083 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.228-3.164-.123-.298-.532-1.497.117-3.12 0 0 1.001-.314 3.28 1.209A11.5 11.5 0 0112 6.844c1.018.005 2.042.136 2.998.398 2.277-1.523 3.276-1.209 3.276-1.209.651 1.623.242 2.822.12 3.12.765.825 1.226 1.877 1.226 3.164 0 4.53-2.805 5.527-5.475 5.817.43.364.823 1.082.823 2.181 0 1.574-.015 2.846-.015 3.231 0 .315.216.683.825.567C20.565 21.917 24 17.499 24 12.292 24 5.78 18.627.5 12 .5z" />
            </svg>
          </motion.a>
          <motion.a href={`https://${data.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"
            whileHover={{ y: -4, scale: 1.15 }} whileTap={{ scale: 0.95 }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
          </motion.a>
          <motion.a href={`mailto:${data.contact.email}`} className="social-icon" aria-label="Email"
            whileHover={{ y: -4, scale: 1.15 }} whileTap={{ scale: 0.95 }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
          </motion.a>
          <motion.a href={`https://${data.contact.website}`} target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Website"
            whileHover={{ y: -4, scale: 1.15 }} whileTap={{ scale: 0.95 }}>
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="hero__orb"
        animate={{ x: [0, -30, 15, 0], y: [0, 20, -25, 0], scale: [1, 1.05, 0.95, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="hero__orb hero__orb--2"
        animate={{ x: [0, 25, -30, 0], y: [0, -30, 20, 0], scale: [1, 1.08, 0.92, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
      />
    </section>
  );
}
