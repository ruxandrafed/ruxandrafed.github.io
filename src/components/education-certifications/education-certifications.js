import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { arrayOf, shape, EducationCertificationsType } from "../../types"

const EducationCertificationsItem = props => {
  const { name, institution, period, image, url, urlName } = props
  return (
    <div className="border-t-4 border-line relative flex flex-wrap bg-back-light p-4 lg:p-8 bg-no-repeat text-sm mb-6">
      <div className="lg:flex-1">
        <h4 className="font-bold">{name}</h4>
        <p className="w-full whitespace-pre-line">{institution}</p>
        <p className="w-full py-4 whitespace-pre-line">{period}</p>
        {url && (
          <OutboundLink
            className="text-front underline break-all hover:opacity-75 transition-opacity duration-150"
            href={url}
            rel="noreferrer noopener"
            target="_blank"
          >
            {urlName}
          </OutboundLink>
        )}
      </div>
      {image && (
        <div className="w-full pt-4 lg:w-1/5 lg:pl-8 lg:pt-0">
          <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt={name} />
        </div>
      )}
    </div>
  )
}

EducationCertificationsItem.propTypes = EducationCertificationsType

const EducationCertifications = ({ educationCertifications }) => (
  <>
    <h5 className="font-header font-semibold text-front text-sm uppercase mb-3">
      Education & Certifications
    </h5>
    {educationCertifications.map((educationCertificationsItem, i) => (
      <EducationCertificationsItem key={`${educationCertificationsItem.name}_${i}`} {...educationCertificationsItem} />
    ))}
  </>
)

EducationCertifications.propTypes = {
  projects: arrayOf(shape(EducationCertificationsType)),
}

export default EducationCertifications
