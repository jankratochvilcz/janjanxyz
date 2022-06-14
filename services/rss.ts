import { Feed } from "feed";
import { BLOG_COPYRIGHT, BLOG_DESCRIPTION, BLOG_TITLE } from "../const/strings";
import { PostMetadata } from "./posts";

export const getRssFeed = (
  getPosts: () => PostMetadata[],
  siteUrl: string
): Feed => {
  const posts = getPosts();

  const feed = new Feed({
    id: siteUrl,
    link: siteUrl,
    title: BLOG_TITLE,
    copyright: BLOG_COPYRIGHT,
    description: BLOG_DESCRIPTION
  });

  posts.forEach((x) =>
    feed.addItem({
      title: x.title,
      link: `${siteUrl}/blog/${x.slug}`,
      date: x.date,
      id: x.slug,
    })
  );

  return feed;
};
