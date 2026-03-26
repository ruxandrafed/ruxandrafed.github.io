import React from "react"
import { ProjectType } from "../../types"

const ProjectStatus = ({ status }) => (
  <li
    className={`inline-flex items-center px-3 py-1 mr-1 mt-1 font-semibold text-xs rounded-full ${
      status === "live"
        ? "bg-green-100 text-green-700 border border-green-200"
        : "bg-orange-100 text-orange-700 border border-orange-200"
    }`}
  >
    <span
      className={`inline-block w-1.5 h-1.5 rounded-full mr-1.5 flex-shrink-0 ${
        status === "live" ? "bg-green-500" : "bg-orange-400"
      }`}
    />
    {status === "live" ? "Live" : "In Progress"}
  </li>
)

ProjectStatus.propTypes = {
  status: ProjectType.status,
}

export default ProjectStatus
