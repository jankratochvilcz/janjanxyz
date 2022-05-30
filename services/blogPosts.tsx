import fs from "fs";
import { parse } from "date-fns";
import matter from "gray-matter";

export type BlogPostMetadata = {
    title: string;
    preview: string;
    date: Date;
    slug: string;
};

export type BlogPost = BlogPostMetadata & {
    content: string;
};

const postsFolder = "blog";

export const getBlogPosts = (): BlogPostMetadata[] => {
    const files = fs.readdirSync(postsFolder);

    const posts = files.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = readBlogFile(fileName);
        const { data: frontmatter } = matter(readFile);
        return parseMetadata(slug, frontmatter);
    });

    return posts;
};

export const getBlogPost = (slug: string): BlogPost => {
    const file = readBlogFile(slug + ".md");

    const { data: frontmatter, content } = matter(file);

    return {
        content,
        ...parseMetadata(slug, frontmatter),
    };
};

const readBlogFile = (fileName: string) =>
    fs.readFileSync(`${postsFolder}/${fileName}`, "utf-8");

const parseMetadata = (
    slug: string,
    frontmatter: { [key: string]: any }
): BlogPostMetadata => ({
    slug,
    title: frontmatter["title"],
    date: parse(frontmatter["date"], "yyyy-MM-dd", new Date()),
    preview: frontmatter["preview"],
});
