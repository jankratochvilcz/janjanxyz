import { PostMetadata } from "../services/posts";
import styles from "../styles/PostList.module.css";
import PostContents from "./post_contents";

const PostList = ({posts}: {posts: PostMetadata[]}) => (
    <div className={styles["blog-list"]}>
            {posts.map((x) => (
                <PostContents
                    key={x.slug}
                    metadata={x}
                />
            ))}
        </div>
)

export default PostList;