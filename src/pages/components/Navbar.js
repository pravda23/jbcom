import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBars } from "@fortawesome/free-solid-svg-icons"
import "../styles/global.css"

export default function Navbar() {
  return (
    <div>
      <FontAwesomeIcon icon={faBars} />
    </div>
  )
}
