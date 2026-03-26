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
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 120)
      if (window.scrollY <= 120) setMenuOpen(false)
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

        {/* Desktop links */}
        <ul className="hidden md:flex items-center" style={{ gap: "1.5rem" }}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="font-header text-xs font-semibold text-front uppercase tracking-widest hover:opacity-60 transition-opacity duration-150"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="font-header font-semibold text-xs px-4 py-2 bg-lead rounded-lg text-lead-text hover:opacity-75 transition-opacity duration-150"
          >
            Contact
          </a>
          {/* Mobile hamburger */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 bg-white" style={{ transition: "all 0.2s", transform: menuOpen ? "rotate(45deg) translateY(8px)" : "none" }} />
            <span className="block w-5 h-0.5 bg-white" style={{ transition: "all 0.2s", opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-0.5 bg-white" style={{ transition: "all 0.2s", transform: menuOpen ? "rotate(-45deg) translateY(-8px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="relative z-10 md:hidden bg-back border-t border-line px-4 py-3 flex flex-col gap-3">
          {NAV_LINKS.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className="font-header text-xs font-semibold text-front uppercase tracking-widest hover:opacity-60 transition-opacity duration-150"
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Nav
