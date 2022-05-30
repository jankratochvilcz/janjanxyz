import { BlogPostMetadata } from "../services/blogPosts";
import styles from "../styles/BlogPreview.module.css";
import md from "markdown-it";
import Link from "./link";

const BlogPreview = ({ post }: { post: BlogPostMetadata }) => {
    return (
        <div className={styles["blog-preview-root"]}>
            <Link href={`/blog/${post.slug}`}>
                <h2>{post.title}</h2>
            </Link>
            <div className={styles.metadata}>
                {post.date.toLocaleDateString()}
            </div>
            <div
                className={styles["preview-text"]}
                dangerouslySetInnerHTML={{ __html: md().render(post.preview) }}
            />
        </div>
    );
};

export default BlogPreview;
