import { Feed } from "feed"
import { PostMetadata } from "./posts"

export const RSS_TITLE = 'janjan.xyz'
export const RSS_COPYRIGHT = `All rights reserved ${new Date().getFullYear()}, Jan Kratochvil`

export const getRssFeed = (getPosts: (() => PostMetadata[]), siteUrl: string): Feed => {
    const posts = getPosts()

    const feed = new Feed({
        id: siteUrl,
        link: siteUrl,
        title: RSS_TITLE,
        copyright: RSS_COPYRIGHT
    })

    posts.forEach(x => feed.addItem({
        title: x.title,
        link: `${siteUrl}/blog/${x.slug}`,
        date: x.date,
        id: x.slug
    }))

    return feed;
}