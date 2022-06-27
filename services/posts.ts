import { parse } from "date-fns";
import matter from "gray-matter";

export type PostMetadata = {
  title: string;
  preview: string;
  date: Date;
  slug: string;
  image: string;
  twitterImage?: string;
};

export type Post = PostMetadata & {
  content: string;
};

export type ReadDirFunc = (folder: string) => string[];
export type ReadFileFunc = (file: string, encoding: BufferEncoding) => string;

export type SerializedPostMetadata = Omit<PostMetadata, "date"> & {
  date: number;
};

export type BlogFolder = "blog";
export type ProjectsFolder = "projects";

export type PostFolders = BlogFolder | ProjectsFolder;

export const getPosts = (
  folder: PostFolders,
  readDir: ReadDirFunc,
  readFile: ReadFileFunc
): PostMetadata[] => {
  const files = readDir(folder);

  const posts = files
    .map((fileName) => {
      const slug = fileName.replace(".md", "");
      const file = readPostFile(folder, fileName, readFile);
      const { data: frontmatter } = matter(file);
      return parseMetadata(slug, frontmatter);
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return posts;
};

export const getPost = (
  folder: PostFolders,
  slug: string,
  readFile: ReadFileFunc
): Post => {
  const file = readPostFile(folder, slug + ".md", readFile);

  const { data: frontmatter, content } = matter(file);

  return {
    content,
    ...parseMetadata(slug, frontmatter),
  };
};

export const serialize = (x: PostMetadata): SerializedPostMetadata => ({
  ...x,
  date: x.date.getTime(),
});

export const deserialize = (x: SerializedPostMetadata): PostMetadata => ({
  ...x,
  date: new Date(x.date),
});

const readPostFile = (
  folder: string,
  fileName: string,
  readFile: ReadFileFunc
) => readFile(`${folder}/${fileName}`, "utf-8");

const parseMetadata = (
  slug: string,
  frontmatter: { [key: string]: any }
): PostMetadata => ({
  slug,
  title: frontmatter["title"],
  date: parse(frontmatter["date"], "yyyy-MM-dd", new Date()),
  preview: frontmatter["preview"],
  image: frontmatter["coverImage"],
  twitterImage: frontmatter["twitterImage"] ?? null,
});
