import { Fragment } from 'react'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-[rgba(255,255,255,0.06)] py-12">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-accent rounded flex items-center justify-center shrink-0">
              <span className="font-display font-bold text-[12px] text-[#07080F] leading-none">RJ</span>
            </div>
            <span className="font-display font-semibold text-[#8892A4] text-sm">Ryan Judy</span>
          </div>

          {/* Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {LINKS.map((link, i) => (
              <Fragment key={link.href}>
                <a
                  href={link.href}
                  className="font-body text-[13px] text-[#4A5568] hover:text-[#8892A4] transition-colors"
                >
                  {link.label}
                </a>
                {i < LINKS.length - 1 && (
                  <span className="text-[#2A2A35] hidden md:inline">·</span>
                )}
              </Fragment>
            ))}
          </nav>

          {/* Social + copyright */}
          <div className="flex items-center gap-4">
            <a
              href="https://linkedin.com/in/rjudy"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-lg border border-[rgba(255,255,255,0.08)] flex items-center justify-center text-[#4A5568] hover:text-accent hover:border-[rgba(0,212,232,0.3)] transition-all duration-200"
              aria-label="LinkedIn"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect x="2" y="9" width="4" height="12" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </a>
            <span className="font-body text-[12px] text-[#2A2A35]">
              © {new Date().getFullYear()} Ryan Judy
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
