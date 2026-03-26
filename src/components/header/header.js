import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"

const Header = () => (
  <header className="flex justify-end px-4 py-3 lg:px-8">
    <OutboundLink
      className="flex items-center gap-2 font-header font-semibold px-5 py-2.5 bg-lead rounded-lg text-lead-text text-sm hover:opacity-75 transition-opacity duration-150"
      href="#contact"
    >
      Contact me
    </OutboundLink>
  </header>
)

export default Header
