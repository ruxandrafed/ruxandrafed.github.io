import React from "react"
import Skill from "./skill"
import { ProfileType } from "../../types"

const Skills = ({ skills }) => (
  <>
    <p className="font-header font-semibold text-front text-xs uppercase tracking-widest mt-2 mb-3" style={{ opacity: 0.5 }}>
      Top Skills
    </p>
    <ul className="flex flex-wrap gap-2 mb-8">
      {skills.map((skill, i) => (
        <Skill skill={skill} key={skill} i={(i % 6) + 1} />
      ))}
    </ul>
  </>
)

Skills.propTypes = {
  skills: ProfileType.skills,
}

export default Skills
