'use client'
import { motion } from 'framer-motion'

const TECH_SKILLS = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'React.js',
  'Node.js',
  'jQuery',
  'GraphQL',
  'Bootstrap',
  'ASP.NET',
  'MySQL',
  'MongoDB',
  'Git',
  'REST APIs',
  'Responsive Design',
  'Web Performance',
  'Accessibility (WCAG)',
]

const MARKETING_SKILLS = [
  'Digital Strategy',
  'Web Governance',
  'UX Strategy',
  'Content Strategy',
  'SEO / AEO / GEO',
  'Technical SEO',
  'Paid Media',
  'Email Marketing',
  'Social Media Marketing',
  'Inbound Marketing',
  'Campaign Management',
  'Marketing Automation',
  'CRM Management',
  'A/B Testing',
  'Brand Strategy',
  'Conversion Optimization',
  'Cross-Channel Attribution',
  'Audience Segmentation',
  'Programmatic Advertising',
  'Data & Analytics',
]

const PLATFORMS = [
  { name: 'Adobe Experience Manager', cat: 'cms' },
  { name: 'Google Analytics 4', cat: 'analytics' },
  { name: 'Google Tag Manager', cat: 'analytics' },
  { name: 'LLM Optimizer (AEO/GEO)', cat: 'seo' },
  { name: 'Looker Studio', cat: 'analytics' },
  { name: 'Hotjar', cat: 'analytics' },
  { name: 'SEMrush', cat: 'seo' },
  { name: 'Ahrefs', cat: 'seo' },
  { name: 'Google Search Console', cat: 'seo' },
  { name: 'Screaming Frog', cat: 'seo' },
  { name: 'Salesforce', cat: 'crm' },
  { name: 'HubSpot', cat: 'crm' },
  { name: 'Salesforce Marketing Cloud', cat: 'martech' },
  { name: 'Marketo', cat: 'martech' },
  { name: 'Zapier', cat: 'martech' },
  { name: 'Drupal', cat: 'cms' },
  { name: 'WordPress', cat: 'cms' },
  { name: 'Google Ads', cat: 'paid' },
  { name: 'Meta Business Suite', cat: 'paid' },
  { name: 'Mailchimp', cat: 'email' },
  { name: 'Constant Contact', cat: 'email' },
  { name: 'AB Tasty', cat: 'testing' },
  { name: 'Adobe Creative Suite', cat: 'creative' },
]

const CAT_LABELS: Record<string, string> = {
  analytics: 'Analytics',
  seo: 'SEO',
  crm: 'CRM',
  martech: 'MarTech',
  cms: 'CMS',
  creative: 'Creative',
  paid: 'Paid',
  email: 'Email',
  testing: 'Testing',
}

const CAT_COLORS: Record<string, { text: string; bg: string; border: string }> = {
  analytics: { text: '#60A5FA', bg: 'rgba(59,130,246,0.08)', border: 'rgba(59,130,246,0.25)' },
  seo:       { text: '#34D399', bg: 'rgba(52,211,153,0.08)',  border: 'rgba(52,211,153,0.25)' },
  crm:       { text: '#F472B6', bg: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.25)' },
  martech:   { text: '#A78BFA', bg: 'rgba(167,139,250,0.08)', border: 'rgba(167,139,250,0.25)' },
  cms:       { text: '#00D4E8', bg: 'rgba(0,212,232,0.07)',   border: 'rgba(0,212,232,0.22)' },
  creative:  { text: '#FB923C', bg: 'rgba(251,146,60,0.08)',  border: 'rgba(251,146,60,0.25)' },
  paid:      { text: '#FBBF24', bg: 'rgba(251,191,36,0.08)',  border: 'rgba(251,191,36,0.25)' },
  email:     { text: '#818CF8', bg: 'rgba(129,140,248,0.08)', border: 'rgba(129,140,248,0.25)' },
  testing:   { text: '#2DD4BF', bg: 'rgba(45,212,191,0.08)',  border: 'rgba(45,212,191,0.25)' },
}

export default function Skills() {
  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent" />
      <div className="absolute inset-0 dot-grid opacity-[0.18]" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="eyebrow">Capabilities</span>
          <h2
            className="font-display font-extrabold text-[#E8EAFF] leading-tight tracking-tight"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
          >
            Skills &amp; Expertise
          </h2>
          <span className="divider mt-4 block" />
        </motion.div>

        {/* Top row — Marketing first, then Technical */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">

          {/* Marketing & Strategy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="card-base p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-md bg-[rgba(91,78,245,0.12)] border border-[rgba(91,78,245,0.3)] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9B91FF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 20V10" /><path d="M12 20V4" /><path d="M6 20v-6" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-[#E8EAFF] text-base">Marketing &amp; Strategy</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {MARKETING_SKILLS.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.04 + i * 0.025, duration: 0.28 }}
                  className="chip chip-marketing"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* Technical */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.08 }}
            className="card-base p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 rounded-md bg-[rgba(0,212,232,0.1)] border border-[rgba(0,212,232,0.2)] flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="16 18 22 12 16 6" />
                  <polyline points="8 6 2 12 8 18" />
                </svg>
              </div>
              <h3 className="font-display font-bold text-[#E8EAFF] text-base">Technical</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {TECH_SKILLS.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.08 + i * 0.025, duration: 0.28 }}
                  className="chip chip-tech"
                >
                  {s}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Platforms — full width */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.14 }}
          className="card-base p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-md bg-[rgba(248,113,113,0.1)] border border-[rgba(248,113,113,0.25)] flex items-center justify-center">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F87171" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="8" height="8" rx="1" />
                <rect x="14" y="2" width="8" height="8" rx="1" />
                <rect x="2" y="14" width="8" height="8" rx="1" />
                <rect x="14" y="14" width="8" height="8" rx="1" />
              </svg>
            </div>
            <h3 className="font-display font-bold text-[#E8EAFF] text-base">Platforms</h3>
            <span className="font-body text-[12px] text-[#4A5568]">CMS · CRM · MarTech · Analytics · Tools</span>
          </div>

          <div className="flex flex-wrap gap-2">
            {PLATFORMS.map((p, i) => {
              const c = CAT_COLORS[p.cat]
              return (
                <motion.div
                  key={p.name}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.16 + i * 0.025, duration: 0.28 }}
                  className="chip flex items-center gap-1.5"
                  style={{ color: c.text, background: c.bg, border: `1px solid ${c.border}` }}
                >
                  <span className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: c.text }} />
                  {p.name}
                  <span className="ml-0.5 text-[10px] opacity-55 font-display">{CAT_LABELS[p.cat]}</span>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
