import { graphql } from "gatsby"
import React from "react"
import CustomFonts from "../components/custom-fonts/custom-fonts"
import Footer from "../components/footer/footer"
import Header from "../components/header/header"
import MainContent from "../components/main-content/main-content"
import Seo from "../components/seo/seo"
import Sidebar from "../components/sidebar/sidebar"
import StructuredData from "../components/structured-data/structured-data"
import "../styles/style.css"

const IndexPage = ({ data }) => {
  const { history, profile, projects, educationCertifications, site, social, testimonials } = data

  return (
    <div className="antialiased bg-back leading-normal font-text text-front">
      <Seo />
      <StructuredData profile={profile} social={social.nodes} />
      <CustomFonts />

      <Header initials={profile.initials} />

      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 flex flex-wrap pt-4 my-8">
        <Sidebar profile={profile} social={social.nodes} testimonials={testimonials.nodes} /> 

        <MainContent
          history={history.nodes}
          profile={profile}
          educationCertifications={educationCertifications.nodes}
          projects={projects.nodes}
          testimonials={testimonials.nodes}
          formspreeEndpoint={site.siteMetadata.formspreeEndpoint}
        />
      </div>

      <Footer
        name={profile.name}
        showThemeLogo={site.siteMetadata.showThemeLogo}
      />
    </div>
  )
}

export default IndexPage

export const query = graphql`
  query {
    site {
      siteMetadata {
        showThemeLogo
        formspreeEndpoint
      }
    }
    profile: profileYaml {
      ...ProfileFragment
    }
    testimonials: allTestimonialsYaml {
      nodes {
        ...TestimonialsFragment
      }
    }
    social: allSocialYaml(filter: { url: { ne: null } }) {
      nodes {
        ...SocialFragment
      }
    }
    history: allWorkHistoryYaml {
      nodes {
        ...WorkHistoryFragment
      }
    }
    projects: allProjectsYaml {
      nodes {
        ...ProjectFragment
      }
    }
    educationCertifications: allEducationCertificationsYaml {
      nodes {
        ...EducationCertificationsFragment
      }
    }
  }
`
