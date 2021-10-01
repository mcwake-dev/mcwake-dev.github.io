import Link from 'next/link';

import TagList from '../../components/TagList';
import styles from './BlogCard.module.css';

export default function BlogCard({entry}) {
    const {title, excerpt, date_published, tags} = entry.frontmatter;
    const tagArr = tags.split(",");

    return (
        <article className={styles.blogCard}>
            <header>
                <Link href={`/blog/${entry.slug}`}>
                    <a>{title}</a>
                </Link>
                <br />
                <em>Published {date_published}</em>
                <br />
                <TagList taglist={tagArr} />
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