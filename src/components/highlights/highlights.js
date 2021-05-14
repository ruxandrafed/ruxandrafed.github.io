import React from "react"
import { ProfileType } from "../../types"

const Highlights = ({ highlights }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Highlights
    </h5>
    <ul className="flex-col mt-2">
      {highlights.map(highlight => (
        <li className="inline-block md:block mb-1 mr-1 md:mr-0" key={highlight}>
          <span className="inline-block subpixel-antialiased bg-lead px-3 py-1 font-header font-light text-xl md:text-2xl text-lead-text">
            {highlight}
          </span>
        </li>
      ))}
    </ul>
  </>
)

Highlights.propTypes = {
  highlights: ProfileType.highlights,
}

export default Highlights
