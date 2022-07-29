import React from "react"
import Layout from "./components/Layout"
import "./styles/global.css"

export default function Home() {
  return (
    <Layout>
      <div className="wrapper">
        <main>
          <div className="main">
            <h1>Go ahead. I'm listening.</h1>
            <br />
            <h3>
              People work with me to{" "}
              <a href="/podcasting">tell better stories using audio</a>.
            </h3>
            <br />
            <h3>
              I also <a href="/writing">write words</a> for those who need more
              online attention.
            </h3>
            <br />
            <h3>
              But most of all, I love making{" "}
              <a href="/music">music for people to use freely</a>.
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
