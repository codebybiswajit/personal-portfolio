import { motion } from 'framer-motion';
import type { Contact as ContactType } from '../types/profile';
import { FadeUp } from './AnimatedSection';

interface ContactProps {
  data: ContactType;
}

export default function Contact({ data }: ContactProps) {
  const tiles = [
    { icon: '✉️', label: 'Email', value: data.email, href: `mailto:${data.email}` },
    { icon: '📞', label: 'Phone', value: data.phone, href: `tel:${data.phone}` },
    { icon: '💼', label: 'LinkedIn', value: "Biswajit Mohapatra", href: `https://${data.linkedin}`, external: true },
    { icon: '🐙', label: 'GitHub', value: "Biswajit Mohapatra", href: `https://${data.github}`, external: true },
  ];

  return (
    <section id="contact" className="section contact">
      <FadeUp>
        <h2 className="section__title">
          <span className="section__number">07.</span> Get in Touch
        </h2>
      </FadeUp>

      <div className="contact__grid">
        {tiles.map((tile, i) => {
          const inner = (
            <>
              <div className="contact-tile__icon">{tile.icon}</div>
              <div className="contact-tile__label">{tile.label}</div>
              <div className="contact-tile__value">{tile.value}</div>
            </>
          );

          return (
            <motion.div
              key={tile.label}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.5,
                delay: 0.08 + i * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              whileHover={{ y: -6, scale: 1.03 }}
            >
              {tile.href ? (
                <a
                  href={tile.href}
                  className="contact-tile glass-card"
                  {...(tile.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  {inner}
                </a>
              ) : (
                <div className="contact-tile glass-card">{inner}</div>
              )}
            </motion.div>
          );
        })}
      </div>

      <FadeUp delay={0.4}>
        <div className="contact__map" style={{ marginTop: '40px', borderRadius: '16px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
          <iframe
            title="Location Map"
            src={`https://maps.google.com/maps?q=${encodeURIComponent(data.location)}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
            width="100%"
            height="350"
            style={{ border: 0, display: 'block', filter: 'var(--map-filter)' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </FadeUp>
    </section>
  );
}
