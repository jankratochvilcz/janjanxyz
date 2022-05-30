import { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next";
import { PageRoot } from "../../components/page_root";
import { BlogPost, getBlogPost, getBlogPosts } from "../../services/blogPosts";
import md from "markdown-it";
import styles from "../../styles/BlogPost.module.css";

type BlogProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths: GetStaticPaths = () => {
    const posts = getBlogPosts();

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
    const post = getBlogPost(slug);

    return {
        props: {
            post: {
                ...post,
                date: post.date.getTime(),
            },
        },
    };
};

const BlogPost: NextPage<BlogProps> = ({ post }: { post: BlogPost }) => (
    <PageRoot>
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

export default BlogPost;
