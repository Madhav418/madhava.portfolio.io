import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { CheckCircle2, Loader2, Send, TriangleAlert } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { siteConfig } from '@/data/site'
import { cn } from '@/lib/utils'

// Set VITE_FORM_ENDPOINT in a .env file to a Formspree-compatible endpoint
// (e.g. https://formspree.io/f/your-id) to make this form actually deliver mail.
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>
type Status = 'idle' | 'submitting' | 'success' | 'error' | 'draft'

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(data: { name: string; email: string; message: string }): FieldErrors {
  const errors: FieldErrors = {}
  if (!data.name.trim()) errors.name = 'Please enter your name.'
  if (!data.email.trim()) errors.email = 'Please enter your email.'
  else if (!EMAIL_RE.test(data.email)) errors.email = 'Please enter a valid email address.'
  if (!data.message.trim()) errors.message = 'Please enter a message.'
  else if (data.message.trim().length < 10) errors.message = 'Message should be at least 10 characters.'
  return errors
}

const inputClass =
  'w-full rounded-xl border border-border bg-surface/40 px-4 py-3 text-foreground placeholder:text-muted-foreground/60 transition-colors focus:border-accent focus:outline-none'

export function ContactForm() {
  const [values, setValues] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>('idle')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fieldErrors = validate(values)
    setErrors(fieldErrors)
    if (Object.keys(fieldErrors).length > 0) return

    if (!FORM_ENDPOINT) {
      const subject = encodeURIComponent(`Portfolio enquiry from ${values.name.trim()}`)
      const body = encodeURIComponent(`${values.message.trim()}\n\nFrom: ${values.name.trim()}\nReply to: ${values.email.trim()}`)
      window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`
      setStatus('draft')
      return
    }

    setStatus('submitting')
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(values),
      })
      if (!res.ok) throw new Error('Request failed')
      setStatus('success')
      setValues({ name: '', email: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center gap-3 py-10 text-center"
        role="status"
      >
        <CheckCircle2 size={40} className="text-success" aria-hidden="true" />
        <p className="font-heading text-lg font-semibold text-foreground">Message sent</p>
        <p className="max-w-sm text-sm text-muted-foreground">
          Thanks for reaching out! I'll get back to you within a day or two.
        </p>
        <Button variant="glass" onClick={() => setStatus('idle')} className="mt-2">
          Send another message
        </Button>
      </motion.div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="contact-form space-y-5">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm font-medium text-foreground">
          <span className="field-number" aria-hidden="true">01</span> What’s your name?
        </label>
        <input
          id="name"
          type="text"
          autoComplete="name"
          placeholder="Your name"
          required
          value={values.name}
          onChange={(e) => setValues((v) => ({ ...v, name: e.target.value }))}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? 'name-error' : undefined}
          className={cn(inputClass, errors.name && 'border-destructive')}
        />
        {errors.name && (
          <p id="name-error" role="alert" className="mt-1.5 text-sm text-destructive">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="email" className="mb-2 block text-sm font-medium text-foreground">
          <span className="field-number" aria-hidden="true">02</span> Where can I reach you?
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
          placeholder="you@example.com"
          required
          value={values.email}
          onChange={(e) => setValues((v) => ({ ...v, email: e.target.value }))}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? 'email-error' : undefined}
          className={cn(inputClass, errors.email && 'border-destructive')}
        />
        {errors.email && (
          <p id="email-error" role="alert" className="mt-1.5 text-sm text-destructive">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-foreground">
          <span className="field-number" aria-hidden="true">03</span> What are you thinking about?
        </label>
        <textarea
          id="message"
          rows={3}
          placeholder="A project, an opportunity, or just a hello..."
          required
          value={values.message}
          onChange={(e) => setValues((v) => ({ ...v, message: e.target.value }))}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={cn(inputClass, 'resize-none', errors.message && 'border-destructive')}
        />
        {errors.message && (
          <p id="message-error" role="alert" className="mt-1.5 text-sm text-destructive">
            {errors.message}
          </p>
        )}
      </div>

      {status === 'error' && (
        <div
          role="alert"
          className="flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
        >
          <TriangleAlert size={16} className="mt-0.5 shrink-0" aria-hidden="true" />
          <span>
            {FORM_ENDPOINT
              ? 'Something went wrong sending your message. Please try again, or '
              : "This form isn't connected to an email service yet. Please "}
            <a href={`mailto:${siteConfig.email}`} className="font-medium underline">
              email me directly
            </a>
            {FORM_ENDPOINT ? '.' : ' instead.'}
          </span>
        </div>
      )}

      {status === 'draft' && <p role="status" className="contact-form-note">Your draft is ready in your email app. Review it and press send there. If the app didn’t open, email {siteConfig.email} directly.</p>}
      {!FORM_ENDPOINT && status !== 'draft' && <p className="contact-form-note">Opens a draft in your email app. You review and send it.</p>}
      <Button type="submit" variant="primary" disabled={status === 'submitting'} className="contact-send">
        {status === 'submitting' ? (
          <>
            <Loader2 size={16} className="animate-spin" aria-hidden="true" />
            Sending…
          </>
        ) : (
          <>
            {FORM_ENDPOINT ? 'Send message' : 'Let’s start a conversation'}
            <Send size={16} aria-hidden="true" />
          </>
        )}
      </Button>
    </form>
  )
}
