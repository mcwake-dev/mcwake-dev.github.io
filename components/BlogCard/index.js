import Link from 'next/link';
import styles from './BlogCard.module.css';

export default function BlogCard({entry}) {
    const {title, excerpt, date_published} = entry.frontmatter;

    return (
        <article className={styles.blogCard}>
            <header>
                {title}
                <br />
                <em>Published {date_published}</em>
            </header>
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