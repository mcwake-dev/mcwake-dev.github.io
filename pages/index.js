import Head from 'next/head'
import '../node_modules/@fortawesome/fontawesome-svg-core/styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSave, faLink } from '@fortawesome/free-solid-svg-icons'

import '../components/Index.module.css';

export default function Home() {
  return (
    <div>
      <section id="banner">
        <span className="huge">hello world!</span>
        <span className="medium">
          I'm <span className="highlight-underline">Matt</span>, and <span className="highlight-underline">I solve
            problems</span>.
        </span>
      </section>
      <section id="about" className="main-link">
        <a aria-current="page" href="./about">
          <FontAwesomeIcon className="big-icon" icon={faUser} size="5x" />
          <br />
          About Me
        </a>
      </section>
      <section id="projects" className="main-link">
        <a aria-current="page" href="./projects">
          <FontAwesomeIcon className="big-icon" icon={faSave} size="5x" />
          <br />
          Projects
        </a>
      </section>
      <section id="external" className="main-link">
        <a aria-current="page" href="./external">
          <FontAwesomeIcon className="big-icon" icon={faLink} size="5x" />
          <br />
          External Links
        </a>
      </section>
    </div>
  )
}
