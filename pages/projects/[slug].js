import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';
import Link from 'next/link';

import styles from '../../components/Project.module.css';

export default function Project({ frontmatter: { title, data, cover_image }, slug, content }) {
    return (
        <div id={styles.container}>
            <section id={styles.banner}>
                <Link href="/projects">
                    <a>&lt;-- Back to Projects</a>
                </Link>
                <header>{title}</header>
                
            </section>
            <section id={styles.content}>

            </section>
            <section id={styles.back}>

            </section>
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