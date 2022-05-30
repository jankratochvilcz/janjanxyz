import fs from "fs";
import { parse } from "date-fns";
import matter from "gray-matter";

export type PostMetadata = {
    title: string;
    preview: string;
    date: Date;
    slug: string;
    image: string;
};

export type Post = PostMetadata & {
    content: string;
};

export const blogFolder = "blog";
export const projectsFolder = "projects";

export const getPosts = (folder: string): PostMetadata[] => {
    const files = fs.readdirSync(folder);

    const posts = files.map((fileName) => {
        const slug = fileName.replace(".md", "");
        const readFile = readPostFile(folder, fileName);
        const { data: frontmatter } = matter(readFile);
        return parseMetadata(slug, frontmatter);
    });

    return posts;
};

export const getPost = (folder: string, slug: string): Post => {
    const file = readPostFile(folder, slug + ".md");

    const { data: frontmatter, content } = matter(file);

    return {
        content,
        ...parseMetadata(slug, frontmatter),
    };
};

const readPostFile = (folder: string, fileName: string) =>
    fs.readFileSync(`${folder}/${fileName}`, "utf-8");

const parseMetadata = (
    slug: string,
    frontmatter: { [key: string]: any }
): PostMetadata => ({
    slug,
    title: frontmatter["title"],
    date: parse(frontmatter["date"], "yyyy-MM-dd", new Date()),
    preview: frontmatter["preview"],
    image: frontmatter["image"]
});
