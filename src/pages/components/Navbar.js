import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "../styles/global.css"

export default function Navbar() {
  const [showMenu, setShowMenu] = useState([false])
  let menu
  if (!showMenu) {
    menu = (
      <div className="navLinksSide">
        <li>
          <a href="/">HOME</a>
        </li>
        <li>
          <a href="/writing">WRITING</a>
        </li>
        <li>
          <a href="/coding" target="_blank">
            FRONT-END DEV
          </a>
        </li>
        <li>
          <a href="/podcasting">PODCASTING</a>
        </li>
        <li>
          <a href="/music">MUSIC</a>
        </li>
        <li>
          <a href="/contact">CONTACT</a>
        </li>
      </div>
    )
  }
  return (
    <>
      <div>
        <FontAwesomeIcon
          icon={faBars}
          className="burger"
          onClick={() => setShowMenu(!showMenu)}
        />
      </div>
      <div>{menu}</div>
    </>
  )
}
