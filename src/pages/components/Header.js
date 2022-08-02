import React, { useState } from "react"
import Navbar from "./Navbar"
import "../styles/global.css"

export default function Header() {
  return (
    <>
      <div className="topHeader">
        <div className="logo">
          <h4>JOHN BARTMANN</h4>
          <h5>CONTENT CREATIVE // WEB DEV</h5>
        </div>
        <div>
          <Navbar />
        </div>
      </div>
    </>
  )
}
