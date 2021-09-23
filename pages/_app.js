import Head from 'next/head'
import Link from 'next/link'

import '../styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Matthew C Wake - Portfolio</title>
        <link rel="apple-touch-icon" href="img/favicons/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" href="img/favicons/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="img/favicons/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="manifest" href="img/favicons/manifest.json" />
        <link rel="icon" href="img/favicons/favicon.ico" />
      </Head>
      <header id="main-header">
        <div id="brand">
          <Link href="/">
            <a>
              [matt@mcw-portfolio ~]$
            </a>
          </Link>
        </div>
        <nav id="nav">
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/projects">
            <a>Projects</a>
          </Link>
          <Link href="/external">
            <a>External</a>
          </Link>
        </nav>
      </header>
      <main id="main">
        <Component {...pageProps} />
      </main>
      <footer id="main-footer">
        Copyright &copy; Matthew C Wake 2021 - All Rights Reserved - Built using <a href="https://nextjs.org/">Next.js</a> and <a href="https://www.markdownguide.org/basic-syntax/">Markdown</a>
      </footer>
    </div>
  )
}

export default MyApp
