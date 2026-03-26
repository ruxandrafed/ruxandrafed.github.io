import React from "react"
import Project from "./project"
import { arrayOf, shape, ProjectType } from "../../types"

const Projects = ({ projects }) => (
  <>
    <div className="section-heading">
      <h2 id="showcase" className="font-header font-bold text-front text-xl tracking-wide">
        <span className="font-mono font-normal text-lead text-sm mr-1.5" style={{ opacity: 0.45 }}>//</span>Showcase
      </h2>
      <div className="section-heading-bar" />
    </div>
    {projects.map((project, i) => (
      <Project key={`${project.name}_${i}`} {...project} />
    ))}
  </>
)

Projects.propTypes = {
  projects: arrayOf(shape(ProjectType)),
}

export default Projects
