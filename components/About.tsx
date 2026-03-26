'use client'
import { motion } from 'framer-motion'

const STATS = [
  { value: '10+', label: 'Years in Digital' },
  { value: '5', label: 'Industries Served' },
  { value: 'Agency · Inhouse · Enterprise', label: 'Experience' },
  { value: 'Strategy + Code', label: 'Background' },
]

export default function About() {
  return (
    <section id="about" className="py-28 relative overflow-hidden">
      {/* Subtle top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent" />

      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="eyebrow">About</span>
            <h2 className="font-display font-extrabold text-[#E8EAFF] leading-tight tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}>
              Strategy-first. <br />
              <span className="text-accent">Technology-enabled.</span>
            </h2>
            <span className="divider mb-12 block" />

            <div className="space-y-4 font-body text-[15px] text-[#8892A4] leading-relaxed">
              <p>
                I&apos;m Ryan Judy — a digital strategist and marketing technologist with over a decade of
                experience bridging the gap between creative vision and measurable business outcomes. My
                career spans higher education, financial services, clean energy, real estate, and agency
                work.
              </p>
              <p>
                At The Ohio State University, I managed digital strategy and web governance for one of the
                nation&apos;s most-visited university websites. Today at Bread Financial, I&apos;m building
                marketing technology platform integrations that power smarter, more connected customer
                journeys.
              </p>
              <p>
                I hold a B.S. in Journalism (Strategic Communication) from Ohio University and completed
                a Coding Bootcamp at Case Western Reserve University — giving me a rare combination of
                storytelling instinct and technical execution.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="https://linkedin.com/in/rjudy"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !text-[12px] !py-2.5 !px-5"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
                  <circle cx="4" cy="4" r="2" />
                </svg>
                LinkedIn Profile
              </a>
              <a href="#contact" className="btn-secondary !text-[12px] !py-2.5 !px-5">
                Work Together
              </a>
            </div>
          </motion.div>

          {/* Right — stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.08 }}
                className="card-base p-7 group"
              >
                <div
                  className="font-display font-extrabold leading-tight tracking-tight text-accent mb-2 group-hover:text-[#33DCED] transition-colors duration-200"
                  style={{ fontSize: stat.value.length > 6 ? 'clamp(0.85rem, 1.8vw, 1.1rem)' : '2.6rem' }}
                >
                  {stat.value}
                </div>
                <div className="font-body text-sm text-[#8892A4] leading-snug">{stat.label}</div>
              </motion.div>
            ))}

            {/* Education card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.52 }}
              className="card-base p-7 col-span-2"
            >
              <div className="eyebrow !mb-3">Education</div>
              <div className="space-y-3">
                <div>
                  <p className="font-display font-semibold text-[#E8EAFF] text-sm">
                    Coding Bootcamp — Web Development
                  </p>
                  <p className="font-body text-[13px] text-[#8892A4]">
                    Case Western Reserve University · 2017
                  </p>
                </div>
                <div className="w-full h-px bg-[rgba(255,255,255,0.06)]" />
                <div>
                  <p className="font-display font-semibold text-[#E8EAFF] text-sm">
                    B.S. Journalism — Strategic Communication
                  </p>
                  <p className="font-body text-[13px] text-[#8892A4]">
                    Ohio University · 2010–2014 · Political Communication Certificate
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
