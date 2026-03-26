import React, { useState, useEffect } from "react"

// Lazy-loaded to avoid SSR issues with @react-pdf/renderer
const ResumeDownloadButton = ({ profile, history, educationCertifications, social, testimonials }) => {
  const [PDFDownloadLink, setPDFDownloadLink] = useState(null)
  const [ResumePDF, setResumePDF] = useState(null)

  useEffect(() => {
    // Only import on client side
    Promise.all([
      import("@react-pdf/renderer"),
      import("./resume-pdf"),
    ]).then(([{ PDFDownloadLink: DL }, { default: PDF }]) => {
      setPDFDownloadLink(() => DL)
      setResumePDF(() => PDF)
    })
  }, [])

  if (!PDFDownloadLink || !ResumePDF) {
    return (
      <button
        disabled
        className="inline-flex items-center gap-2 font-header font-semibold text-xs px-4 py-2 rounded-lg border border-line text-front opacity-50 cursor-wait"
      >
        Generate Resume (PDF)
      </button>
    )
  }

  return (
    <PDFDownloadLink
      document={
        <ResumePDF
          profile={profile}
          history={history}
          educationCertifications={educationCertifications}
          social={social}
          testimonials={testimonials}
        />
      }
      fileName={`${profile.name.replace(/\s+/g, "_")}_Resume.pdf`}
      className="inline-flex items-center gap-2 font-header font-semibold text-xs px-4 py-2 bg-lead rounded-lg text-lead-text hover:opacity-75 transition-opacity duration-150"
    >
      {({ loading }) => (loading ? "Generating…" : "Generate Resume (PDF)")}
    </PDFDownloadLink>
  )
}

export default ResumeDownloadButton
