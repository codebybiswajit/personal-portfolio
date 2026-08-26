import { motion } from 'framer-motion';
import type { Experience as ExperienceType } from '../types/profile';
import { FadeUp } from './AnimatedSection';

interface ExperienceProps {
  data: ExperienceType[];
}

export default function Experience({ data }: ExperienceProps) {
  return (
    <section id="experience" className="section experience">
      <FadeUp>
        <h2 className="section__title">
          <span className="section__number">02.</span> Experience
        </h2>
      </FadeUp>

      <div className="timeline">
        {data.map((job, i) => (
          <motion.div
            key={`${job.company}-${job.start}`}
            className="timeline__item"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{
              duration: 0.7,
              delay: 0.15 + i * 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <motion.div
              className="timeline__dot"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.2, type: 'spring', stiffness: 300, damping: 15 }}
            />
            <div className="timeline__connector" />
            <motion.div
              className="timeline__card glass-card"
              whileHover={{ y: -4, borderColor: 'rgba(108, 99, 255, 0.3)' }}
              transition={{ duration: 0.3 }}
            >
              <div className="timeline__header">
                <div>
                  <h3 className="timeline__role">{job.title}</h3>
                  <p className="timeline__company">{job.company}</p>
                </div>
                <div className="timeline__meta">
                  <span className={`badge ${job.type === 'Full-time' ? 'badge--primary' : 'badge--secondary'}`}>
                    {job.type}
                  </span>
                  <span className="timeline__date">
                    {job.start} — {job.end}
                  </span>
                  <span className="timeline__location">📍 {job.location}</span>
                </div>
              </div>
              <ul className="timeline__bullets">
                {job.bullets.map((bullet, j) => (
                  <motion.li
                    key={j}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + i * 0.2 + j * 0.06, duration: 0.4 }}
                  >
                    {bullet}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
