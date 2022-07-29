import React from "react"
import Layout from "./components/Layout"

export default function Contact() {
  return (
    <Layout>
      <div className="wrapper">
        <main>
          <div className="main">
            <h1>Contact</h1>
            <br />
            <h3>I like meeting new people.</h3>
            <br />
            <ul>
              <li>
                <strong>email </strong>
                <a
                  href="mailto:music@johnbartmann.com"
                  target="_blank"
                  rel="noopener"
                >
                  music@johnbartmann.com
                </a>
              </li>
              <br />

              <li>
                <strong>discord </strong>
                <a
                  href="https://discord.com/users/461833114747011072"
                  target="_blank"
                  rel="noopener"
                >
                  johnb#1341
                </a>
              </li>
              <br />

              <li>
                <strong>twitter </strong>
                <a
                  href="https://twitter.com/johnisthemusic/"
                  target="_blank"
                  rel="noopener"
                >
                  @johnisthemusic
                </a>
              </li>
              <br />
            </ul>
          </div>
        </main>
      </div>
    </Layout>
  )
}
