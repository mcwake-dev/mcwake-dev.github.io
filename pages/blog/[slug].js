import marked from 'marked';
import Link from 'next/link';

import styles from "../../components/BlogEntry.module.css";
import { generateStaticPaths, importMarkdownFileContent } from '../../shared/libs/importMarkdown';
import { BLOG_MARKDOWN_PATH } from '../../constants/blog'

export default function BlogEntry({ frontmatter: { title, excerpt, tags }, content }) {
    return (
        <div id={styles.container}>
            <Link href="/blog">
                <a>&lt;-- Back to All Entries</a>
            </Link>
            <section id={styles.banner}>

                <header>{title}</header>
                <p>
                    <em>{excerpt}</em>
                </p>
            </section>
            <section id={styles.content} dangerouslySetInnerHTML={{ __html: marked(content, { breaks: true }) }}>

            </section>
            <br />
            <Link href="/blog">
                <a>&lt;-- Back to All Entries</a>
            </Link>
        </div>
    );
}

export async function getStaticPaths() {
    const paths = generateStaticPaths(BLOG_MARKDOWN_PATH);

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownContents = importMarkdownFileContent(BLOG_MARKDOWN_PATH, slug);

    return {
        props: markdownContents
    }
}