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
} from "../../services/posts";
import styles from "../../styles/Post.module.css";
import Head from "next/head";
import { toStaticProps } from "../../utils/staticPropHelpers";
import PostContents from "../../components/post_contents";
import { getConfiguration } from "../../services/configuration";
import path from "path";

type BlogProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticPaths: GetStaticPaths = () => {
  const posts = getPosts("blog", fs.readdirSync, fs.readFileSync);

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
  const post = getPost("blog", slug, fs.readFileSync);
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
      <meta property="og:title" content={post.title} />
      <meta property="og:image" content={path.join(getConfiguration().siteUrl, post.image)} />
      <meta property="og:description" content={post.preview} />
    </Head>
    <div className={styles["blog-root"]}>
      <PostContents
        metadata={deserialize(post)}
        content={post.content}
        contentType={"blog"}
      />
      <div className={styles["ijou"]}>～　以上　～</div>
    </div>
  </PageRoot>
);

export default Post;
