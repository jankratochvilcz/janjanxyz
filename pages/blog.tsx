import { InferGetStaticPropsType, NextPage } from "next";
import fs from "fs"
import Head from "next/head";
import PostPreview from "../components/blog_preview";
import { PageRoot } from "../components/page_root";
import { blogFolder, getPosts, serialize, deserialize } from "../services/posts";
import styles from "../styles/Blog.module.css";

type BlogProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = () => {
    const posts = getPosts(blogFolder, fs.readdirSync, fs.readFileSync);

    return {
        props: {
            posts: serialize(posts)
        },
    };
};

const Blog: NextPage<BlogProps> = ({ posts }: BlogProps) => (
    <PageRoot>
        <Head>
            <title>Jan Kratochvil | Blog</title>
        </Head>
        <div className={styles["blog-list"]}>
            {posts.map((x) => (
                <PostPreview
                    key={x.slug}
                    post={deserialize(x)}
                />
            ))}
        </div>
    </PageRoot>
);

export default Blog;
