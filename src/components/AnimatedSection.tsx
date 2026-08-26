import type { ReactNode } from 'react';
import { motion, type Variants } from 'framer-motion';

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

interface AnimatedSectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

export default function AnimatedSection({
  id,
  className = '',
  children,
}: AnimatedSectionProps) {
  return (
    <motion.section
      id={id}
      className={`section ${className}`}
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.section>
  );
}

interface FadeUpProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'footer';
}

export function FadeUp({
  children,
  className = '',
  delay = 0,
  as = 'div',
}: FadeUpProps) {
  const Component = as === 'footer' ? motion.footer : motion.div;

  return (
    <Component
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </Component>
  );
}

interface ScaleInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function ScaleIn({ children, className = '', delay = 0 }: ScaleInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.85 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      {children}
    </motion.div>
  );
}

interface SlideInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'left' | 'right';
}

export function SlideIn({
  children,
  className = '',
  delay = 0,
  direction = 'left',
}: SlideInProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x: direction === 'left' ? -60 : 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.7,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
