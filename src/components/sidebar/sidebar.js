import React from "react"
import { FaEnvelope } from "react-icons/fa"
import Location from "./location"
import ProfileImage from "./profile-image"
import Testimonials from "./testimonials"
import { arrayOf, shape, ProfileType, SocialType, TestimonialType } from "../../types"
import SocialLinks from "../social-links/social-links"

const Sidebar = ({ profile, social, testimonials }) => (
  <aside className="w-full lg:w-1/3 lg:border-r border-line lg:px-6 xl:px-12">
    <div className="flex flex-col">

      {/* Profile header */}
      <div className="mb-8">
        {/* {profile.image && (
          <ProfileImage image={profile.image} name={profile.name} />
        )} */}
        <h1 className="font-header font-black text-front text-4xl leading-none break-words mb-2">
          {profile.name}
        </h1>
        <p className="font-header font-semibold text-lead text-base leading-snug mb-3">
          {profile.profession.replace(/\n/g, " ").trim()}
        </p>
        {profile.location && (
          <Location location={profile.location} remote={profile.remote} />
        )}
        <div className="mt-4 flex items-center gap-1.5 flex-wrap">
          <SocialLinks social={social} />
          <a
            href="#contact"
            aria-label="Contact"
            className="inline-flex w-8 h-8 justify-center items-center rounded-full bg-back border border-line text-front hover:bg-lead hover:text-lead-text hover:border-lead transition-colors duration-150"
          >
            <FaEnvelope className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Recommendations — desktop only */}
      <span className="hidden lg:block">
        <Testimonials testimonials={testimonials} />
      </span>

    </div>
  </aside>
)

Sidebar.propTypes = {
  profile: shape(ProfileType),
  social: arrayOf(shape(SocialType)),
  testimonials: arrayOf(shape(TestimonialType)),
}

export default Sidebar
