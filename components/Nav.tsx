'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(7,8,15,0.88)] backdrop-blur-2xl border-b border-[rgba(255,255,255,0.06)] py-3'
          : 'py-5'
      }`}
    >
      <div className="section-container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-9 h-9 bg-accent rounded flex items-center justify-center shrink-0 transition-all duration-200 group-hover:shadow-[0_0_20px_rgba(0,212,232,0.5)]">
            <span className="font-display font-bold text-[13px] text-[#07080F] leading-none">RJ</span>
          </div>
          <span className="font-display font-semibold text-[#E8EAFF] text-sm hidden sm:block tracking-wide">
            Ryan Judy
          </span>
        </a>

        {/* Desktop links */}
        <nav className="hidden md:flex items-center gap-7">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative font-body text-sm text-[#8892A4] hover:text-[#E8EAFF] transition-colors duration-200 group py-1"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 h-px w-0 bg-accent transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            className="btn-primary !py-2.5 !px-5 !text-[12px] !tracking-[0.07em]"
          >
            Reach Out
          </a>
        </nav>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-[5px] p-2 -mr-2"
          aria-label="Toggle menu"
        >
          <span
            className={`w-[22px] h-[1.5px] bg-[#E8EAFF] rounded-full transition-all duration-300 origin-center ${
              open ? 'rotate-45 translate-y-[6.5px]' : ''
            }`}
          />
          <span
            className={`w-[22px] h-[1.5px] bg-[#E8EAFF] rounded-full transition-all duration-300 ${
              open ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`w-[22px] h-[1.5px] bg-[#E8EAFF] rounded-full transition-all duration-300 origin-center ${
              open ? '-rotate-45 -translate-y-[6.5px]' : ''
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden bg-[rgba(7,8,15,0.96)] backdrop-blur-2xl border-t border-[rgba(255,255,255,0.06)]"
          >
            <div className="section-container py-5 flex flex-col gap-4">
              {LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  onClick={() => setOpen(false)}
                  className="font-body text-[#8892A4] hover:text-[#E8EAFF] transition-colors py-1 text-base"
                >
                  {link.label}
                </motion.a>
              ))}
              <a href="#contact" onClick={() => setOpen(false)} className="btn-primary self-start mt-2">
                Reach Out
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
