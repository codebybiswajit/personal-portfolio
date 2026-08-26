import { motion } from 'framer-motion';
import type { ProfileData } from '../types/profile';
import { FadeUp, SlideIn } from './AnimatedSection';

interface AboutProps {
  data: ProfileData;
}

export default function About({ data }: AboutProps) {
  return (
    <section id="about" className="section about">
      <FadeUp>
        <h2 className="section__title">
          <span className="section__number">01.</span> About Me
        </h2>
      </FadeUp>

      <div className="about__grid">
        <SlideIn className="about__text" delay={0.1} direction="left">
          <p>{data.summary}</p>
        </SlideIn>

        <SlideIn className="about__info" delay={0.2} direction="right">
          {[
            { icon: '📍', label: 'Location', value: data.contact.location },
            { icon: '📞', label: 'Phone', value: data.contact.phone },
            { icon: '✉️', label: 'Email', value: data.contact.email },
            {
              icon: '🌐',
              label: 'Website',
              value: (
                <a href={`https://${data.contact.website}`} target="_blank" rel="noopener noreferrer">
                  Portfolio
                </a>
              ),
            },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              className="info-card glass-card"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.08, duration: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ scale: 1.05, y: -4 }}
            >
              <div className="info-card__icon">{item.icon}</div>
              <div className="info-card__label">{item.label}</div>
              <div className="info-card__value">{item.value}</div>
            </motion.div>
          ))}
        </SlideIn>
      </div>

      <FadeUp className="about__languages" delay={0.4}>
        <h3 className="subsection__title">Languages</h3>
        <div className="lang-pills">
          {data.languages.map((lang, i) => (
            <motion.span
              key={lang.language}
              className="lang-pill"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45 + i * 0.1, duration: 0.5 }}
              whileHover={{ y: -3, scale: 1.05 }}
            >
              <strong>{lang.language}</strong> — {lang.proficiency}
            </motion.span>
          ))}
        </div>
      </FadeUp>

      <FadeUp className="about__interests" delay={0.5}>
        <h3 className="subsection__title">Interests</h3>
        <div className="interest-tags">
          {data.interests.map((interest, i) => (
            <motion.span
              key={interest}
              className="interest-tag"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.55 + i * 0.1, duration: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
              whileHover={{ scale: 1.08, y: -3 }}
            >
              {interest === 'Open Source' && '🚀 '}
              {interest === 'Competitive Programming' && '🏆 '}
              {interest === 'Tech Blogging' && '✍️ '}
              {interest}
            </motion.span>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
