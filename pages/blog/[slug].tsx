import { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next";
import { PageRoot } from "../../components/page_root";
import { Post, getPost, getPosts, blogFolder } from "../../services/posts";
import md from "markdown-it";
import styles from "../../styles/BlogPost.module.css";
import Head from "next/head";

type BlogProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths: GetStaticPaths = () => {
    const posts = getPosts(blogFolder);

    return {
        paths: posts.map((x) => ({ params: { slug: x.slug } })),
        fallback: false,
    };
};

export const getStaticProps = ({
    params: { slug },
}: {
    params: { slug: string };
}) => {
    const post = getPost(blogFolder, slug);

    return {
        props: {
            post: {
                ...post,
                date: post.date.getTime(),
            },
        },
    };
};

const BlogPost: NextPage<BlogProps> = ({ post }: { post: Post }) => (
    <PageRoot>
        <Head>
            <title>{post.title} | Jan Kratochvil</title>
        </Head>
        <div className={styles["blog-root"]}>
            <h1>{post.title}</h1>
            <div className={styles.metadata}>
                {new Date(post.date).toLocaleDateString()}
            </div>
            <div
                className={styles["blog-post"]}
                dangerouslySetInnerHTML={{ __html: md().render(post.content) }}
            />
            <div className={styles["ijou"]}>以上</div>
        </div>
    </PageRoot>
);

export default Post;
