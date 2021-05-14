import React from "react"
import About from "../about/about"
import ContactForm from "../contact-form/contact-form"
import Projects from "../projects/projects"
import Skills from "../skills/skills"
import Summary from "../summary/summary"
import EducationCertifications from "../education-certifications/education-certifications"
import Highlights from "../highlights/highlights"
import Testimonials from "../sidebar/testimonials"
import WorkHistory from "../work-history/work-history"

const MainContent = ({ formspreeEndpoint, history, projects, profile, educationCertifications, testimonials }) => {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
      <Summary profile={profile} />

      <div className="flex flex-wrap">
        <div className="md:w-3/4 pb-12 md:pr-8 lg:pr-12 xl:pr-20">
          {profile.skills && <Skills skills={profile.skills} />}
        </div>
        <div className="md:w-1/4 pb-12">
          {profile.highlights && <Highlights highlights={profile.highlights} />}
        </div>
      </div>

      {profile.about && <About about={profile.about} />}
      <WorkHistory history={history} />
      <Projects projects={projects} />
      <EducationCertifications educationCertifications={educationCertifications} />
      <span className="block lg:hidden">
        <Testimonials testimonials={testimonials} />
      </span>
      <ContactForm
        formspreeEndpoint={formspreeEndpoint}
        budget={profile.budget}
      />
    </main>
  )
}

export default MainContent
