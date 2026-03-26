'use client'
import { motion } from 'framer-motion'

const JOBS = [
  {
    role: 'Marketing Technology Platforms Specialist',
    company: 'Bread Financial',
    period: '2025 — Present',
    tag: 'Current',
    tagColor: 'text-accent bg-[rgba(0,212,232,0.1)] border-[rgba(0,212,232,0.25)]',
    companyColor: '#A78BFA',
    description:
      'Developing and optimizing marketing technology platform integrations to streamline customer data flow, campaign automation, and cross-channel attribution for a leading consumer finance company. Working at the intersection of data, engineering, and marketing to build infrastructure that drives smarter, more personalized customer journeys.',
    skills: ['MarTech', 'Adobe Experience Cloud', 'GraphQL', 'Adobe Experience Manager', 'Web Operations'],
  },
  {
    role: 'Web Channel Manager',
    company: 'The Ohio State University',
    period: '2022 — 2025',
    tag: '3 yrs',
    tagColor: 'text-[#FF9999] bg-[rgba(186,12,47,0.1)] border-[rgba(186,12,47,0.3)]',
    companyColor: '#FF8A80',
    description:
      'Managed digital strategy and user experience for osu.edu — one of the most-visited university websites in the country. Led web governance across cross-departmental teams, drove digital campaign strategy for the web channel, and supported university-wide podcasting technology platforms.',
    skills: ['Web Governance', 'Digital Strategy', 'Design System Management', 'Campaign Management', 'Paid Search', 'Podcasting Support', 'Web Optimization', 'Content Strategy'],
  },
  {
    role: 'Web and UX Strategist',
    company: 'Antenna Group',
    period: '2021 — 2022',
    tag: '1 yr',
    tagColor: 'text-[#5EEAD4] bg-[rgba(0,180,160,0.08)] border-[rgba(0,180,160,0.25)]',
    companyColor: '#5EEAD4',
    description:
      'Created user-focused website strategies for a portfolio of clients in the energy, mobility, and sustainability sectors. Implemented custom websites using WordPress and HubSpot, optimizing for engagement and conversion metrics through strong information architecture and content strategy.',
    skills: ['UX Strategy', 'Content Strategy', 'Information Architecture', 'Analytics', 'Web Project Management', 'HubSpot'],
  },
  {
    role: 'Sr. Digital Marketing Manager',
    company: 'CrossCountry Mortgage, LLC',
    period: '2018 — 2021',
    tag: '3 yrs',
    tagColor: 'text-[#93C5FD] bg-[rgba(59,130,246,0.1)] border-[rgba(59,130,246,0.25)]',
    companyColor: '#93C5FD',
    description:
      'Led digital marketing strategy and execution for one of the nation\'s top mortgage lenders. Managed integrated campaigns across PPC, SEO, social media, and email — building a digital infrastructure that drove significant qualified lead volume and brand growth.',
    skills: ['SEO/SEM', 'Digital Strategy', 'Web Management', 'Integrations', 'Salesforce', 'Analytics and Tracking', 'Lead Gen'],
  },
  {
    role: 'Marketing Director',
    company: 'The Young Team – Keller Williams',
    period: '2014 — 2018',
    tag: '4 yrs',
    tagColor: 'text-[#FCD34D] bg-[rgba(234,179,8,0.08)] border-[rgba(234,179,8,0.25)]',
    companyColor: '#FCD34D',
    description:
      'Directed all aspects of digital and traditional marketing for a high-volume Keller Williams real estate team. Developed the team\'s web presence, managed social media, and built campaign infrastructure that measurably expanded digital reach, brand recognition, and inbound lead generation.',
    skills: ['Digital Marketing', 'Website Development and Management', 'Social Media', 'WordPress', 'Brand Strategy', 'Digital Operations'],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent" />

      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="eyebrow">Career</span>
          <h2
            className="font-display font-extrabold text-[#E8EAFF] leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
          >
            Work Experience
          </h2>
          <span className="divider mt-4 block" />
        </motion.div>

        {/* Timeline */}
        <div className="relative pl-8 md:pl-12">
          {/* Vertical line */}
          <div className="timeline-line" />

          <div className="space-y-10">
            {JOBS.map((job, i) => (
              <motion.div
                key={job.company}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="timeline-dot" />

                <div className="card-base p-6 md:p-8 group">
                  {/* Header row */}
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
                    <div>
                      <h3 className="font-display font-bold text-[#E8EAFF] text-lg md:text-xl leading-tight mb-1">
                        {job.role}
                      </h3>
                      <p
                        className="font-display font-semibold text-sm"
                        style={{ color: job.companyColor }}
                      >
                        {job.company}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 shrink-0">
                      {job.tag === 'Current' && (
                        <span className={`chip chip-sm font-display font-bold border ${job.tagColor}`}>
                          ● Current
                        </span>
                      )}
                      <span className="font-body text-[13px] text-[#4A5568]">{job.period}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="font-body text-[14px] text-[#8892A4] leading-relaxed mb-5">
                    {job.description}
                  </p>

                  {/* Skill chips */}
                  <div className="flex flex-wrap gap-2">
                    {job.skills.map((s) => (
                      <span key={s} className="chip chip-tech chip-sm">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
