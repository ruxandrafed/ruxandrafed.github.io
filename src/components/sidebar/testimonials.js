import React from 'react'
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { arrayOf, shape, TestimonialType } from "../../types"
import "./testimonials.css"

const Testimonials = ({testimonials}) => (
  <>
    <ul className="pr-2">
    {testimonials && testimonials.map(
      (testimonial, i) => (
        <li key={`${testimonial.name}_${i}`} className="mb-2">
          <Testimonial
            avatarAlt={`Avatar of ${testimonial.name}`}
            avatarUrl={testimonial.avatarUrl}
            company={testimonial.company}
            linkUrl={testimonial.linkUrl}
            name={testimonial.name}
            quote={testimonial.quote}
          />
        </li>
      )
    )}
    </ul>
    <div className="font-text text-sm pb-12 leading-normal whitespace-pre-line">
      For more recommendations, please connect with me and checkout out my profile on 
        <OutboundLink 
        className="underline hover:opacity-75 transition-opacity duration-150 m-1" 
        href="https://www.linkedin.com/in/ruxandrafediuc/"
        target="_blank"
        rel="noopener noreferrer"
        >
          LinkedIn
        </OutboundLink>.
    </div>
  </>
)

const Testimonial = ({ avatarAlt, avatarUrl, company, linkUrl, name, quote }) => (
  <blockquote className="blockquote relative p-4 text-xs italic bg-neutral-100 text-neutral-600 border-neutral-500 quote whitespace-pre-line">
    <span className="stylistic-quote-mark" aria-hidden="true">
      &ldquo;
    </span>
   <p className="mb-4">{quote}</p>
    <cite className="flex items-center">
      <div className="flex flex-col items-start">
       <span className="mb-1 text-sm italic font-bold">
        <OutboundLink
          href={linkUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm"
        >
          {name}
        </OutboundLink>
       </span>
        {company}
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
