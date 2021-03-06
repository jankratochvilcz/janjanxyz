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
  getPostTwitterShareUrl,
  getPostLinkedInShareUrl,
} from "../../services/posts";
import styles from "../../styles/Post.module.css";
import Head from "next/head";
import Image from "next/image";
import { toStaticProps } from "../../utils/staticPropHelpers";
import PostContents from "../../components/post_contents";
import { getConfiguration } from "../../services/configuration";
import path from "path";
import { BLOG_TWITTER_HANDLE } from "../../const/strings";
import SocialIcon from "../../components/social_icon";

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

const AUTHOR_IMAGE_DIMENSIONS = 128;

const Post: NextPage<BlogProps> = ({
  post,
}: {
  post: SerializedPostMetadata & Pick<Post, "content">;
}) => {
  const siteUrl = getConfiguration().siteUrl;
  const imagePath = new URL(post.image, siteUrl).href;
  const twitterImagePath = post.twitterImage
    ? new URL(post.twitterImage, siteUrl).href
    : undefined;
  const canonicalUrl = new URL(path.join("blog", post.slug), siteUrl).href;

  return (
    <PageRoot>
      <Head>
        <title>{post.title} | Jan Kratochvil</title>
        <meta property="og:title" content={post.title} />
        <meta property="og:description" content={post.preview} />
        <meta property="og:url" content={canonicalUrl} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@jankratochvilcz" />
        <meta name="twitter:title" content={post.title} />
        <meta name="twitter:description" content={post.preview} />
        {twitterImagePath && (
          <>
            <meta
              name="og:image"
              property="og:image"
              content={twitterImagePath}
            />
            <meta name="og:image:alt" content={post.title} />
            <meta name="og:image:width" content="1200" />
            <meta name="og:image:height" content="628" />
          </>
        )}
      </Head>
      <div className={styles["blog-root"]}>
        <PostContents
          metadata={deserialize(post)}
          content={post.content}
          contentType={"blog"}
        />
        <div className={styles["share-buttons"]}>
          <SocialIcon
            href={getPostTwitterShareUrl(post.slug, post.title, "blog")}
            alt="Twitter profile link"
            src="/social/social-1_logo-twitter.svg"
          />
          <SocialIcon
            href={getPostLinkedInShareUrl(post.slug, "blog")}
            alt="LinkedIn profile link"
            src="/social/social-1_logo-linkedin.svg"
          />
        </div>
        <div className={styles["about-author"]}>
          <a href={`https://twitter.com/${BLOG_TWITTER_HANDLE}`}>
            <Image
              src="/social/author.jpg"
              alt="Author picture"
              width={AUTHOR_IMAGE_DIMENSIONS}
              height={AUTHOR_IMAGE_DIMENSIONS}
            />
          </a>
        </div>
      </div>
    </PageRoot>
  );
};

export default Post;
