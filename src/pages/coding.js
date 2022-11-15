import React from "react"
import Layout from "./components/Layout"

export default function Coding() {
  return (
    <Layout>
      <div className="wrapper">
        <main>
          <div className="main">
            <h1>Web development</h1>
            <br />
            <h3>Creative browser experiences.</h3>
            <br />
            <ul>
              <li>
                <a
                  href="https://adorable-sherbet-f9ff21.netlify.app/"
                  target="_blank"
                  rel="noopener"
                >
                  <strong>Needledrop</strong>
                </a>{" "}
                is an audio player SPA which allows for continuous playback
                while browsing.
              </li>
              <br />
              <li>
                <a
                  href="https://sprightly-dragon-a02641.netlify.app/"
                  target="_blank"
                  rel="noopener"
                >
                  <strong>Whether...?</strong>
                </a>{" "}
                is a simple weather forecast app (ReactJS).
              </li>
              <br />
              <li>
                <a
                  href="https://houtbaysound.com/"
                  target="_blank"
                  rel="noopener"
                >
                  <strong>Hout Bay Sound</strong>
                </a>{" "}
                and{" "}
                <a
                  href="https://elegant-chebakia-666a3b.netlify.app/"
                  target="_blank"
                  rel="noopener"
                >
                  <strong>TeachTech</strong>
                </a>{" "}
                are simple corporate brochure sites (Javascript, HTML, CSS).
              </li>

              <br />
              <li>
                My first ever web app:{" "}
                <strong>
                  <a
                    href="https://animated-mooncake-37e518.netlify.app/"
                    target="_blank"
                  >
                    Rock Paper Scissors.
                  </a>
                </strong>
              </li>
              <br />
            </ul>
          </div>
        </main>
      </div>
    </Layout>
  )
}
