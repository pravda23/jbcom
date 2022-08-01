import React from "react"
import Layout from "./components/Layout"
import "./styles/global.css"

export default function NotFound() {
  return (
    <Layout>
      <div className="wrapper">
        <main>
          <div className="main">
            <h2>404</h2>
            <p>Sorry, that page doesn't exist.</p>
          </div>
        </main>
      </div>
    </Layout>
  )
}
