const basePath = `/`
const contentPath = `content/`
const showThemeLogo = false
const theme = `gh-inspired`

module.exports = {
  siteMetadata: {
    author: `Ruxandra Fediuc`,
    description: `Ruxandra Fediuc - Principal Engineer & Platform Architect specializing in AI platforms, distributed systems, and multi-cloud infrastructure. Google Cloud Professional Architect, Generative AI Leader, CKA.`,
    keywords: 'Vancouver, principal engineer, platform architect, AI platforms, distributed systems, generative AI, Google Cloud, GCP, Kubernetes, AWS, software architect, Women Who Code',
    locale: `en`,
    showThemeLogo,
    siteUrl: 'https://www.ruxandrafediuc.com',
    title: `Ruxandra Fediuc - Principal Engineer & Platform Architect`,
    formspreeEndpoint: `https://formspree.io/f/mrgrpkyy`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [
          require(`tailwindcss`)(require(`./tailwind.config`)(theme)),
          require(`postcss-input-range`),
          require(`autoprefixer`),
        ],
      },
    },
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: contentPath,
      },
    },
`gatsby-plugin-image`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          `G-0F1Q8V2FGN`,
        ],
        pluginConfig: {
          head: true,
          respectDNT: true,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Ruxandra Fediuc - Principal Engineer & Platform Architect`,
        short_name: `Ruxandra Fediuc`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
