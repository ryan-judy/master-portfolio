'use client'
import { motion } from 'framer-motion'

interface Project {
  title: string
  category: string
  description: string
  tech: string[]
  gradientFrom: string
  gradientTo: string
  accentHex: string
  url?: string
}

const PROJECTS: Project[] = [
  {
    title: 'Spark Street Digital',
    category: 'Digital Agency',
    description:
      'Founder of Spark Street Digital — a boutique digital agency focused on web strategy, marketing technology, and brand-driven digital experiences. Built to help businesses and organizations grow through intentional design, smart content, and performance-focused execution.',
    tech: ['Web Strategy', 'MarTech', 'Brand Identity', 'Digital Marketing', 'UX'],
    gradientFrom: '#1A0D00',
    gradientTo: '#080400',
    accentHex: '#F97316',
    url: 'https://sparkstreet.digital',
  },
  {
    title: 'Ohio State Enterprise Website',
    category: 'Higher Education',
    description:
      'Led digital strategy and web governance for The Ohio State University\'s primary web presence — one of the most-visited university websites in the country. Managed UX, coordinated cross-departmental teams, and drove measurable improvements in engagement and campaign performance.',
    tech: ['Drupal', 'AB Tasty', 'Google Ads', 'Content Strategy', 'UX Strategy', 'Web Governance', 'Google Analytics'],
    gradientFrom: '#2A0000',
    gradientTo: '#0D0006',
    accentHex: '#CC0000',
    url: 'https://osu.edu',
  },
  {
    title: 'Buckeye UX Design System',
    category: 'Higher Education · Design',
    description:
      'Led governance and strategic communications for The Ohio State University\'s enterprise UX design system. Partnered with product and design teams to drive adoption across university digital properties, ensuring consistent experience standards and brand alignment at scale.',
    tech: ['Design System Management', 'Product Marketing', 'Communications', 'Governance', 'UX Strategy'],
    gradientFrom: '#1A0000',
    gradientTo: '#080005',
    accentHex: '#BB0000',
    url: 'https://bux.osu.edu',
  },
  {
    title: 'CrossCountry Mortgage LO First',
    category: 'Fintech / Mortgage',
    description:
      'Led the strategy and end-to-end execution of redesigned branch and Loan Officer websites for CrossCountry Mortgage — one of the nation\'s leading mortgage lenders. Focused on optimization, engagement, and conversion to drive qualified borrower inquiries at the local level.',
    tech: ['UX Strategy', 'Technical Architecture', 'Content Strategy', 'Kentico', 'Salesforce', 'Web Project Management', 'Tracking and Reporting'],
    gradientFrom: '#001830',
    gradientTo: '#000810',
    accentHex: '#0055CC',
    url: 'https://crosscountrymortgage.com/pepper-pike-oh-2039/',
  },
  {
    title: 'Bread Financial — Payment Assistance Center',
    category: 'Fintech / Credit',
    description:
      'Building and optimizing the digital experience for Bread Financial cardholders in delinquency — delivering targeted content and seamless account management flows to support customers through critical financial moments. Integrating MarTech platforms to enable personalized, data-driven communication at scale.',
    tech: ['MarTech', 'Content Support', 'Product Team', 'Integration Support', 'Salesforce MC', 'API Integration', 'Data Analytics'],
    gradientFrom: '#160A35',
    gradientTo: '#060210',
    accentHex: '#7C3AED',
    url: 'https://d.comenity.net/pac/ikeaprojekt/find-account',
  },
  {
    title: 'Epic Cleantec',
    category: 'Clean Energy',
    description:
      'Implemented a custom website for Epic Cleantec using WordPress and HubSpot, with a focus on user experience, engagement, and conversion metrics. Delivered a strategically structured digital presence aligned to content and business goals.',
    tech: ['UX Strategy', 'Content Strategy', 'Technical Requirements'],
    gradientFrom: '#001A06',
    gradientTo: '#000A02',
    accentHex: '#00A650',
    url: 'https://epiccleantec.com/',
  },
]

function MockupScreen({ project }: { project: Project }) {
  return (
    <div
      className="relative h-52 overflow-hidden rounded-t-[10px]"
      style={{
        background: `linear-gradient(145deg, ${project.gradientFrom}, ${project.gradientTo})`,
      }}
    >
      {/* Browser chrome */}
      <div className="absolute top-0 left-0 right-0 h-8 flex items-center px-3 gap-1.5 bg-[rgba(0,0,0,0.35)]">
        <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
        <div className="ml-2 flex-1 h-[18px] bg-[rgba(255,255,255,0.07)] rounded-sm flex items-center px-2">
          <div className="w-3 h-1.5 rounded-full bg-[rgba(255,255,255,0.2)] mr-1.5" />
          {project.url ? (
            <span className="text-[9px] text-[rgba(255,255,255,0.3)] font-body truncate">
              {project.url.replace('https://', '')}
            </span>
          ) : (
            <div className="flex-1 h-1 bg-[rgba(255,255,255,0.12)] rounded-full" />
          )}
        </div>
      </div>

      {/* Mock page layout */}
      <div className="absolute top-10 left-4 right-4 bottom-4 flex gap-3">
        <div className="w-1/4 flex flex-col gap-2 pt-1">
          <div className="h-9 rounded-md" style={{ background: `${project.accentHex}28` }} />
          <div className="h-2.5 rounded bg-[rgba(255,255,255,0.07)]" />
          <div className="h-2.5 rounded bg-[rgba(255,255,255,0.05)]" />
          <div className="h-2.5 w-3/4 rounded bg-[rgba(255,255,255,0.04)]" />
          <div className="h-2.5 rounded bg-[rgba(255,255,255,0.04)]" />
          <div className="h-2.5 w-2/3 rounded bg-[rgba(255,255,255,0.03)]" />
        </div>
        <div className="flex-1 flex flex-col gap-2 pt-1">
          <div className="h-6 rounded" style={{ background: `${project.accentHex}40` }} />
          <div className="h-2 rounded bg-[rgba(255,255,255,0.07)]" />
          <div className="h-2 w-5/6 rounded bg-[rgba(255,255,255,0.06)]" />
          <div className="h-2 w-4/6 rounded bg-[rgba(255,255,255,0.05)]" />
          <div className="mt-2 flex gap-2">
            <div className="flex-1 h-16 rounded" style={{ background: 'rgba(255,255,255,0.04)' }} />
            <div className="flex-1 h-16 rounded" style={{ background: 'rgba(255,255,255,0.03)' }} />
          </div>
        </div>
      </div>

      {/* Glowing accent blob */}
      <div
        className="absolute top-4 right-4 w-24 h-24 rounded-full blur-2xl opacity-30"
        style={{ background: project.accentHex }}
      />

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-[#0C0D1A] to-transparent" />
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="eyebrow">Work</span>
          <h2
            className="font-display font-extrabold text-[#E8EAFF] leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
          >
            Featured Projects
          </h2>
          <span className="divider mt-4 block" />
          <p className="font-body text-[15px] text-[#8892A4] mt-6 max-w-xl">
            A selection of web and digital marketing projects spanning higher education, fintech,
            financial services, real estate, and clean energy.
          </p>
        </motion.div>

        {/* ── Currently Building — featured card ───────────── */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 rounded-xl overflow-hidden border border-[rgba(56,189,248,0.18)] bg-gradient-to-br from-[#060E1A] via-[#060C18] to-[#050810] group relative"
          style={{ boxShadow: '0 0 60px rgba(56,189,248,0.06), inset 0 0 80px rgba(56,189,248,0.03)' }}
        >
          {/* Glow orbs */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-[100px] bg-[rgba(56,189,248,0.08)] pointer-events-none" />
          <div className="absolute bottom-0 left-20 w-60 h-60 rounded-full blur-[80px] bg-[rgba(99,179,248,0.05)] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 p-8 md:p-10">
            {/* Logo */}
            <div className="shrink-0">
              <img
                src="/currents-logo.png"
                alt="Currents app logo"
                className="w-20 h-20 rounded-2xl object-cover"
                style={{ boxShadow: '0 0 30px rgba(56,189,248,0.35)' }}
              />
            </div>

            {/* Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <span className="font-display font-bold text-[10px] tracking-[0.25em] uppercase px-2.5 py-1 rounded-full border border-[rgba(56,189,248,0.35)] text-[#38BDF8] bg-[rgba(56,189,248,0.08)]">
                  ● In Development
                </span>
                <span className="font-display font-semibold text-[10px] tracking-[0.2em] uppercase text-[#4A5568]">
                  App
                </span>
              </div>
              <h3 className="font-display font-extrabold text-[#E8EAFF] text-2xl md:text-3xl tracking-tight mb-1">
                Currents
              </h3>
              <p className="font-display font-semibold text-[#38BDF8] text-sm tracking-wide mb-3">
                Universal Media Tracker
              </p>
              <p className="font-body text-[14px] text-[#8892A4] leading-relaxed max-w-xl">
                A personal app project for tracking everything you&apos;re watching, reading, listening to, and playing — all in one place. Building it to scratch my own itch and sharpen my full-stack development skills outside of marketing.
              </p>
            </div>

            {/* CTA */}
            <div className="shrink-0">
              <a
                href="https://solstice-gamma.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-display font-bold text-[12px] uppercase tracking-[0.08em] px-5 py-3 rounded-lg border border-[rgba(56,189,248,0.3)] text-[#38BDF8] bg-[rgba(56,189,248,0.07)] transition-all duration-200 hover:border-[rgba(56,189,248,0.65)] hover:bg-[rgba(56,189,248,0.13)] hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]"
              >
                Preview App
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" aria-hidden="true">
                  <path d="M2 6.5h9M6.5 2l4.5 4.5L6.5 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="card-base overflow-hidden flex flex-col group"
            >
              <MockupScreen project={project} />

              <div className="p-6 flex flex-col flex-1">
                {/* Category tag */}
                <span
                  className="inline-block font-display font-semibold text-[10px] tracking-[0.22em] uppercase mb-3 px-2.5 py-1 rounded-full border"
                  style={{
                    color: project.accentHex,
                    borderColor: `${project.accentHex}35`,
                    background: `${project.accentHex}10`,
                  }}
                >
                  {project.category}
                </span>

                <h3 className="font-display font-bold text-[#E8EAFF] text-[17px] leading-snug mb-3">
                  {project.title}
                </h3>

                <p className="font-body text-[13px] text-[#8892A4] leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech chips */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {project.tech.map((t) => (
                    <span key={t} className="chip chip-sm chip-tech">
                      {t}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 font-display font-semibold text-[12px] uppercase tracking-[0.08em] transition-all duration-200 group-hover:text-accent text-[#4A5568]"
                  >
                    View Project
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      <path
                        d="M2 7h10M7 2l5 5-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                ) : (
                  <span className="flex items-center gap-2 font-display font-semibold text-[12px] uppercase tracking-[0.08em] text-[#2A2A35]">
                    Coming Soon
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
