import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { SiGoogle, SiLinuxfoundation, SiAmazonaws } from "react-icons/si"
import { arrayOf, shape, EducationCertificationsType } from "../../types"

const institutionIcon = institution => {
  const inst = (institution || "").toLowerCase()
  if (inst.includes("google")) {
    return <SiGoogle style={{ color: "#4285F4", width: "1.5rem", height: "1.5rem" }} />
  }
  if (inst.includes("linux")) {
    return <SiLinuxfoundation style={{ color: "#333", width: "1.5rem", height: "1.5rem" }} />
  }
  if (inst.includes("amazon") || inst.includes("aws")) {
    return <SiAmazonaws style={{ color: "#FF9900", width: "1.5rem", height: "1.5rem" }} />
  }
  return (
    <span className="font-header font-bold text-lead-text text-lg">
      {inst.trim().charAt(0).toUpperCase()}
    </span>
  )
}

const EducationCertificationsItem = props => {
  const { name, institution, period, image, url, urlName } = props
  return (
    <div className="content-card">
      <div className="p-5 flex items-start gap-4">
        <div className="flex-1 min-w-0">
          <h4 className="font-header font-bold text-base text-front mb-1">{name}</h4>
          <p className="text-sm font-medium" style={{ opacity: 0.65 }}>{institution}</p>
          {period && (
            <p className="text-xs mt-1" style={{ opacity: 0.45 }}>{period}</p>
          )}
          {url && (
            <OutboundLink
              className="inline-block mt-3 text-lead text-xs font-semibold hover:opacity-75 transition-opacity duration-150 underline"
              href={url}
              rel="noreferrer noopener"
              target="_blank"
            >
              {urlName}
            </OutboundLink>
          )}
        </div>
        {image ? (
          <div className="w-16 flex-shrink-0">
            <GatsbyImage
              image={image.childImageSharp.gatsbyImageData}
              alt={name}
            />
          </div>
        ) : (
          <div className="w-12 h-12 flex-shrink-0 rounded-full bg-back border border-line flex items-center justify-center">
            {institutionIcon(institution)}
          </div>
        )}
      </div>
    </div>
  )
}

EducationCertificationsItem.propTypes = EducationCertificationsType

const EducationCertifications = ({ educationCertifications }) => (
  <>
    <div className="section-heading">
      <h2 id="education" className="font-header font-bold text-front text-xl tracking-wide">
        <span className="font-mono font-normal text-lead text-sm mr-1.5" style={{ opacity: 0.45 }}>//</span>Education &amp; Certifications
      </h2>
      <div className="section-heading-bar" />
    </div>
    {educationCertifications.map((item, i) => (
      <EducationCertificationsItem key={`${item.name}_${i}`} {...item} />
    ))}
    <div className="pb-8" />
  </>
)

EducationCertifications.propTypes = {
  educationCertifications: arrayOf(shape(EducationCertificationsType)),
}

export default EducationCertifications
