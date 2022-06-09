import fs from "fs";
import { GetStaticPaths, InferGetStaticPropsType, NextPage } from "next";
import { PageRoot } from "../../components/page_root";
import {
  getPost,
  getPosts,
  serialize,
  deserialize,
  SerializedPostMetadata,
  Post,
  projectsFolder,
} from "../../services/posts";
import styles from "../../styles/Post.module.css";
import Head from "next/head";
import { toStaticProps } from "../../utils/staticPropHelpers";
import PostContents from "../../components/post_contents";

type BlogProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getPosts(projectsFolder, fs.readdirSync, fs.readFileSync);

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
  const post = getPost(projectsFolder, slug, fs.readFileSync);
  return toStaticProps({ post: serialize(post) });
};

const Post: NextPage<BlogProps> = ({
  post,
}: {
  post: SerializedPostMetadata & Pick<Post, "content">;
}) => (
  <PageRoot>
    <Head>
      <title>{post.title} | Jan Kratochvil</title>
    </Head>
    <div className={styles["blog-root"]}>
      <PostContents
        metadata={deserialize(post)}
        content={post.content}
        contentType={"project"}
      />
    </div>
  </PageRoot>
);

export default Post;
