import { motion } from 'framer-motion';
import type { Project } from '../types/profile';
import { FadeUp } from './AnimatedSection';

interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data }: ProjectsProps) {
  return (
    <section id="projects" className="section projects">
      <FadeUp>
        <h2 className="section__title">
          <span className="section__number">04.</span> Projects
        </h2>
      </FadeUp>

      <div className="projects__grid">
        {data.map((project, i) => (
          <motion.div
            key={project.name}
            className="project-card glass-card"
            initial={{ opacity: 0, y: 50, rotateX: 8 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              duration: 0.7,
              delay: 0.1 + i * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{
              y: -8,
              scale: 1.02,
              boxShadow: '0 25px 60px rgba(0,0,0,0.3), 0 0 40px rgba(108,99,255,0.08)',
            }}
          >
            <div className="project-card__glow" />
            <div className="project-card__number">
              {String(i + 1).padStart(2, '0')}
            </div>
            <h3 className="project-card__name">{project.name}</h3>
            <p className="project-card__desc">{project.desc}</p>
            <div className="project-card__tech">
              {project.tech.map((tech, j) => (
                <motion.span
                  key={tech}
                  className="tech-tag"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.15 + j * 0.04, duration: 0.3 }}
                  whileHover={{ y: -2, scale: 1.08 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
