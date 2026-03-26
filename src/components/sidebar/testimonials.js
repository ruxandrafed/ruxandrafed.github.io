import React, { useState } from 'react'
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { arrayOf, shape, TestimonialType } from "../../types"
import "./testimonials.css"

const Testimonials = ({ testimonials }) => {
  const [current, setCurrent] = useState(0)

  if (!testimonials || testimonials.length === 0) return null

  const prev = () => setCurrent(i => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setCurrent(i => (i + 1) % testimonials.length)

  const t = testimonials[current]

  return (
    <div className="mt-6">
      <Testimonial
        avatarAlt={`Avatar of ${t.name}`}
        avatarUrl={t.avatarUrl}
        company={t.company}
        linkUrl={t.linkUrl}
        name={t.name}
        quote={t.quote}
      />
      <div className="flex items-center justify-between pr-2 mt-2 mb-1">
        <button
          onClick={prev}
          aria-label="Previous recommendation"
          className="font-header font-semibold text-xs px-3 py-1 border border-line rounded hover:opacity-60 transition-opacity duration-150"
        >
          ←
        </button>
        <span className="font-text text-xs opacity-50">
          {current + 1} / {testimonials.length}
        </span>
        <button
          onClick={next}
          aria-label="Next recommendation"
          className="font-header font-semibold text-xs px-3 py-1 border border-line rounded hover:opacity-60 transition-opacity duration-150"
        >
          →
        </button>
      </div>
      <div className="font-text text-xs pb-6 opacity-60">
        For more, see my{" "}
        <OutboundLink
          className="underline hover:opacity-75 transition-opacity duration-150"
          href="https://www.linkedin.com/in/ruxandrafediuc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </OutboundLink>
        .
      </div>
    </div>
  )
}

const Testimonial = ({ avatarAlt, avatarUrl, company, linkUrl, name, quote }) => (
  <blockquote className="blockquote relative p-4 text-xs italic bg-neutral-100 text-neutral-600 border-neutral-500 quote">
    <span className="stylistic-quote-mark" aria-hidden="true">
      &ldquo;
    </span>
    <p className="mb-3 testimonial-quote whitespace-pre-line">{quote}</p>
    <cite className="flex items-center not-italic">
      <div className="flex flex-col items-start">
        <span className="mb-1 text-xs font-bold">
          <OutboundLink
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs"
          >
            {name}
          </OutboundLink>
        </span>
        <span className="text-xs opacity-70">{company}</span>
      </div>
    </cite>
  </blockquote>
)

Testimonial.propTypes = {
  avatarAlt: TestimonialType.avatarAlt,
  avatarUrl: TestimonialType.avatarUrl,
  company: TestimonialType.company,
  linkUrl: TestimonialType.linkUrl,
  name: TestimonialType.name,
  quote: TestimonialType.quote,
}

Testimonials.propTypes = {
  testimonials: arrayOf(shape(TestimonialType)),
}

export default Testimonials
