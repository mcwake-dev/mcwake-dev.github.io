import path from 'path';
import Disqus from 'disqus-react';

import styles from "../../components/BlogEntry.module.css";
import { generateStaticPaths, importMarkdownFileContent } from '../../shared/libs/importMarkdown';
import { BLOG_DISQUS_HOST, BLOG_DISQUS_SHORTNAME, BLOG_MARKDOWN_PATH } from "../../constants/blog";

export default function BlogEntry({ frontmatter: { title, excerpt, tech_used }, content }) {
    const disqusConfig = {
        url: path.join(BLOG_DISQUS_HOST, 'bob'),
        identifier: path.join(BLOG_DISQUS_HOST, 'bob'),
        title
    }
    
    return (
        <div id={styles.container}>
            <Disqus.DiscussionEmbed
                shortname='BLOG_DISQUS_SHORTNAME'
                config={disqusConfig}
            />
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