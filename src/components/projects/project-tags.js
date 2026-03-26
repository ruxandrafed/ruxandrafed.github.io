import React from "react"
import { ProjectType } from "../../types"

const ProjectTags = ({ tags }) => (
  <>
    {tags.map(tag => (
      <li
        className="inline-block px-3 py-1 mr-1 mt-1 font-mono text-xs rounded-full border border-line text-front"
        key={tag}
        style={{ opacity: 0.75 }}
      >
        {tag}
      </li>
    ))}
  </>
)

ProjectTags.propTypes = {
  tags: ProjectType.tags,
}

export default ProjectTags
