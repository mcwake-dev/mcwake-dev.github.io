import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faFreeCodeCamp } from "@fortawesome/free-brands-svg-icons";
import styles from "../components/External.module.css";

export default function External() {
  return (
    <div id={styles.container}>
      <section id={styles.banner}>
        <header>External Links &amp; Profiles</header>
        <p>
          For further information about me and my activities, please see the
          links below.
        </p>
      </section>
      <main id={styles.externalLinks}>
        <article>
          <header>
            <FontAwesomeIcon icon={faGithub} /> GitHub
          </header>
          <p>
            My current coding projects are stored on Github. Please check out
            the Issues and Project kanban boards to see what I&apos;m actively
            working on.
          </p>
          <footer>
            <a href="https://github.com/mcwake-dev">My GitHub Profile</a>
          </footer>
        </article>
        <article>
          <header>CodeWars</header>
          <p>
            I am actively completing katas on CodeWars. Take a look at my
            solutions!
          </p>
          <footer>
            <a href="https://www.codewars.com/users/mcsqwu">
              My CodeWars Profile
            </a>
          </footer>
        </article>
        <article>
          <header>Exercism</header>
          <p>Presently I am learning Rust using the Exercism platform.</p>
          <footer>
            <a href="https://exercism.org/profiles/mcwake-dev">
              My Exercism Profile
            </a>
          </footer>
        </article>
        <article>
          <header>
            <FontAwesomeIcon icon={faFreeCodeCamp} /> FreeCodeCamp
          </header>
          <p>
            I&apos;ve completed many of the exercises on FreeCodeCamp! Have a
            look here:
          </p>
          <p>
            <a href="https://www.freecodecamp.org/certification/fcc2ad59fa6-ae7f-4044-b8f5-8bcc81813930/responsive-web-design">
              Responsive Web Design Certification
            </a>
          </p>
          <p>
            <a href="https://www.freecodecamp.org/certification/fcc2ad59fa6-ae7f-4044-b8f5-8bcc81813930/javascript-algorithms-and-data-structures">
              JavaScript Data Structures and Algorithms Certification
            </a>
          </p>
          <footer>
            <a href="https://www.freecodecamp.org/fcc2ad59fa6-ae7f-4044-b8f5-8bcc81813930">
              My FreeCodeCamp Profile
            </a>
          </footer>
        </article>
      </main>
    </div>
  );
}
