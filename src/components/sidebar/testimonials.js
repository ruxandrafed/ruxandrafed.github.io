import React, { useState } from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { arrayOf, shape, TestimonialType } from "../../types"
import "./testimonials.css"

const QUOTE_LIMIT = 300

const Testimonial = ({ company, linkUrl, name, quote }) => {
  const [expanded, setExpanded] = useState(false)
  const truncatable = quote.length > QUOTE_LIMIT
  const displayedQuote =
    truncatable && !expanded ? quote.slice(0, QUOTE_LIMIT).trimEnd() + "…" : quote

  return (
    <blockquote className="relative text-xs border-l-4 border-lead bg-lead bg-opacity-5 rounded-r-lg p-4 mb-3">
      <p className="whitespace-pre-line text-front leading-relaxed mb-1 text-xs" style={{ opacity: 0.82, fontSize: "0.7rem" }}>
        {displayedQuote}
      </p>
      {truncatable && (
        <button
          onClick={() => setExpanded(e => !e)}
          className="text-lead font-semibold not-italic hover:opacity-70 transition-opacity duration-150 mb-2"
        >
          {expanded ? "Show less" : "Show more"}
        </button>
      )}
      <cite className="flex flex-col not-italic border-t border-line pt-2 mt-2">
        <OutboundLink
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-bold text-front not-italic hover:opacity-70 transition-opacity duration-150"
        >
          {name}
        </OutboundLink>
        <span className="text-xs font-semibold mt-0.5 text-lead">
          {company}
        </span>
      </cite>
    </blockquote>
  )
}

const Testimonials = ({ testimonials }) => {
  if (!testimonials || testimonials.length === 0) return null

  return (
    <div id="recommendations" className="mt-2">
      <h2 className="font-header font-bold text-front text-xl tracking-wide mb-4">
        <span className="font-mono font-normal text-lead text-sm mr-1.5" style={{ opacity: 0.45 }}>//</span>Recommendations
      </h2>
      {testimonials.map(t => (
        <Testimonial key={t.name} {...t} />
      ))}
      <div className="font-text text-xs mb-6" style={{ opacity: 0.55 }}>
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

Testimonial.propTypes = {
  company: TestimonialType.company,
  linkUrl: TestimonialType.linkUrl,
  name: TestimonialType.name,
  quote: TestimonialType.quote,
}

Testimonials.propTypes = {
  testimonials: arrayOf(shape(TestimonialType)),
}

export default Testimonials
