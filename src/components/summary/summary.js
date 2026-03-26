import React from "react"
import { shape, ProfileType } from "../../types"

const Summary = ({ profile }) => (
  <div className="pb-8 border-b border-line mb-4">
    <p className="font-header text-xs font-semibold text-front uppercase tracking-widest mb-3" style={{ opacity: 0.45 }}>
      Currently focused on
    </p>
    <div className="flex flex-wrap gap-2">
      {profile.focus.split(",").map(f => (
        <span
          key={f}
          className="inline-block px-3 py-1 text-lead text-sm font-semibold rounded-full border border-line bg-back-light"
        >
          {f.trim()}
        </span>
      ))}
    </div>
  </div>
)

Summary.propTypes = {
  profile: shape(ProfileType),
}

export default Summary
