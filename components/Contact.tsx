'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'Something went wrong.')
      setSubmitted(true)
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Something went wrong.')
    } finally {
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="py-28 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.06)] to-transparent" />

      {/* Accent orb */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full blur-[120px] bg-[rgba(0,212,232,0.04)] pointer-events-none" />

      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-14 items-start">
          {/* Left col — info */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-2"
          >
            <span className="eyebrow">Contact</span>
            <h2
              className="font-display font-extrabold text-[#E8EAFF] leading-tight tracking-tight mb-4"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3rem)' }}
            >
              Let&apos;s work
              <br />
              <span className="text-accent">together.</span>
            </h2>
            <span className="divider mb-8 block" />

            <p className="font-body text-[15px] text-[#8892A4] leading-relaxed mb-10">
              Whether you&apos;re looking to build a digital strategy, improve your web presence,
              or integrate marketing technology — I&apos;d love to connect.
            </p>

            <div className="space-y-5">
              {/* Location */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,212,232,0.07)] border border-[rgba(0,212,232,0.15)] flex items-center justify-center shrink-0">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#00D4E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-[#E8EAFF]">Location</p>
                  <p className="font-body text-sm text-[#8892A4]">Columbus, Ohio</p>
                </div>
              </div>

              {/* LinkedIn */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,212,232,0.07)] border border-[rgba(0,212,232,0.15)] flex items-center justify-center shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="#00D4E8">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect x="2" y="9" width="4" height="12" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-[#E8EAFF]">LinkedIn</p>
                  <a
                    href="https://linkedin.com/in/rjudy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-body text-sm text-[#8892A4] hover:text-accent transition-colors"
                  >
                    linkedin.com/in/rjudy
                  </a>
                </div>
              </div>

              {/* Availability */}
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-[rgba(0,212,232,0.07)] border border-[rgba(0,212,232,0.15)] flex items-center justify-center shrink-0">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#00D4E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="font-display font-semibold text-sm text-[#E8EAFF]">Availability</p>
                  <p className="font-body text-sm text-[#8892A4]">Open to freelance</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right col — form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-3"
          >
            <div className="card-base p-8 md:p-10">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 rounded-full bg-[rgba(0,212,232,0.1)] border border-[rgba(0,212,232,0.3)] flex items-center justify-center mx-auto mb-5">
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#00D4E8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </div>
                  <h3 className="font-display font-bold text-[#E8EAFF] text-xl mb-2">Message Sent!</h3>
                  <p className="font-body text-[#8892A4] text-sm">
                    Thanks for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block font-display font-semibold text-[11px] tracking-[0.14em] uppercase text-[#8892A4] mb-2">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        className="form-input"
                      />
                    </div>
                    <div>
                      <label className="block font-display font-semibold text-[11px] tracking-[0.14em] uppercase text-[#8892A4] mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="your@email.com"
                        className="form-input"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-display font-semibold text-[11px] tracking-[0.14em] uppercase text-[#8892A4] mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell me about your project or opportunity..."
                      className="form-input resize-none"
                    />
                  </div>
                  {error && (
                    <p className="font-body text-[13px] text-red-400">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="btn-primary w-full justify-center !text-[13px]"
                  >
                    {loading ? (
                      <>
                        <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeOpacity="0.3" />
                          <path d="M12 2a10 10 0 0 1 10 10" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                        Sending…
                      </>
                    ) : (
                      <>
                        Send Message
                        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" aria-hidden="true">
                          <path d="M2 7.5h11M8 3l4.5 4.5L8 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
