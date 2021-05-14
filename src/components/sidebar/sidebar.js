import React from "react"
import Location from "./location"
import ProfileImage from "./profile-image"
import Testimonials from "./testimonials"
import { arrayOf, shape, ProfileType, SocialType, TestimonialType } from "../../types"
import SocialLinks from "../social-links/social-links"

const Sidebar = ({ profile, social, testimonials }) => (
  <aside className="w-full lg:w-1/3 lg:border-r border-line lg:px-6 xl:px-12">
    <div className="flex flex-col h-full justify-between">
      <div>
        <h2 className="font-header font-light text-front text-2xl leading-none mb-4">
          {profile.profession}
        </h2>
        <h1 className="font-header font-black text-front text-5xl leading-none break-words mb-6">
          {profile.name}
        </h1>
        {profile.image && (
          <ProfileImage image={profile.image} name={profile.name} />
        )}
        <br />
        {profile.location && (
          <Location
            location={profile.location}
            remote={profile.remote}
          />
        )}
        <br />
        <span className="hidden lg:block">
          <Testimonials testimonials={testimonials} />
        </span>
      </div>

      <div className="pt-8 pb-12 lg:py-0">
        <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
          Connect
        </h5>
        <SocialLinks social={social} />
      </div>
    </div>
  </aside>
)

Sidebar.propTypes = {
  profile: shape(ProfileType),
  social: arrayOf(shape(SocialType)),
  testimonials: arrayOf(shape(TestimonialType)),
}

export default Sidebar
