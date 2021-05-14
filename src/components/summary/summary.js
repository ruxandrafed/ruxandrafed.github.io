import React from "react"
import { shape, ProfileType } from "../../types"

const Summary = ({ profile }) => (
  <div className="flex pb-8">
    <div>
      <h5 className="font-header font-semibold text-front text-sm uppercase">
        Focused on
      </h5>
      <div className="font-header font-light text-2xl text-front leading-tight">
        {profile.focus}
      </div>
    </div>
  </div>
)

Summary.propTypes = {
  profile: shape(ProfileType),
}

export default Summary
