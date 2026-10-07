import { graphql } from "gatsby"
import { arrayOf, shape, string, object, oneOf } from "prop-types"

export const ProjectType = {
  description: string,
  icon: oneOf(["github", "website"]),
  image: shape({
    publicURL: string,
    childImageSharp: object.isRequired,
  }),
  name: string.isRequired,
  status: string,
  tags: arrayOf(string),
  url: string,
}

export const query = graphql`
  fragment ProjectFragment on ProjectsYaml {
    description
    icon
    image {
      publicURL
      childImageSharp {
        gatsbyImageData(width: 640, quality: 85)
      }
    }
    name
    status
    tags
    url
  }
`
