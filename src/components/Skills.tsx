import { motion } from 'framer-motion';
import type { SkillGroup } from '../types/profile';
import { FadeUp } from './AnimatedSection';

interface SkillsProps {
  data: SkillGroup[];
}

const categoryIcons: Record<string, string> = {
  Frontend: '🎨',
  Backend: '⚙️',
  Databases: '🗄️',
  'Data & Scraping': '🕷️',
  'DevOps & Cloud': '☁️',
  'Tools & Others': '🛠️',
};

export default function Skills({ data }: SkillsProps) {
  return (
    <section id="skills" className="section skills">
      <FadeUp>
        <h2 className="section__title">
          <span className="section__number">05.</span> Skills
        </h2>
      </FadeUp>

      <div className="skills__grid">
        {data.map((group, i) => (
          <motion.div
            key={group.category}
            className="skill-group glass-card"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.5,
              delay: 0.05 + i * 0.1,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -6 }}
          >
            <motion.div
              className="skill-group__icon"
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', delay: i * 0.3 }}
            >
              {categoryIcons[group.category] || '💡'}
            </motion.div>
            <h3 className="skill-group__title">{group.category}</h3>
            <div className="skill-group__items">
              {group.skills.map((skill, j) => (
                <motion.span
                  key={skill}
                  className="skill-item"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: 0.2 + i * 0.1 + j * 0.05,
                    duration: 0.35,
                    ease: [0.34, 1.56, 0.64, 1],
                  }}
                  whileHover={{
                    y: -3,
                    scale: 1.08,
                    background: 'rgba(108, 99, 255, 0.22)',
                    color: '#fff',
                  }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
