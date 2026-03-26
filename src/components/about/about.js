import React from "react"
import { ProfileType } from "../../types"

const About = ({ about }) => (
  <>
    <div className="section-heading">
      <h2 id="about" className="font-header font-bold text-front text-xl tracking-wide">
        <span className="font-mono font-normal text-lead text-sm mr-1.5" style={{ opacity: 0.45 }}>//</span>About
      </h2>
      <div className="section-heading-bar" />
    </div>
    <div className="font-text text-sm pb-10 leading-relaxed whitespace-pre-line text-front" style={{ opacity: 0.85 }}>
      {about}
    </div>
  </>
)

About.propTypes = {
  about: ProfileType.about,
}

export default About
