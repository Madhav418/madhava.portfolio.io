import { motion, useReducedMotion, type HTMLMotionProps } from 'framer-motion'

type RevealProps = HTMLMotionProps<'div'> & {
  delay?: number
}

export function Reveal({ delay = 0, children, ...props }: RevealProps) {
  const reduceMotion = useReducedMotion()
  return (
    <motion.div
      initial={{ opacity: reduceMotion ? 1 : 0.75, y: reduceMotion ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: reduceMotion ? 0 : 0.65, ease: [0.22, 1, 0.36, 1], delay: reduceMotion ? 0 : delay }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
