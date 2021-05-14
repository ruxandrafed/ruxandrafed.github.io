import { graphql } from "gatsby"
import { shape, string, object } from "prop-types"

export const EducationCertificationsType = {
  description: string,
  institution: string.isRequired,
  image: shape({
    childImageSharp: object.isRequired,
  }),
  name: string.isRequired,
  period: string,
  url: string,
  urlName: string,
}

export const query = graphql`
  fragment EducationCertificationsFragment on EducationCertificationsYaml {
    description
    institution
    image {
      childImageSharp {
        gatsbyImageData(width: 150, quality: 85)
      }
    }
    name
    period
    url
    urlName
  }
`
