'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TITLES = [
  'Digital Strategist',
  'Marketing Technologist',
  'Web Channel Manager',
  'UX Strategist',
]

export default function Hero() {
  const [titleIdx, setTitleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [pos, setPos] = useState(0)

  useEffect(() => {
    const target = TITLES[titleIdx]
    let t: ReturnType<typeof setTimeout>

    if (!deleting && pos < target.length) {
      t = setTimeout(() => {
        setDisplayed(target.slice(0, pos + 1))
        setPos((p) => p + 1)
      }, 85)
    } else if (!deleting && pos === target.length) {
      t = setTimeout(() => setDeleting(true), 2400)
    } else if (deleting && pos > 0) {
      t = setTimeout(() => {
        setDisplayed(target.slice(0, pos - 1))
        setPos((p) => p - 1)
      }, 45)
    } else {
      setDeleting(false)
      setTitleIdx((i) => (i + 1) % TITLES.length)
    }
    return () => clearTimeout(t)
  }, [pos, deleting, titleIdx])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background grid */}
      <div className="absolute inset-0 dot-grid opacity-[0.32]" />

      {/* Gradient orbs */}
      <div className="orb orb-1" />
      <div className="orb orb-2" />
      <div className="orb orb-3" />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#07080F] to-transparent pointer-events-none" />

      {/* Horizontal accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(0,212,232,0.18)] to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto pt-24 pb-32">
        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2.5 font-display text-[11px] font-semibold tracking-[0.25em] uppercase text-[#8892A4] border border-[rgba(255,255,255,0.1)] rounded-full px-4 py-2">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse shrink-0" />
            Columbus, OH &nbsp;·&nbsp; Digital Marketing Specialist
          </span>
        </motion.div>

        {/* Main name — staggered lines */}
        <div className="overflow-hidden mb-2">
          <motion.div
            initial={{ y: 110, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.95, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <h1 className="font-display font-extrabold leading-[0.88] tracking-[-0.04em] select-none">
              <span
                className="block text-[#E8EAFF]"
                style={{ fontSize: 'clamp(5rem, 17vw, 11.5rem)' }}
              >
                RYAN
              </span>
              <span
                className="block text-accent"
                style={{ fontSize: 'clamp(5rem, 17vw, 11.5rem)' }}
              >
                JUDY
              </span>
            </h1>
          </motion.div>
        </div>

        {/* Typing subtitle */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.1 }}
          className="mt-7 mb-5 h-7 flex items-center justify-center"
        >
          <p className="font-body text-lg md:text-xl text-[#8892A4] tracking-wide">
            {displayed}
            <span className="inline-block w-[2px] h-[18px] bg-accent ml-[2px] animate-blink align-middle translate-y-[-1px]" />
          </p>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.3 }}
          className="font-body text-[15px] text-[#4A5568] leading-relaxed max-w-[480px] mx-auto mb-10"
        >
          Where strategy meets technology. Building measurable digital experiences at the
          intersection of marketing, web development, and data-driven decision making.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.5 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <a href="#projects" className="btn-primary">
            View My Work
            <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
              <path
                d="M2 7.5h11M8 3l4.5 4.5L8 12"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a href="#contact" className="btn-secondary">
            Get in Touch
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-display text-[9px] tracking-[0.28em] uppercase text-[#4A5568]">
          Scroll
        </span>
        <div className="w-5 h-8 border border-[rgba(255,255,255,0.13)] rounded-full flex items-start justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 13, 0] }}
            transition={{ repeat: Infinity, duration: 1.9, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-accent"
          />
        </div>
      </motion.div>
    </section>
  )
}
