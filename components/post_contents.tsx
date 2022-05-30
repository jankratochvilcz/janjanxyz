import { blogFolder, PostMetadata, projectsFolder } from "../services/posts";
import styles from "../styles/PostContents.module.css";
import md from "markdown-it";
import Link from "./link";
import CoverImage from "./cover_image";

export type ContentType = "blog" | "project";

const PostContents = ({
    metadata,
    content,
    contentType,
}: {
    metadata: PostMetadata;
    content?: string;
    contentType: ContentType;
}) => {
    const prefix = contentType === "blog" ? blogFolder : projectsFolder;
    const url = `/${prefix}/${metadata.slug}`;

    const previewContent = !content
        ? `${metadata.preview}
    
[Continue reading →](${url})`
        : content;

    return (
        <div className={styles["blog-preview-root"]}>
            <Link href={url}>
                <a href={url}>
                    <h1>{metadata.title}</h1>
                </a>
            </Link>
            {contentType == "blog" && (
                <div className={styles.metadata}>
                    {metadata.date.toLocaleDateString()}
                </div>
            )}
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
