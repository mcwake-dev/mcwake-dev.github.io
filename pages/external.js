import Link from 'next/link';
import Image from 'next/image';

import styles from '../components/External.module.css';

export default function External() {
    return (
        <div id={styles.container}>
            <section id={styles.banner}>
                <header>External Links & Profiles</header>
                <p>
                    For further information about me and my activities, please see the links below.
                </p>
            </section>
            <main id={styles.externalLinks}>
                <article>
                    <header>GitHub</header>
                    <p>
                        My current coding projects are stored on Github. Please check out the Issues and Project kanban boards to see what I&apos;m actively working on.
                    </p>
                    <footer>
                        <Link href="https://github.com/mcwake-dev">
                            <a>My GitHub Profile</a>
                        </Link>
                    </footer>
                </article>
                <article>
                    <header>CodeWars</header>
                    <p>
                        I am actively completing katas on CodeWars. Take a look at my solutions!
                    </p>
                    <footer>
                        <Link href="https://www.codewars.com/users/mcsqwu">
                            <a>My CodeWars Profile</a>
                        </Link>
                    </footer>
                </article>
                <article>
                    <header>FreeCodeCamp</header>
                    <p>
                        I&apos;ve completed many of the exercises on FreeCodeCamp. Have a look here.
                    </p>
                    <ul>
                        <li>
                            <Link href="https://www.freecodecamp.org/certification/fcc2ad59fa6-ae7f-4044-b8f5-8bcc81813930/responsive-web-design">
                                <a>Responsive Web Design Certification</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.freecodecamp.org/certification/fcc2ad59fa6-ae7f-4044-b8f5-8bcc81813930/javascript-algorithms-and-data-structures">
                                <a>JavaScript Data Structures and Algorithms Certification</a>
                            </Link>
                        </li>
                    </ul>
                    <footer>
                        <Link href="https://www.freecodecamp.org/fcc2ad59fa6-ae7f-4044-b8f5-8bcc81813930">
                            <a>My FreeCodeCamp Profile</a>
                        </Link>
                    </footer>
                </article>
            </main>
        </div>
    );
}