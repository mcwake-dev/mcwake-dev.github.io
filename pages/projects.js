import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';
import Link from 'next/link';

import styles from '../components/Projects.module.css';

function ProjectCard({project, slug}) {
    const { cover_image, title, excerpt } = project.frontmatter;
    return (
        <article className={styles.projectCard}>
            <img src={cover_image} />
            <details>
                {excerpt}
                <br />
                <Link href={`/projects/${project.slug}`}>
                    <a>Read more...</a>
                </Link>
            </details>
            <header>{title}</header>
        </article>
    );
}

export default function Projects({projects}) {
    return (
        <div id={styles.container}>
            <section id={styles.banner}>
                <header>Projects</header>
            </section>
            <main id={styles.projects}>
                {projects.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </main>
        </div>
    )
}

export async function getStaticProps() {
    // Get files from projects directory
    const files = fs.readdirSync(path.join('projects'));
  
    // Get slug and front matter from projects
    const projects = files.map(filename => {
      // Create slug
      const slug = filename.replace('.md', '');
      const markdownWithMeta = fs.readFileSync(path.join('projects', filename), 'utf-8');

      const {data:frontmatter} = matter(markdownWithMeta);

      return {
        slug,
        frontmatter,
      }
    });
  
    return {
      props: {
        projects
      }
    }
  }