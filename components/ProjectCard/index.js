import Link from 'next/link';
import Image from 'next/image';

import styles from './ProjectCard.module.css';

export default function ProjectCard({project}) {
    const { cover_image, title, excerpt } = project.frontmatter;
    return (
        <article className={styles.projectCard}>
            <div className={styles.imageContainer}>
                <Image src={cover_image} alt="" layout="fill" className={styles.image} />
            </div>
            <header className={styles.banner}>{title}</header>
            <p>
                {excerpt}
            </p>
            <div className={styles.projectLink}>
                <Link href={`/projects/${project.slug}`}>
                    <a>Read more...</a>
                </Link>
            </div>
        </article>
    );
}