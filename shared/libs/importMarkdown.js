import fs from 'fs'
import path from 'path'
import matter from 'gray-matter';

export function importMarkdownFrontMatter(folder) {
    let markdownData = [];

    // Check if file path exists and is a directory
    if (fs.existsSync(folder) && fs.lstatSync(folder).isDirectory()) {
        const markdownFiles = fs.readdirSync(path.join(folder));
        markdownData = markdownFiles.map(filename => {
            const slug = filename.replace('.md', '');
            const markdownWithMeta = fs.readFileSync(path.join(folder, filename), 'utf-8');
            const {data:frontmatter} = matter(markdownWithMeta);

            return {
                slug,
                frontmatter,
            }
        });
    }
    
    return markdownData;
}

export function generateStaticPaths(folder) {
    const files = fs.readdirSync(path.join(folder))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return paths;
}

export function importMarkdownFileContent(folder, slug) {
    const markdownWithMeta = fs.readFileSync(path.join(folder, slug + '.md'));
    const { data: frontmatter, content } = matter(markdownWithMeta);

    return {
        frontmatter,
        slug,
        content
    }
}