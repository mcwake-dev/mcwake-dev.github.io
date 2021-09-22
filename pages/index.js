import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSave, faLink } from '@fortawesome/free-solid-svg-icons'

import styles from '../components/Index.module.css'

export default function Home() {
  return (
    <div id={styles.container}>
      <section id={styles.banner}>
        <header>hello world!</header>
        <p>
          I'm <Link href="/about"><a>Matt</a></Link>, and <Link href="/projects"><a>I solve problems</a></Link>.
        </p>
      </section>
      <section id={styles.about}>
        <Link href="/about">
          <a>
            <FontAwesomeIcon icon={faUser} size="10x" />
            <br />
            <br />
            About Me
          </a>
        </Link>
      </section>
      <section id={styles.projects}>
        <Link href="/projects">
          <a>
            <FontAwesomeIcon icon={faSave} size="10x" />
            <br />
            <br />
            Projects
          </a>
        </Link>
      </section>
      <section id={styles.external}>
        <Link href="/external">
          <a>
            <FontAwesomeIcon icon={faLink} size="10x" />
            <br />
            <br />
            External
          </a>
        </Link>
      </section>
    </div>
  )
}
