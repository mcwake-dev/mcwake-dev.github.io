import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faSave, faLink } from '@fortawesome/free-solid-svg-icons'

import styles from '../components/About.module.css';

export default function About() {
    return (
        <div id={styles.container}>
            <section id={styles.banner}>
                <header>About Me</header>
                <p>
                    I'm <Link href="/about"><a>Matt</a></Link>, and <Link href="/projects"><a>I solve problems</a></Link>.
                </p>
            </section>
            <section id={styles.mission}>
                <p>
                    I'm constantly looking for ways a task can be completed better, faster and smarter
                </p>
                <p>
                    From turning complex travel visa application processing regulations
                    into a simple Choose Your Own Adventure
                </p>
                <p>
                    To transforming a <span className="highlight-bad">cryptic and illegible task view</span>
                </p>
                <p className="solution">
                    Into a <span className="highlight-good">user-friendly big-screen live dashboard</span>
                </p>
                <p>
                    I spot <span className="highlight-bad">problems</span>
                </p>
                <p>
                    Take the <span className="highlight-good">initiative</span>
                </p>
                <p>
                    And <span className="highlight-good">build solutions</span>
                </p>
                <p>
                    That make a <span className="highlight-good">real impact</span>
                </p>
            </section>
            <section id={styles.personal}>
                <span className="medium">
                    Some Facts About Me
                </span>
                <ul>
                    <li>
                        I have 10 guinea pigs. They do code review in return for pea flakes.
                    </li>
                    <li>
                        I'm a decent cook - I was known as the 'Chief Diet Ruiner' while working in the Civil Service, but
                        now focus on tasty but healthy food, leaning towards Korean-style cuisine.
                    </li>
                    <li>
                        I have carved a longbow, blown glass for neon lights, canoed around Lake Kotor in Montenegro and
                        presented a conference paper in Spain.
                    </li>
                    <li>
                        I sometimes listen to Metal, like this: <a
                            href="https://www.youtube.com/watch?v=qnzurkSGBCs&list=PLjB-MA1-wfwjeVwlW2RgCFzsfTH3y-Lnk"><i
                                className="fab fa-youtube"></i> Metal Playlist</a>
                    </li>
                    <li>
                        I sometimes listen to classical, like this: <a
                            href="https://www.youtube.com/playlist?list=PLjB-MA1-wfwiAT_RAdAZUcIlb4PbfgmHP"> <i
                                className="fab fa-youtube"></i> Classical Playlist</a>
                    </li>
                    <li>
                        And I sometimes listen to K-pop (I'm sorry...), like this: <a
                            href="https://www.youtube.com/watch?v=SNo7jTKggs4&list=PLjB-MA1-wfwgy2FjyrmP-1VnA_RynuWKd"><i
                                className="fab fa-youtube"></i> K-Pop Playlist</a>
                    </li>
                </ul>
            </section>
        </div>
    )
}