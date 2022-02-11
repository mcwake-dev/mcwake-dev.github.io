import { BLOG_MARKDOWN_PATH } from '../constants/blog';
import { importMarkdownFrontMatter } from '../shared/libs/importMarkdown';

import styles from "../components/Blog.module.css";
import BlogCard from '../components/BlogCard';

export default function Blog({entries}) {
    const sortedEntries = entries.sort((a, b) => {
        const aDate = new Date(a.frontmatter.date_published, "dd/mm/yyyy");
        const bDate = new Date(b.frontmatter.date_published, "dd/mm/yyyy");

        return bDate.getUTCMilliseconds() - aDate.getUTCMilliseconds();
    });

    return (
        <div id={styles.container}>
            <section id={styles.banner}>
                <header>Blog</header>
            </section>
            <main id={styles.entries}>
                {sortedEntries.map((entry, index) => (
                    <BlogCard key={index} entry={entry} />
                ))}
            </main>
        </div>
    )
}

export async function getStaticProps() {
    const markdownData = importMarkdownFrontMatter(BLOG_MARKDOWN_PATH);

    return {
        props: {
            entries: markdownData
        }
    }
}