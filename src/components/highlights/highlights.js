import React from "react"
import { ProfileType } from "../../types"

const Highlights = ({ highlights }) => (
  <>
    <p className="font-header font-semibold text-front text-xs uppercase tracking-widest mt-2 mb-3" style={{ opacity: 0.5 }}>
      Highlights
    </p>
    <ul className="flex flex-col gap-2.5 mb-8">
      {highlights.map(highlight => (
        <li key={highlight} className="flex items-start gap-2.5">
          <span className="mt-0.5 w-4 h-4 rounded-full bg-lead flex-shrink-0 flex items-center justify-center">
            <svg className="w-2.5 h-2.5 text-lead-text" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          </span>
          <span className="font-header text-sm font-medium text-front leading-snug">
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
