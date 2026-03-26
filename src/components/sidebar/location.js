import React from "react"
import { FaMapMarkerAlt } from "react-icons/fa"
import { ProfileType } from "../../types"

const Location = ({ location, remote }) => (
  <>
    <div className="inline-flex items-center gap-1.5 mt-1" style={{ opacity: 0.6 }}>
      <FaMapMarkerAlt className="h-3 w-3 text-front flex-shrink-0" />
      <span className="font-header text-sm text-front">
        {location}
        {remote && <span className="ml-2 opacity-75">· Remote preferred</span>}
      </span>
    </div>
  </>
)

Location.propTypes = {
  location: ProfileType.location,
  remote: ProfileType.remote,
}

export default Location
