import marked from 'marked';
import Link from 'next/link';

import styles from '../../components/Project.module.css';
import { generateStaticPaths, importMarkdownFileContent } from '../../shared/libs/importMarkdown';
import { PROJECT_MARKDOWN_PATH } from '../../constants/project';

export default function Project({ frontmatter: { title, excerpt, tech_used }, content }) {
    return (
        <div id={styles.container}>
            <section id={styles.banner}>
                <Link href="/projects">
                    <a>&lt;-- Back to Projects</a>
                </Link>
                <header>{title}</header>
                <p>
                    <em>{excerpt}</em>
                </p>
                <br />
                <aside>
                    <b>Tech Used: </b> {tech_used}
                </aside>
            </section>
            <section id={styles.content} dangerouslySetInnerHTML={{__html: marked(content, {breaks: true})}}>

            </section>
            <br />
            <Link href="/projects">
                <a>&lt;-- Back to Projects</a>
            </Link>
        </div>
    )
}

export async function getStaticPaths() {
    const paths = generateStaticPaths(PROJECT_MARKDOWN_PATH);

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownContents = importMarkdownFileContent(PROJECT_MARKDOWN_PATH, slug);
    
    return {
        props: markdownContents
    }
}