import { PostMetadata } from "../services/posts";
import styles from "../styles/PostContents.module.css";
import md from "markdown-it";
import Link from "./link";
import CoverImage from "./cover_image";

const PostContents = ({
    metadata,
    content,
}: {
    metadata: PostMetadata;
    content?: string;
}) => {
    const previewContent = !content
        ? `${metadata.preview}
    
[Continue reading →](${`/blog/${metadata.slug}`})`
        : content;

    return (
        <div className={styles["blog-preview-root"]}>
            <Link href={`/blog/${metadata.slug}`}>
                <a href={`/blog/${metadata.slug}`}>
                    <h1>{metadata.title}</h1>
                </a>
            </Link>
            <div className={styles.metadata}>
                {metadata.date.toLocaleDateString()}
            </div>
            <CoverImage post={metadata} />
            <div
                className={styles["preview-text"]}
                dangerouslySetInnerHTML={{
                    __html: md().render(previewContent),
                }}
            />
        </div>
    );
};

export default PostContents;
