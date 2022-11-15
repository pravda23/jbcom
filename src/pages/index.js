import React from "react"
import Layout from "./components/Layout"
import "./styles/global.css"

export default function Home() {
  return (
    <Layout>
      <img
        className="background-img"
        src="https://johnbartmann.com/gatsby-site/images/headshot.jpg"
      />
      <div>
        <main className="home-wrapper">
          <h1>Let your work speak for you.</h1>
          <br />
          <ul>
            <h3>
              <a href="/coding">Web apps</a> for audio publishers.
            </h3>
            <br />
            <h3>
              <a href="/writing">Content writing</a> for brands and blogs.
            </h3>
            <br />
            <h3>
              <a href="/podcasting">Podcast production</a> &{" "}
              <a href="/music">Creative Commons music</a>.
            </h3>
          </ul>
          <br />
          <h1>
            <a href="/contact">Contact.</a>
          </h1>
        </main>
      </div>
    </Layout>
  )
}
