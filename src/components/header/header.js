import React from "react"

const Header = () => (
  <header
    className="relative w-full overflow-hidden"
    style={{ height: "160px" }}
  >
    <img
      src="/images/banner.jpg"
      alt=""
      aria-hidden="true"
      className="absolute inset-0 w-full h-full object-cover object-center"
      style={{ opacity: 0.85 }}
    />
    <div
      className="absolute inset-0"
      style={{
        background:
          "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.55) 100%)",
      }}
    />
  </header>
)

export default Header
