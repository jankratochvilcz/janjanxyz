import classNames from "classnames";
import Image from "next/image";
import { PostMetadata } from "../services/posts";
import styles from "../styles/CoverImage.module.css";

const CoverImage = ({
  post,
  className,
}: {
  post: PostMetadata;
  className?: string;
}) => (
  <div className={classNames(styles["image-container"], className)}>
    <Image
      src={post.image}
      alt={post.title}
      layout={"fill"}
      objectFit={"contain"}
    />
  </div>
);

export default CoverImage;
