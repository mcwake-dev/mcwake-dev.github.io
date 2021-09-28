import styles from '../components/Projects.module.css';
import ProjectCard from '../components/ProjectCard';
import { importMarkdownFrontMatter } from '../shared/libs/importMarkdown';
import { PROJECT_MARKDOWN_PATH } from '../constants/project';

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
    const markdownData = importMarkdownFrontMatter(PROJECT_MARKDOWN_PATH);

    return {
      props: {
        projects: markdownData
      }
    }
  }