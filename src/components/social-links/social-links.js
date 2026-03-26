import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import SocialIcon from "./social-icon"
import { SocialType, arrayOf, shape } from "../../types"

const SocialLinks = ({ social }) => (
  <div className="flex flex-wrap gap-1.5">
    {social.map(({ name, url }) => (
      <OutboundLink
        aria-label={name}
        className="inline-flex w-8 h-8 justify-center items-center rounded-full bg-back border border-line text-front hover:bg-lead hover:text-lead-text hover:border-lead transition-colors duration-150"
        href={url}
        key={name}
        rel="noopener noreferrer"
        target="_blank"
      >
        <SocialIcon name={name} className="w-4 h-4" />
      </OutboundLink>
    ))}
  </div>
)

SocialLinks.propTypes = {
  social: arrayOf(shape(SocialType)),
}

export default SocialLinks
