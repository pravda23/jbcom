import React from "react"
import "../styles/global.css"

export default function Navbar() {
  return (
    <div>
      <nav>
        <div className="logo">
          <h4>JOHN BARTMANN</h4>
          <h5>CONTENT CREATIVE // WEB DEV</h5>
        </div>
        <ul className="nav-links">
          <a href="/">HOME</a>
          <a href="/writing">WRITING</a>
          <a href="/podcasting">PODCASTING</a>
          <a href="/music">MUSIC</a>
          <a href="/coding">CODING</a>
          <a href="/contact">CONTACT</a>
        </ul>
        <div className="burger">
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
    </div>
  )
}
