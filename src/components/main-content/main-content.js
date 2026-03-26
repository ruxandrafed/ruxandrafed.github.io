import React from "react"
import About from "../about/about"
import ContactForm from "../contact-form/contact-form"
import Projects from "../projects/projects"
import Skills from "../skills/skills"
import EducationCertifications from "../education-certifications/education-certifications"
import Highlights from "../highlights/highlights"
import Testimonials from "../sidebar/testimonials"
import WorkHistory from "../work-history/work-history"

const MainContent = ({ formspreeEndpoint, history, projects, profile, educationCertifications, testimonials }) => {
  return (
    <main className="lg:w-2/3 lg:pl-8 xl:pl-12">
      {(profile.skills || profile.highlights) && (
        <div className="flex flex-wrap border-b border-line pb-4 mb-2">
          <div className="w-full md:w-3/5 md:pr-8">
            {profile.skills && <Skills skills={profile.skills} />}
          </div>
          <div className="w-full md:w-2/5">
            {profile.highlights && <Highlights highlights={profile.highlights} />}
          </div>
        </div>
      )}

      {profile.about && <About about={profile.about} />}
      <WorkHistory history={history} />
      <Projects projects={projects} />
      <EducationCertifications educationCertifications={educationCertifications} />

      <span className="block lg:hidden">
        <Testimonials testimonials={testimonials} />
      </span>

      <ContactForm formspreeEndpoint={formspreeEndpoint} />
    </main>
  )
}

export default MainContent
