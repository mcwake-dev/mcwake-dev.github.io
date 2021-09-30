import Link from 'next/link';
import styles from './BlogCard.module.css';

export default function BlogCard({entry}) {
    const {title, excerpt} = entry.frontmatter;

    return (
        <article className={styles.blogCard}>
            <header>{title}</header>
            <p>
                {excerpt}
            </p>
            <div className={styles.blogLink}>
                <Link href={`/blog/${entry.slug}`}>
                    <a>Read more...</a>
                </Link>
            </div>
        </article>
    )
}