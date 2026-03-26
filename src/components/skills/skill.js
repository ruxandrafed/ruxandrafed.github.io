import React from "react"
import { number, string } from "prop-types"

const Skill = ({ skill, i }) => (
  <li
    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold border-2 border-skill-${i} text-skill-${i}`}
  >
    {skill}
  </li>
)

Skill.propTypes = {
  skill: string.isRequired,
  i: number.isRequired,
}

export default Skill
