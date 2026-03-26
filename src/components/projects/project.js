import { GatsbyImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import React from "react"
import { ProjectType } from "../../types"
import ProjectIcon from "./project-icon"
import ProjectStatus from "./project-status"
import ProjectTags from "./project-tags"

const Project = props => {
  const { name, image, url, description, status, tags, icon } = props
  return (
    <div className="content-card mb-4">
      <div className="sm:flex">
        {image && (
          <div className="sm:w-1/3 flex-shrink-0 border-b sm:border-b-0 sm:border-r border-line overflow-hidden p-3">
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt={name}
              style={{ height: "100%" }}
              imgStyle={{ objectFit: "scale-down", objectPosition: "center center" }}
            />
          </div>
        )}
        <div className="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between gap-3 mb-1">
              <h4 className="font-header font-bold text-base text-front leading-tight">
                {name}
              </h4>
              {icon && <ProjectIcon icon={icon} />}
            </div>
            {url && (
              <OutboundLink
                className="text-lead text-xs font-medium break-all hover:opacity-70 transition-opacity duration-150 block mb-2"
                href={url}
                rel="noreferrer noopener"
                target="_blank"
              >
                {url}
              </OutboundLink>
            )}
            <p className="text-sm py-2 whitespace-pre-line leading-relaxed" style={{ opacity: 0.78 }}>
              {description}
            </p>
          </div>
          {(status || tags) && (
            <ul className="flex flex-wrap mt-2">
              {status && <ProjectStatus status={status} />}
              {tags && <ProjectTags tags={tags} />}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

Project.propTypes = ProjectType

export default Project
