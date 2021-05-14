import { graphql } from "gatsby"
import { string } from "prop-types"

export const TestimonialType = {
  avatarAlt: string.isRequired,
  avatarUrl: string.isRequired,
  company: string.isRequired,
  linkUrl: string.isRequired,
  name: string.isRequired,
  quote: string.isRequired,
}

export const query = graphql`
  fragment TestimonialsFragment on TestimonialsYaml {
    avatarAlt
    avatarUrl
    company
    linkUrl
    name
    quote
  }
`
