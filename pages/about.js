import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faYoutubeSquare } from '@fortawesome/free-brands-svg-icons'

import styles from '../components/About.module.css';

export default function About() {
    return (
        <div id={styles.container}>
            <section id={styles.banner}>
                <header>About Me</header>
                <p>
                    I&apos;m <Link href="/about"><a>Matt</a></Link>, and <Link href="/projects"><a>I solve problems</a></Link>.
                </p>
            </section>
            <section id={styles.mission}>
                <header>Mission Statement</header>
                I&apos;m constantly looking for ways a task can be completed better, faster and smarter
                from turning complex travel visa application processing regulations
                into a simple Choose Your Own Adventure-style question and answer interface
                to transforming a cryptic and illegible task view
                into a user-friendly big-screen live dashboard
                I spot problems, take the initiative, and build solutions that make a real impact.
            </section>
            <section id={styles.personal}>
                <header>
                    Some Facts About Me
                </header>
                <ul>
                    <li>
                        I have 10 guinea pigs. They do code review in return for pea flakes.
                    </li>
                    <li>
                        I&apos;m a decent cook - I was known as the &lsquo;Chief Diet Ruiner&rsquo; while working in the Civil Service, but
                        now focus on tasty but healthy food, leaning towards Korean-style cuisine.
                    </li>
                    <li>
                        I have carved a longbow, blown glass for neon lights, canoed around Lake Kotor in Montenegro and
                        presented a conference paper in Spain.
                    </li>
                    <li>
                        I sometimes listen to:
                        <br />
                        <a
                            href="https://www.youtube.com/watch?v=qnzurkSGBCs&list=PLjB-MA1-wfwjeVwlW2RgCFzsfTH3y-Lnk">
                            <FontAwesomeIcon icon={faYoutubeSquare} /> Metal Playlist</a>
                        <br />
                        <a
                            href="https://www.youtube.com/watch?v=zBGnXhvn2Q4&list=PLjB-MA1-wfwiAT_RAdAZUcIlb4PbfgmHP">
                            <FontAwesomeIcon icon={faYoutubeSquare} /> Classical Playlist</a>
                        <br />
                        <a
                            href="https://www.youtube.com/watch?v=SNo7jTKggs4&list=PLjB-MA1-wfwgy2FjyrmP-1VnA_RynuWKd">
                            <FontAwesomeIcon icon={faYoutubeSquare} /> K-Pop Playlist</a>*
                        <br />
                        * With headphones - I&apos;m not <em>that</em> evil...
                    </li>
                </ul>
            </section >
        </div >
    )
}