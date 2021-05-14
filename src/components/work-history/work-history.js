import React from "react"
import { arrayOf, shape, WorkHistoryType } from "../../types"
import "./work-history.css"

const WorkHistory = ({ history }) => {
  return (
    <>
      <h5 className="font-header font-semibold text-front text-sm uppercase mt-12 mb-3 text-center">
        Work history
      </h5>
      <div className="history flex flex-col relative pt-6 pb-6 whitespace-pre-line">
        {history.map(({ company, period, position, description, url }, i) => (
          <div
            className="history-entry relative sm:w-1/2 py-4"
            key={`${position}_${i}`}
          >
            <span className="dot-bg w-14 h-14 absolute bg-line inline-flex rounded-full items-center justify-center">
              <span className="dot w-5 h-5 bg-back-light rounded-full" />
            </span>
            <h4 className="subpixel-antialiased">{position}</h4> 
            {url ? (
              <h5 className="text-sm font-normal mb-1">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-75 transition-opacity duration-150"
                >
                  {company}
                </a>
              </h5>
            ) : (
              <h5 className="text-sm font-normal mb-1">{company}</h5>
            )}

            {period && (
              <span className="text-sm font-medium opacity-50">{period}</span>
            )}
            {description && (
              <h5 className="text-sm font-normal mb-1">{description}</h5>
            )}
          </div>
        ))}
      </div>
      <div className="font-text text-sm pb-12 leading-normal whitespace-pre-line">
        For more details about my past experience, please connect with me on 
          <a 
          className="underline hover:opacity-75 transition-opacity duration-150 m-1" 
          href="https://www.linkedin.com/in/ruxandrafediuc/"
          target="_blank"
          rel="noopener noreferrer"
          >
            LinkedIn
          </a> 
          or 
          <a 
            className="underline hover:opacity-75 transition-opacity duration-150 m-1" 
            href="#contact"
            target="_blank"
            rel="noopener noreferrer"
          >
            drop me a line
          </a>.
      </div>
    </>
  )
}

WorkHistory.propTypes = {
  history: arrayOf(shape(WorkHistoryType)),
}

export default WorkHistory
