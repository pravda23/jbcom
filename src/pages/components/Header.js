import React, { useState } from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Header() {
  return (
    <>
      <div className="topHeader">
        <div className="logo">
          <a href="/">
            <h3>JOHN BARTMANN</h3>
          </a>
          <a href="/">
            <h5>CONTENT CREATIVE // WEB DEV</h5>
          </a>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </>
  )
}
