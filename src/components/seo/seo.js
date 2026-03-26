import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

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
    <>
      <html lang={site.siteMetadata.locale} />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {meta.map((m, i) => (
        <meta key={i} {...m} />
      ))}
    </>
  )
}

Seo.propTypes = {
  description: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string,
}

export default Seo
