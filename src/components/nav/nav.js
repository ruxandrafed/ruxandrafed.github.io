import React, { useState, useEffect } from "react"

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Showcase", href: "#showcase" },
  { label: "Education", href: "#education" },
  { label: "Recommendations", href: "#recommendations" },
]

const Nav = ({ name }) => {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 120)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`sticky-nav${visible ? " sticky-nav--visible" : ""}`} aria-hidden={!visible}>
      <div className="md:max-w-screen-sm lg:max-w-screen-xl mx-auto px-4 lg:px-8 flex items-center justify-between h-14">
        <span className="font-header font-black text-front text-base tracking-tight">
          {name}
        </span>
        <ul className="hidden md:flex items-center" style={{ gap: "1.5rem" }}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="font-header text-xs font-semibold text-front uppercase tracking-widest hover:opacity-50 transition-opacity duration-150"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="font-header font-semibold text-xs px-4 py-2 bg-lead rounded-lg text-lead-text hover:opacity-75 transition-opacity duration-150"
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Nav
