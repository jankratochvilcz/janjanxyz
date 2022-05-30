import { PostMetadata } from "../services/posts";
import styles from "../styles/PostPreview.module.css";
import md from "markdown-it";
import Link from "./link";
import Image from "next/image";

const PostPreview = ({ post }: { post: PostMetadata }) => {
    const previewContent = `${post.preview}
    
[Continue reading →](${`/blog/${post.slug}`})`

    return (
        <div className={styles["blog-preview-root"]}>
            <Link href={`/blog/${post.slug}`}>
                <h2>{post.title}</h2>
            </Link>
            <div className={styles.metadata}>
                {post.date.toLocaleDateString()}
            </div>
            <div className={styles["image-container"]}>
                <Image
                    src={post.image}
                    alt={post.title}
                    layout={"fill"}
                    objectFit={"contain"}
                />
            </div>

            <div
                className={styles["preview-text"]}
                dangerouslySetInnerHTML={{ __html: md().render(previewContent) }}
            />
        </div>
    );
};

export default PostPreview;
