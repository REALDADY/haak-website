'use client'

import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { AnimatePresence, m } from 'framer-motion'
import {
  budgetOptions,
  companyInfo,
  services as serviceCatalog,
  whatsappLinks,
} from '@/lib/site-data'
import { duration, ease } from '@/lib/motion'
import { ArrowRightIcon, MailIcon, WhatsAppIcon } from '@/components/icons'

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
type FieldName = 'from_name' | 'from_email' | 'whatsapp' | 'service' | 'budget' | 'message'
type Errors = Partial<Record<FieldName, string>>

const serviceOptions = serviceCatalog.map((service) => service.title)
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(data: Record<FieldName, string>): Errors {
  const errors: Errors = {}
  if (!data.from_name.trim()) errors.from_name = 'Please enter your name.'
  if (!data.from_email.trim()) errors.from_email = 'Please enter your email address.'
  else if (!emailPattern.test(data.from_email.trim())) errors.from_email = 'Please enter a valid email address.'
  return errors
}

function ErrorIcon() {
  return (
    <svg className="h-3.5 w-3.5 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m0 3.75h.008M21.75 12a9.75 9.75 0 11-19.5 0 9.75 9.75 0 0119.5 0z" />
    </svg>
  )
}

function FieldError({ id, message }: { id: string; message?: string }) {
  return (
    <AnimatePresence initial={false}>
      {message && (
        <m.p
          id={id}
          className="field-error"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -4, transition: { duration: duration.instant } }}
          transition={{ duration: duration.fast, ease: ease.out }}
        >
          <ErrorIcon />
          {message}
        </m.p>
      )}
    </AnimatePresence>
  )
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<Record<FieldName, string>>({
    from_name: '',
    from_email: '',
    whatsapp: '',
    service: '',
    budget: '',
    message: '',
  })
  const [touched, setTouched] = useState<Partial<Record<FieldName, boolean>>>({})
  const [status, setStatus] = useState<SubmitState>('idle')
  const [successMode, setSuccessMode] = useState<SuccessMode>(null)
  const [errorMsg, setErrorMsg] = useState('')

  const errors = validate(formData)
  const visibleError = (name: FieldName) => (touched[name] ? errors[name] : undefined)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setTouched((prev) => ({ ...prev, [e.target.name]: true }))
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

    const currentErrors = validate(formData)
    if (Object.keys(currentErrors).length > 0) {
      setTouched({ from_name: true, from_email: true })
      const firstInvalid = (Object.keys(currentErrors) as FieldName[])[0]
      formRef.current?.querySelector<HTMLElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }

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
      setErrorMsg('We could not send the form right now. Please try again, or use email or WhatsApp below.')
    }
  }

  const fieldProps = (name: FieldName) => ({
    id: name,
    name,
    value: formData[name],
    onChange: handleChange,
    onBlur: handleBlur,
    'aria-invalid': visibleError(name) ? true : undefined,
    'aria-describedby': visibleError(name) ? `${name}-error` : undefined,
  })

  return (
    <AnimatePresence mode="wait" initial={false}>
      {status === 'success' ? (
        <m.div
          key="success"
          role="status"
          tabIndex={-1}
          ref={(node: HTMLDivElement | null) => node?.focus({ preventScroll: true })}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: duration.slow, ease: ease.expo }}
          className="rounded-[var(--radius-lg)] border border-[var(--line)] bg-[var(--bg-soft)] px-6 py-12 text-center outline-none sm:px-10"
        >
          <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[var(--brand-primary)] text-[var(--brand-secondary)] shadow-[0_0_0_8px_rgba(0,180,216,0.15)]">
            <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.4} aria-hidden="true">
              <m.path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 12.75l4.5 4.5 9-9"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: duration.slow, ease: ease.out, delay: 0.2 }}
              />
            </svg>
          </div>
          <h3 className="mt-6 font-display text-2xl font-bold tracking-[-0.02em] text-[var(--text-primary)]">
            {successMode === 'mailto' ? 'Email draft opened' : 'Message sent'}
          </h3>
          <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-[var(--text-soft)]">
            {successMode === 'mailto'
              ? 'Your email app should open with your project details filled in. If nothing opens, use the direct contact options below.'
              : "Thanks for reaching out. We'll review your enquiry and come back with next steps as soon as possible."}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a href={`mailto:${companyInfo.email}`} className="btn-secondary">
              <MailIcon className="h-4 w-4" />
              Email us directly
            </a>
            <a href={whatsappLinks.default} target="_blank" rel="noopener noreferrer" className="btn-secondary">
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp the team
            </a>
          </div>
        </m.div>
      ) : (
        <m.form
          key="form"
          ref={formRef}
          onSubmit={handleSubmit}
          noValidate
          exit={{ opacity: 0, y: -8, transition: { duration: duration.fast } }}
          className="space-y-6"
        >
          {!isEmailJsConfigured && (
            <div className="rounded-2xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-4 text-sm leading-relaxed text-[var(--text-soft)]">
              The form will open a prepared email draft. You can also contact HAAK directly by email or WhatsApp.
            </div>
          )}

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="from_name" className="field-label">
                Full name <span className="text-[var(--brand-primary-hover)]" aria-hidden="true">*</span>
              </label>
              <input
                type="text"
                required
                aria-required="true"
                autoComplete="name"
                placeholder="Your name"
                className="field-input"
                {...fieldProps('from_name')}
              />
              <FieldError id="from_name-error" message={visibleError('from_name')} />
            </div>
            <div>
              <label htmlFor="from_email" className="field-label">
                Email address <span className="text-[var(--brand-primary-hover)]" aria-hidden="true">*</span>
              </label>
              <input
                type="email"
                required
                aria-required="true"
                autoComplete="email"
                inputMode="email"
                placeholder="you@company.com"
                className="field-input"
                {...fieldProps('from_email')}
              />
              <FieldError id="from_email-error" message={visibleError('from_email')} />
            </div>
          </div>

          <div>
            <label htmlFor="whatsapp" className="field-label">
              WhatsApp number <span className="font-medium text-[var(--text-faint)]">(optional)</span>
            </label>
            <input
              type="tel"
              autoComplete="tel"
              inputMode="tel"
              placeholder="+971 50 XXX XXXX"
              className="field-input"
              {...fieldProps('whatsapp')}
            />
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="service" className="field-label">
                Project type
              </label>
              <select className="field-input field-select" {...fieldProps('service')}>
                <option value="">Select a service</option>
                {serviceOptions.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="budget" className="field-label">
                What do you need?
              </label>
              <select className="field-input field-select" {...fieldProps('budget')}>
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
            <label htmlFor="message" className="field-label">
              Project details
            </label>
            <textarea
              rows={6}
              placeholder="Tell us what you want to build or improve, what is not working today, and any useful timeline or references."
              className="field-input resize-y"
              {...fieldProps('message')}
            />
          </div>

          <AnimatePresence initial={false}>
            {status === 'error' && (
              <m.div
                role="alert"
                initial={{ opacity: 0, y: -6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: duration.fast, ease: ease.out }}
                className="flex items-start gap-3 rounded-2xl border border-red-200 bg-red-50 px-4 py-4 text-sm text-red-800"
              >
                <span className="mt-0.5 text-red-700">
                  <ErrorIcon />
                </span>
                {errorMsg}
              </m.div>
            )}
          </AnimatePresence>

          <button
            type="submit"
            disabled={status === 'loading'}
            aria-busy={status === 'loading'}
            className="btn-primary btn-lg w-full disabled:cursor-wait disabled:opacity-80"
          >
            <AnimatePresence mode="wait" initial={false}>
              {status === 'loading' ? (
                <m.span
                  key="loading"
                  className="inline-flex items-center gap-2.5"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: duration.fast }}
                >
                  <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending your details
                </m.span>
              ) : (
                <m.span
                  key="idle"
                  className="inline-flex items-center gap-2.5"
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: duration.fast }}
                >
                  {status === 'error' ? 'Try again' : isEmailJsConfigured ? 'Send enquiry' : 'Open email draft'}
                  <ArrowRightIcon />
                </m.span>
              )}
            </AnimatePresence>
          </button>

          <p className="text-center text-xs leading-relaxed text-[var(--text-faint)]">
            Prefer a faster route?{' '}
            <a
              href={whatsappLinks.default}
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-[var(--brand-primary-hover)] underline underline-offset-4 transition-colors hover:text-[var(--brand-secondary)]"
            >
              Message us on WhatsApp
            </a>{' '}
            or email{' '}
            <a
              href={`mailto:${companyInfo.email}`}
              className="font-semibold text-[var(--brand-primary-hover)] underline underline-offset-4 transition-colors hover:text-[var(--brand-secondary)]"
            >
              {companyInfo.email}
            </a>
            .
          </p>
        </m.form>
      )}
    </AnimatePresence>
  )
}
