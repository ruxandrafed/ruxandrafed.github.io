import React, { useState } from "react"
import { OutboundLink } from "gatsby-plugin-google-gtag"
import { arrayOf, shape, WorkHistoryType } from "../../types"
import { FiPlusCircle, FiMinusCircle } from "react-icons/fi"

const getDomain = (url) => {
  try { return new URL(url).hostname.replace("www.", "") } catch { return null }
}

const renderWithBold = (text) =>
  text.split(/\*\*(.*?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? <strong key={i}>{part}</strong> : part
  )

const WorkHistoryItem = ({ company, period, position, description, url, volunteer, i }) => {
  const [expanded, setExpanded] = useState(false)

  const paragraphs = description ? description.trim().split(/\n\n+/) : []
  const introParagraphs = paragraphs.filter(p => !p.trim().startsWith("►"))
  const bulletParagraphs = paragraphs.filter(p => p.trim().startsWith("►"))

  return (
    <div className="relative pl-10 pb-10">
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
        {/* Role + Period (left) / Company (right on md+, between title+period on mobile) */}
        <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-2 mb-2">
          <div>
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
            {/* Company — mobile only, sits between title and period */}
            <div className="flex md:hidden items-center gap-1.5 mt-0.5">
              {url && getDomain(url) && (
                <img
                  src={`https://www.google.com/s2/favicons?domain=${getDomain(url)}&sz=32`}
                  alt=""
                  width={16}
                  height={16}
                  className="rounded flex-shrink-0"
                  style={{ objectFit: "contain" }}
                  onError={e => { e.target.style.display = "none" }}
                />
              )}
              {url ? (
                <OutboundLink href={url} target="_blank" rel="noopener noreferrer" className="text-lead text-sm font-semibold hover:opacity-70 transition-opacity duration-150">
                  {company}
                </OutboundLink>
              ) : (
                <span className="text-sm font-semibold" style={{ opacity: 0.6 }}>{company}</span>
              )}
            </div>
            {period && (
              <span className="font-mono text-xs mt-0.5 block" style={{ color: "#94a3b8" }}>
                {period}
              </span>
            )}
          </div>
          {/* Company — desktop only, right-aligned */}
          <div className="hidden md:flex items-center gap-1.5 flex-shrink-0">
            {url && getDomain(url) && (
              <img
                src={`https://www.google.com/s2/favicons?domain=${getDomain(url)}&sz=32`}
                alt=""
                width={16}
                height={16}
                className="rounded flex-shrink-0"
                style={{ objectFit: "contain" }}
                onError={e => { e.target.style.display = "none" }}
              />
            )}
            {url ? (
              <OutboundLink href={url} target="_blank" rel="noopener noreferrer" className="text-lead text-sm font-semibold hover:opacity-70 transition-opacity duration-150">
                {company}
              </OutboundLink>
            ) : (
              <span className="text-sm font-semibold" style={{ opacity: 0.6 }}>{company}</span>
            )}
          </div>
        </div>

        {/* Description */}
        {description && (
          <div className="text-sm mt-2 leading-relaxed" style={{ opacity: 0.72 }}>
            {introParagraphs.map((p, idx) => (
              <p key={idx} className={`whitespace-pre-line${idx > 0 ? " mt-2" : ""}`}>{renderWithBold(p)}</p>
            ))}

            {bulletParagraphs.length > 0 && (
              <>
                <div className={`overflow-hidden transition-[max-height] duration-300 ease-in-out md:max-h-[9999px] ${expanded ? "max-h-[9999px]" : "max-h-0"}`}>
                  {bulletParagraphs.map((p, idx) => (
                    <p key={idx} className="whitespace-pre-line mt-2">{renderWithBold(p)}</p>
                  ))}
                </div>
                <button
                  className="md:hidden flex items-center gap-1.5 text-lead text-xs mt-2 hover:opacity-70 transition-opacity duration-150"
                  onClick={() => setExpanded(!expanded)}
                >
                  {expanded ? <FiMinusCircle size={14} /> : <FiPlusCircle size={14} />}
                  {expanded ? "hide highlights" : "key highlights"}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

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
            <WorkHistoryItem
              key={`${position}_${i}`}
              i={i}
              company={company}
              period={period}
              position={position}
              description={description}
              url={url}
              volunteer={volunteer}
            />
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
