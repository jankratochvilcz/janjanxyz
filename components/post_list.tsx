import { PostMetadata } from "../services/posts";
import styles from "../styles/PostList.module.css";
import PostContents, { ContentType } from "./post_contents";

const PostList = ({posts, contentType}: {posts: PostMetadata[], contentType: ContentType}) => (
    <div className={styles["blog-list"]}>
            {posts.map((x) => (
                <PostContents
                    contentType={contentType}
                    key={x.slug}
                    metadata={x}
                />
            ))}
        </div>
)

export default PostList;