import React from "react"
import Layout from "./components/Layout"
import "./styles/global.css"

export default function Home() {
  return (
    <Layout>
      <div className="wrapper">
        <main>
          <div className="main">
            <h1>Hello. Welcome to my creative work.</h1>
            <br />
            <h3>
              I work with teams producing{" "}
              <a href="/podcasting">podcasts & audio fictino</a>.
            </h3>
            <br />
            <h3>
              I'm learning{" "}
              <a href="https://github.com/pravda23" target="_blank">
                front-end web dev
              </a>{" "}
              fast (React, mainly).
            </h3>
            <br />
            <h3>
              My <a href="/writing">content writing</a> keeps blogs fresh.
            </h3>
            <br />
            <h3>
              People use my <a href="/music">music</a> in their productions.
            </h3>
            <br />
            <br />
            <h3>
              <a href="/contact">Contact me.</a>
            </h3>
          </div>
        </main>
      </div>
    </Layout>
  )
}
