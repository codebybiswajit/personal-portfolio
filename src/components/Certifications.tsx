import { motion } from 'framer-motion';
import type { Certification } from '../types/profile';
import { FadeUp } from './AnimatedSection';

interface CertificationsProps {
  data: Certification[];
}

export default function Certifications({ data }: CertificationsProps) {
  return (
    <section id="certifications" className="section certifications">
      <FadeUp>
        <h2 className="section__title">
          <span className="section__number">06.</span> Certifications
        </h2>
      </FadeUp>

      <div className="cert-cards">
        {data.map((cert, i) => (
          <motion.div
            key={cert.name}
            className="cert-card glass-card"
            initial={{ opacity: 0, y: 30, rotateY: 10 }}
            whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.6,
              delay: 0.1 + i * 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            whileHover={{ y: -6, scale: 1.03 }}
          >
            <motion.div
              className="cert-card__ribbon"
              animate={{ rotate: [0, 8, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
            >
              🏅
            </motion.div>
            <h3 className="cert-card__name">{cert.name}</h3>
            <p className="cert-card__issuer">{cert.issuer}</p>
            <p className="cert-card__date">{cert.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
