import { GatsbyImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import React, { useState, useEffect } from "react"
import { ProjectType } from "../../types"
import ProjectIcon from "./project-icon"
import ProjectStatus from "./project-status"
import ProjectTags from "./project-tags"

const Project = props => {
  const { name, image, url, description, status, tags, icon } = props
  const [lightbox, setLightbox] = useState(false)

  useEffect(() => {
    if (!lightbox) return
    const onKey = e => { if (e.key === "Escape") setLightbox(false) }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [lightbox])

  return (
    <div className="content-card mb-4">
      {lightbox && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 cursor-zoom-out p-4"
          onClick={() => setLightbox(false)}
        >
          <img
            src={image.publicURL}
            alt={name}
            className="max-w-full max-h-full object-contain rounded shadow-2xl"
            onClick={e => e.stopPropagation()}
          />
        </div>
      )}
      <div className="sm:flex">
        {image && (
          <div className="sm:w-40 flex-shrink-0 border-b sm:border-b-0 sm:border-r border-line overflow-hidden p-3">
            <button onClick={() => setLightbox(true)} className="block w-full h-full cursor-zoom-in">
              <GatsbyImage
                image={image.childImageSharp.gatsbyImageData}
                alt={name}
                style={{ height: "100%" }}
                imgStyle={{ objectFit: "scale-down", objectPosition: "center center" }}
              />
            </button>
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
