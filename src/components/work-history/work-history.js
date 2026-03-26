import React from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { arrayOf, shape, WorkHistoryType } from "../../types"

const WorkHistory = ({ history }) => {
  return (
    <>
      <div className="section-heading">
        <h2 id="work" className="font-header font-bold text-front text-xl tracking-wide">
          <span className="font-mono font-normal text-lead text-sm mr-1.5" style={{ opacity: 0.45 }}>//</span>Work History
        </h2>
        <div className="section-heading-bar" />
      </div>

      <div className="relative">
        {/* Timeline line */}
        <div
          className="absolute top-2 bottom-6 bg-line"
          style={{ left: "7px", width: "2px" }}
        />

        <div className="space-y-0">
          {history.map(({ company, period, position, description, url, volunteer }, i) => (
            <div
              className="relative pl-10 pb-10"
              key={`${position}_${i}`}
            >
              {/* Timeline dot */}
              <div
                className={`absolute top-1.5 w-4 h-4 rounded-full border-2 flex-shrink-0 ${
                  i === 0
                    ? "bg-lead border-lead"
                    : "bg-back border-line"
                }`}
                style={{ left: 0 }}
              />

              {/* Entry card */}
              <div className="bg-back-light border border-line rounded-xl p-5" style={{ boxShadow: "0 1px 4px rgba(0,0,0,0.05)" }}>
                {/* Role + Period */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1.5">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h4 className="font-header font-bold text-sm text-front leading-tight">
                      {position}
                    </h4>
                    {volunteer && (
                      <span className="font-mono text-xs px-2 py-0.5 rounded-full border border-lead text-lead flex-shrink-0" style={{ opacity: 0.75 }}>
                        volunteer
                      </span>
                    )}
                  </div>
                  {period && (
                    <span className="font-mono text-xs px-2 py-0.5 rounded border border-line bg-back flex-shrink-0" style={{ opacity: 0.55 }}>
                      {period}
                    </span>
                  )}
                </div>

                {/* Company */}
                {url ? (
                  <OutboundLink
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lead text-xs font-semibold hover:opacity-70 transition-opacity duration-150"
                  >
                    {company}
                  </OutboundLink>
                ) : (
                  <span className="text-xs font-semibold" style={{ opacity: 0.6 }}>
                    {company}
                  </span>
                )}

                {/* Description */}
                {description && (
                  <p className="text-xs mt-2 leading-relaxed whitespace-pre-line" style={{ opacity: 0.72 }}>
                    {description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="font-text text-sm pb-12 leading-normal" style={{ opacity: 0.6 }}>
        For more details, connect with me on{" "}
        <OutboundLink
          className="text-lead underline hover:opacity-75 transition-opacity duration-150"
          href="https://www.linkedin.com/in/ruxandrafediuc/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </OutboundLink>{" "}
        or{" "}
        <a
          className="text-lead underline hover:opacity-75 transition-opacity duration-150"
          href="#contact"
        >
          drop me a line
        </a>
        .
      </div>
    </>
  )
}

WorkHistory.propTypes = {
  history: arrayOf(shape(WorkHistoryType)),
}

export default WorkHistory
