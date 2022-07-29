import React from "react"
import Layout from "./components/Layout"
import "./styles/global.css"

export default function Podcasting() {
  return (
    <Layout>
      <div className="wrapper">
        <main>
          <div className="main">
            <h1>Podcasting</h1>
            <h3>
              Immersive audio production. Podcasts with rich sound design and
              original cinematic music.
            </h3>
            <br />
            <ul>
              <li>
                <strong>How I Make Music</strong> | Production, music
                composition for podcast series How I Make Music |{" "}
                <a
                  href="https://howimakemusic.com"
                  target="_blank"
                  rel="noopener"
                >
                  More
                </a>
              </li>
              <br />
              <li>
                <strong>The LaFresian Chronicles | </strong>Narrative musical
                scoring for audio fiction series |{" "}
                <a
                  href="https://pod.link/lafresiaaudio"
                  target="_blank"
                  rel="noopener"
                >
                  More
                </a>
                <strong />
              </li>
              <br />
              <li>
                Think, African
                <strong />
                 | Production, music composition for true crime podcast series
                by Sound Africa |{" "}
                <a
                  href="https://za.boell.org/en/2021/05/25/think-african"
                  target="_blank"
                  rel="noopener"
                >
                  More
                </a>
              </li>
              <br />

              <li>
                <strong>One Night In Snake Park</strong> | Music composition for
                true crime podcast series by Sound Africa |{" "}
                <a
                  href="https://onenightinsnakepark.com/"
                  target="_blank"
                  rel="noopener"
                >
                  More
                </a>
              </li>
              <br />
              <li>
                <strong>Alibi</strong> | Co-production, music composition for
                true crime podcast series by Volume Media |{" "}
                <a
                  href="https://www.volume.africa/alibi"
                  target="_blank"
                  rel="noopener"
                >
                  More
                </a>
              </li>
              <br />
              <li>
                <strong>Theatreland</strong> | Co-production for VoiceMap audio
                tour starring Ian McKellen |{" "}
                <a
                  href="https://voicemap.me/tour/london/theatreland-tour-with-ian-mckellen"
                  target="_blank"
                  rel="noopener"
                >
                  More
                </a>
              </li>
              <li>
                <strong>ImmersivePodcasting.com</strong> | Website and mailing
                list for creators of scripted podcasts |{" "}
                <a
                  href="https://immersivepodcasting.com"
                  target="_blank"
                  rel="noopener"
                >
                  More
                </a>
              </li>
              <br />
            </ul>
            <br />
            <h1>
              <strong>Audio production tools</strong>
            </h1>
            <br />
            <h3>Some of the stuff I use on team projects</h3>
            <br /> DAWs
            <ul>
              <li>Hindenberg Broadcast Pro</li>
              <li>Reaper</li>
              <li>Adobe Audition</li>
              <li>Ableton Live</li>
              <li>Audacity</li>
              <li>VCV Rack</li>
            </ul>
            <br /> AUDIO REPAIR
            <ul>
              <li>Izotope RX8</li>
            </ul>
            <br /> MUSIC COMPOSITION
            <ul>
              <li>Native Instruments Komplete</li>
              <li>Guitars, violins, keyboards</li>
            </ul>
            <br />
            PODCAST PUBLISHING
            <ul>
              <li>TRANSCRIPTS - Descript</li>
              <li>AUDIOGRAMS - Veed.io</li>
              <li>VIDEO - Adobe Premiere Pro</li>
              <li>IMAGES - Adobe Photoshop</li>
            </ul>
          </div>
        </main>
      </div>
    </Layout>
  )
}
