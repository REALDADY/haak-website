'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import {
  budgetOptions,
  companyInfo,
  services as serviceCatalog,
  whatsappLinks,
} from '@/lib/site-data'

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? ''
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? ''
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? ''

const isEmailJsConfigured =
  EMAILJS_SERVICE_ID &&
  EMAILJS_TEMPLATE_ID &&
  EMAILJS_PUBLIC_KEY &&
  !EMAILJS_SERVICE_ID.startsWith('YOUR_') &&
  !EMAILJS_TEMPLATE_ID.startsWith('YOUR_') &&
  !EMAILJS_PUBLIC_KEY.startsWith('YOUR_')

type SubmitState = 'idle' | 'loading' | 'success' | 'error'
type SuccessMode = 'emailjs' | 'mailto' | null

const serviceOptions = serviceCatalog.map((service) => service.title)

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    whatsapp: '',
    service: '',
    budget: '',
    message: '',
  })
  const [status, setStatus] = useState<SubmitState>('idle')
  const [successMode, setSuccessMode] = useState<SuccessMode>(null)
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleMailtoFallback = () => {
    const subject = encodeURIComponent(
      `New HAAK enquiry${formData.service ? ` - ${formData.service}` : ''}`
    )
    const body = encodeURIComponent(
      [
        `Name: ${formData.from_name}`,
        `Email: ${formData.from_email}`,
        `WhatsApp: ${formData.whatsapp || 'Not provided'}`,
        `Service: ${formData.service || 'Not selected'}`,
        `Budget: ${formData.budget || 'Not selected'}`,
        '',
        'Project details:',
        formData.message || 'No details provided yet.',
      ].join('\n')
    )

    window.location.href = `mailto:${companyInfo.email}?subject=${subject}&body=${body}`
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')

    try {
      if (isEmailJsConfigured && formRef.current) {
        await emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, formRef.current, {
          publicKey: EMAILJS_PUBLIC_KEY,
        })
        setSuccessMode('emailjs')
      } else {
        handleMailtoFallback()
        setSuccessMode('mailto')
      }

      setStatus('success')
    } catch (err: unknown) {
      console.error('EmailJS error:', err)
      setStatus('error')
      setErrorMsg('We could not send the form right now. Please use email or WhatsApp below.')
    }
  }

  if (status === 'success') {
    return (
      <div className="rounded-[24px] border border-[var(--line)] bg-[var(--bg-soft)] p-8 text-center sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-[var(--brand-primary-hover)] text-white">
          <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 12.75l4.5 4.5 9-9" />
          </svg>
        </div>
        <h3 className="mt-5 font-display text-2xl font-extrabold text-[var(--text-primary)]">
          {successMode === 'mailto' ? 'Email draft opened' : 'Message sent'}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-[var(--text-soft)]">
          {successMode === 'mailto'
            ? 'Your email app should open with your project details filled in. If nothing opens, use the direct contact options below.'
            : "Thanks for reaching out. We'll review your enquiry and come back with next steps as soon as possible."}
        </p>
        <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a href={`mailto:${companyInfo.email}`} className="button-secondary">
            Email us directly
          </a>
          <a
            href={whatsappLinks.default}
            target="_blank"
            rel="noopener noreferrer"
            className="button-secondary"
          >
            WhatsApp the team
          </a>
        </div>
      </div>
    )
  }

  const inputClass =
    'w-full rounded-2xl border border-[var(--line)] bg-white px-4 py-3.5 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--brand-primary)] placeholder:text-[var(--text-faint)]'

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
      {!isEmailJsConfigured && (
        <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-4 text-sm leading-relaxed text-[var(--text-soft)]">
          The form will open a prepared email draft. You can also contact HAAK directly by email or WhatsApp.
        </div>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="from_name" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-soft)]">
            Full name
          </label>
          <input
            id="from_name"
            type="text"
            name="from_name"
            required
            placeholder="Your name"
            value={formData.from_name}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="from_email" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-soft)]">
            Email address
          </label>
          <input
            id="from_email"
            type="email"
            name="from_email"
            required
            placeholder="you@company.com"
            value={formData.from_email}
            onChange={handleChange}
            className={inputClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="whatsapp" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-soft)]">
          WhatsApp number
        </label>
        <input
          id="whatsapp"
          type="tel"
          name="whatsapp"
          placeholder="+971 50 XXX XXXX"
          value={formData.whatsapp}
          onChange={handleChange}
          className={inputClass}
        />
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="service" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-soft)]">
            Project type
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="">Select a service</option>
            {serviceOptions.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-soft)]">
            What do you need?
          </label>
          <select
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className={`${inputClass} appearance-none cursor-pointer`}
          >
            <option value="">Select the closest fit</option>
            {budgetOptions.map((budget) => (
              <option key={budget} value={budget}>
                {budget}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-bold uppercase tracking-[0.14em] text-[var(--text-soft)]">
          Project details
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          placeholder="Tell us what you want to build or improve, what is not working today, and any useful timeline or references."
          value={formData.message}
          onChange={handleChange}
          className={`${inputClass} resize-none`}
        />
      </div>

      {status === 'error' && (
        <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'loading'}
        className="button-primary w-full disabled:cursor-not-allowed disabled:opacity-70"
      >
        {status === 'loading' ? (
          <>
            <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending your details
          </>
        ) : (
          <>
            {isEmailJsConfigured ? 'Send enquiry' : 'Open email draft'}
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
            </svg>
          </>
        )}
      </button>

      <p className="text-center text-xs leading-relaxed text-[var(--text-faint)]">
        Prefer a faster route?{' '}
        <a
          href={whatsappLinks.default}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--brand-primary-hover)] underline underline-offset-4 transition hover:text-[var(--brand-secondary)]"
        >
          Message us on WhatsApp
        </a>{' '}
        or email{' '}
        <a
          href={`mailto:${companyInfo.email}`}
          className="text-[var(--brand-primary-hover)] underline underline-offset-4 transition hover:text-[var(--brand-secondary)]"
        >
          {companyInfo.email}
        </a>
        .
      </p>
    </form>
  )
}
