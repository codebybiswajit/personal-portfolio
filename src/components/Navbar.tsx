import { motion, AnimatePresence } from 'framer-motion';
import type { NavLayout } from '../types/profile';
import type { ThemeMode } from '../hooks/useTheme';
import { useActiveSection } from '../hooks/useAnimations';
import type { JSX } from 'react/jsx-runtime';

interface NavbarProps {
  layout: NavLayout;
  onToggleLayout: () => void;
  themeMode: ThemeMode;
  onCycleTheme: () => void;
  activeTab: 'main' | 'github';
  onTabChange: (tab: 'main' | 'github') => void;
}

const sectionIds = [
  'hero',
  'about',
  'experience',
  'education',
  'projects',
  'skills',
  'certifications',
  'contact',
];

const sectionLabels: Record<string, string> = {
  hero: 'Home',
  about: 'About',
  experience: 'Experience',
  education: 'Education',
  projects: 'Projects',
  skills: 'Skills',
  certifications: 'Certs',
  contact: 'Contact',
};

const themeIcons: Record<ThemeMode, JSX.Element> = {
  system: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  light: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ),
  dark: (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  ),
};

const themeLabels: Record<ThemeMode, string> = {
  system: 'System',
  light: 'Light',
  dark: 'Dark',
};

export default function Navbar({ layout, onToggleLayout, themeMode, onCycleTheme, activeTab, onTabChange }: NavbarProps) {
  const activeSection = useActiveSection(sectionIds);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const LayoutTopIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="3" y1="9" x2="21" y2="9" />
    </svg>
  );

  const LayoutLeftIcon = () => (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <line x1="9" y1="3" x2="9" y2="21" />
    </svg>
  );

  return (
    <AnimatePresence mode="wait">
      <motion.nav
        key={layout}
        className={`nav nav--${layout}`}
        initial={{ opacity: 0, ...(layout === 'top' ? { y: -80 } : { x: -280 }) }}
        animate={{ opacity: 1, y: 0, x: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <div className="nav__brand">
          <motion.span
            className="nav__logo"
            animate={{ rotate: [0, 2, -2, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
          >
            B
          </motion.span>
          <span className="nav__name">Biswajit</span>
        </div>

        {/* Controls: layout toggle + theme toggle */}
        <div className="nav__controls">
          <button
            className="nav-icon-btn"
            onClick={onToggleLayout}
            aria-label={`Switch to ${layout === 'top' ? 'Left Sidebar' : 'Top'} Nav`}
            title={`Switch to ${layout === 'top' ? 'Left Sidebar' : 'Top'} Nav`}
          >
            {layout === 'top' ? <LayoutLeftIcon /> : <LayoutTopIcon />}
            <span className="nav-icon-btn__label">
              {layout === 'top' ? 'Left Nav' : 'Top Nav'}
            </span>
          </button>

          <button
            className="nav-icon-btn"
            onClick={onCycleTheme}
            aria-label={`Theme: ${themeLabels[themeMode]}`}
            title={`Theme: ${themeLabels[themeMode]} (click to cycle)`}
          >
            {themeIcons[themeMode]}
            <span className="nav-icon-btn__label">
              {themeLabels[themeMode]}
            </span>
          </button>
          <button
            className="nav-icon-btn"
            onClick={() => onTabChange(activeTab === 'main' ? 'github' : 'main')}
            aria-label={`Switch to ${activeTab === 'main' ? 'GitHub Projects' : 'Portfolio'}`}
            title={`Switch to ${activeTab === 'main' ? 'GitHub Projects' : 'Portfolio'}`}
          >
            {activeTab === 'main' ? (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            ) : (
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
            )}
            <span className="nav-icon-btn__label">
              {activeTab === 'main' ? 'GitHub' : 'Home'}
            </span>
          </button>
        </div>

        {activeTab === 'main' && (
          <ul className="nav__links">
            {sectionIds.map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`nav__link ${activeSection === id ? 'active' : ''}`}
                  onClick={(e) => handleClick(e, id)}
                >
                  {layout === 'left' && <span className="nav__link-dot" />}
                  <span className="nav__link-text">{sectionLabels[id]}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </motion.nav>
    </AnimatePresence>
  );
}
