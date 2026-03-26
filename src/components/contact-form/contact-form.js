import React from "react"
import { string } from "../../types"

const ContactForm = ({ formspreeEndpoint }) => {
  return (
    <>
      <div className="section-heading">
        <h2
          id="contact"
          className="font-header font-bold text-front text-xl tracking-wide"
        >
          <span className="font-mono font-normal text-lead text-sm mr-1.5" style={{ opacity: 0.45 }}>//</span>Contact
        </h2>
        <div className="section-heading-bar" />
      </div>

      <form action={formspreeEndpoint} className="pb-12" method="post">
        <div className="flex flex-wrap gap-3 mb-0">
          <div className="w-full lg:flex-1">
            <input
              aria-label="Name"
              autoComplete="name"
              className="form-input"
              name="name"
              placeholder="Your name"
              required
              type="text"
            />
          </div>
          <div className="w-full lg:flex-1">
            <input
              aria-label="E-mail"
              autoComplete="email"
              className="form-input"
              name="email"
              placeholder="Email address"
              required
              type="email"
            />
          </div>
        </div>
        <textarea
          aria-label="Message"
          className="form-input resize-none"
          name="message"
          placeholder="Your message"
          required
          rows="6"
        />
        <button
          type="submit"
          className="font-header font-semibold px-8 py-3 bg-lead text-lead-text rounded-lg hover:opacity-80 transition-opacity duration-150 text-sm"
        >
          Send message
        </button>
      </form>
    </>
  )
}

ContactForm.propTypes = {
  formspreeEndpoint: string.isRequired,
}

export default ContactForm
