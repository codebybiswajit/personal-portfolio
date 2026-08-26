import { motion } from 'framer-motion';
import type { Education as EducationType } from '../types/profile';
import { FadeUp } from './AnimatedSection';

interface EducationProps {
  data: EducationType[];
}

export default function Education({ data }: EducationProps) {
  return (
    <section id="education" className="section education">
      <FadeUp>
        <h2 className="section__title">
          <span className="section__number">03.</span> Education
        </h2>
      </FadeUp>

      <div className="timeline">
        {data.map((edu, i) => (
          <motion.div
            key={`${edu.institution}-${edu.start}`}
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
                  <h3 className="timeline__role">{edu.degree}</h3>
                  <p className="timeline__company">{edu.field} @ {edu.institution}</p>
                </div>
                <div className="timeline__meta">
                  {edu.honors && (
                    <span className="badge badge--accent">{edu.honors}</span>
                  )}
                  <span className="timeline__date">
                    {edu.start} — {edu.end}
                  </span>
                  <span className="timeline__location">📍 {edu.location}</span>
                </div>
              </div>
              
              <div style={{ marginBottom: '24px', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <strong>GPA:</strong> {edu.gpa}
              </div>

              <div className="edu-card__courses">
                <h4>Key Courses</h4>
                <div className="course-chips">
                  {edu.courses.map((course, j) => (
                    <motion.span
                      key={course}
                      className="course-chip"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        delay: 0.4 + i * 0.2 + j * 0.05,
                        duration: 0.35,
                        ease: [0.34, 1.56, 0.64, 1],
                      }}
                      whileHover={{ y: -2, scale: 1.05, background: 'rgba(108, 99, 255, 0.12)' }}
                    >
                      {course}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
