import React from "react"
import Layout from "./components/Layout"
import "./styles/global.css"

export default function Music() {
  return (
    <Layout>
      <div className="wrapper">
        <main>
          <div className="main">
            <h1>Music</h1>
            <br />

            <h3>Creative Commons soundtracks and comedic themes</h3>
            <br />
            <ul>
              <li>
                <a
                  href="https://youtube.com/c/johnbartmannmusic"
                  target="_blank"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://open.spotify.com/artist/3ZkQ69zxOePFLOGLj0N15C"
                  target="_blank"
                >
                  Spotify
                </a>
              </li>
              <li>
                <a
                  href="https://music.apple.com/us/artist/john-bartmann/1081298778"
                  target="_blank"
                >
                  Apple Music
                </a>
              </li>
              <li>
                <a
                  href="https://music.amazon.com/artists/B071YYY529/john-bartmann"
                  target="_blank"
                >
                  Amazon Music
                </a>
              </li>
              <li>
                <a href="https://johnbartmann.bandcamp.com" target="_blank">
                  Bandcamp
                </a>
              </li>
              <li>
                <a
                  href="https://freemusicarchive.org/music/John_Bartmann/"
                  target="_blank"
                >
                  Free Music Archive
                </a>
              </li>
              <li>
                <a
                  href="https://soundcloud.com/johnbartmannmusic/"
                  target="_blank"
                >
                  Soundcloud
                </a>
              </li>
            </ul>
            <br />
            <a
              href="https://docs.google.com/spreadsheets/d/1lSEnqwGfV7shU5GsO8Cf6FSbFAf73gCFOlyzhbLuamo/edit#gid=1537321504"
              target="_blank"
            >
              Music library metadata
            </a>
            <br />
            <br />
            <h3>Other music projects</h3>
            <br />
            <ul>
              <li>
                <a href="https://pravdaofficial.com" target="_blank">
                  Pravda - songwriting and production
                </a>
              </li>
              <li>
                <a
                  href="https://dnamusik.sourceaudio.com/album/3646849."
                  target="_blank"
                >
                  DNA Muzik (Munich) - library music
                </a>
              </li>
              <li>
                <a href="https://thegreatgatsbys.com" target="_blank">
                  The Great Gatsbys - cheesy wedding band
                </a>
              </li>
            </ul>
          </div>
        </main>
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
        <script
          type="text/javascript"
          src="https://cdn.datatables.net/1.12.1/js/jquery.dataTables.min.js"
        ></script>
        <script src="app.js"></script>
      </div>
    </Layout>
  )
}
