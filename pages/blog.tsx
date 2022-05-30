import { InferGetStaticPropsType, NextPage } from "next";
import Head from "next/head";
import BlogPreview from "../components/blog_preview";
import { PageRoot } from "../components/page_root";
import { blogFolder, getPosts } from "../services/posts";
import styles from "../styles/Blog.module.css";

type BlogProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = () => {
    const posts = getPosts(blogFolder);

    return {
        props: {
            posts: posts.map((x) => ({
                ...x,
                date: x.date.getTime(),
            })),
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
                <BlogPreview
                    key={x.slug}
                    post={{ ...x, date: new Date(x.date) }}
                />
            ))}
        </div>
    </PageRoot>
);

export default Blog;
