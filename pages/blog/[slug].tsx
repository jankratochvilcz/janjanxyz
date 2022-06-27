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
}) => {
  const siteUrl = getConfiguration().siteUrl;
  const imagePath = new URL(post.image, siteUrl).href;
  const twitterImagePath = "https://uploads-ssl.webflow.com/61d29950a0018f45f59df443/62ac13b76ffa40b5dc2dcb28_graphimage2.jpg"
  const canonicalUrl = new URL(path.join("blog", post.slug), siteUrl).href;

  return (
    <PageRoot>
      <Head>
        <title>{post.title} | Jan Kratochvil TEST</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jankratochvilcz" />
        <meta name="twitter:title" content={post.title} />
        {twitterImagePath && (
          <>
            <meta property="og:image" content={twitterImagePath} />
            <meta property="twitter:image" content={twitterImagePath} />
            <meta name="og:image:alt" content={post.title} />
          </>
        )}
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
};

export default Post;
