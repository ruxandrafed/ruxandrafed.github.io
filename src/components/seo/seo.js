import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Helmet } from "react-helmet"

const Seo = props => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            keywords
            locale
            siteUrl
            title
          }
        }
      }
    `
  )

  const {
    description = site.siteMetadata.description,
    keywords = site.siteMetadata.keywords,
    meta = [],
    title = site.siteMetadata.title,
  } = props

  return (
    <Helmet
      htmlAttributes={{
        lang: site.siteMetadata.locale,
      }}
      title={title}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          name: 'keywords',
          content: keywords,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(meta)}
    />
  )
}

Seo.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default Seo
