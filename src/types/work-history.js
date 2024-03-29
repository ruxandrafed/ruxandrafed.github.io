import { graphql } from "gatsby"
import { string } from "prop-types"

export const WorkHistoryType = {
  company: string.isRequired,
  period: string,
  position: string,
  description: string,
  url: string,
}

export const query = graphql`
  fragment WorkHistoryFragment on WorkHistoryYaml {
    company
    period
    position
    description
    url
  }
`
