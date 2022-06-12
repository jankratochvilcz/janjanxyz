import { InferGetStaticPropsType, NextPage } from "next";
import fs from "fs";
import Head from "next/head";
import { PageRoot } from "../components/page_root";
import { getPosts, serialize, deserialize } from "../services/posts";
import PostList from "../components/post_list";
import { toStaticProps } from "../utils/staticPropHelpers";

type BlogProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = () => {
  const posts = getPosts("blog", fs.readdirSync, fs.readFileSync);

  return toStaticProps({ posts: posts.map(serialize) });
};

const Blog: NextPage<BlogProps> = ({ posts }: BlogProps) => (
  <PageRoot>
    <Head>
      <title>Jan Kratochvil | Blog</title>
    </Head>
    <PostList posts={posts.map(deserialize)} contentType={"blog"} />
  </PageRoot>
);

export default Blog;
