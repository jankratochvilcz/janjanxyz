import { PostFolders, PostMetadata } from "../services/posts";
import styles from "../styles/PostContents.module.css";
import mdHighlightJs from "markdown-it-highlightjs";
import Link from "./link";
import CoverImage from "./cover_image";
import md from "markdown-it";
import "highlight.js/styles/github.css";

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
  const prefix: PostFolders = contentType === "blog" ? "blog" : "projects";
  const url = `/${prefix}/${metadata.slug}`;

  const previewContent = !content
    ? `${metadata.preview}
    
[Continue reading →](${url})`
    : content;

  const renderer = md();
  renderer.use(mdHighlightJs);

  return (
    <div className={styles["blog-preview-root"]}>
      <Link href={url}>
        <a href={url}>
          <h1>{metadata.title}</h1>
        </a>
      </Link>
      {contentType == "blog" && (
        <div className={styles.metadata}>{metadata.date.toDateString()}</div>
      )}
      <CoverImage post={metadata} />
      <div
        className={styles["preview-text"]}
        dangerouslySetInnerHTML={{
          __html: renderer.render(previewContent),
        }}
      />
    </div>
  );
};

export default PostContents;
