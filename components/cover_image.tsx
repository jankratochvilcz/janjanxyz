import Image from "next/image";
import { PostMetadata } from "../services/posts";
import styles from "../styles/CoverImage.module.css";

const CoverImage = ({ post }: { post: PostMetadata }) => (
    <div className={styles["image-container"]}>
        <Image
            src={post.image}
            alt={post.title}
            layout={"fill"}
            objectFit={"contain"}
        />
    </div>
);

export default CoverImage;
