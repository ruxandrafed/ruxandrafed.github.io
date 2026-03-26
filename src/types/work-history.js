import { graphql } from "gatsby"
import { bool, string } from "prop-types"

export const WorkHistoryType = {
  company: string.isRequired,
  period: string,
  position: string,
  description: string,
  url: string,
  volunteer: bool,
}

export const query = graphql`
  fragment WorkHistoryFragment on WorkHistoryYaml {
    company
    period
    position
    description
    url
    volunteer
  }
`
