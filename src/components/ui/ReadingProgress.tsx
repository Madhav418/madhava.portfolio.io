import { motion, useScroll } from 'framer-motion'

/** Transform-only scroll feedback, without React updates on every scroll event. */
export function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  return <motion.div aria-hidden="true" className="reading-progress" style={{ scaleX: scrollYProgress }} />
}
