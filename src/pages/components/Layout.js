import React from "react"
import Header from "./Header"
import Navbar from "./Navbar"
import Footer from "./Footer"
import "../styles/global.css"

export default function Layout({ children }) {
  return (
    // <div className="body">
    <div className="layout">
      <Header />
      <div className="content">{children}</div>
      <Footer />
    </div>
    // </div>
  )
}
