import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Link from 'next/link';

import styles from '../../components/Project.module.css';

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
    const files = fs.readdirSync(path.join('projects'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const markdownWithMeta = fs.readFileSync(path.join('projects', slug + '.md'), 'utf-8');
    const { data: frontmatter, content } = matter(markdownWithMeta);
    return {
        props: {
            frontmatter,
            slug,
            content
        }
    }
}