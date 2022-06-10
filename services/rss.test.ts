import test from "ava"
import { PostMetadata } from "./posts"
import { getRssFeed, RSS_COPYRIGHT, RSS_TITLE } from "./rss"

const defaultPosts = [
{
    "title": "A",
    "slug": 'a',
    "date": new Date(2022, 1)
},
{
    "title": "B",
    "slug": 'b',
    "date": new Date(2022, 2)
}
] as PostMetadata[]

const defaultSiteUrl = 'https:/aaa.com'

const getActualWithDefaults = () => getRssFeed(() => defaultPosts, defaultSiteUrl)

test("Rss contains metadata", t => {
    const actual = getActualWithDefaults()
    t.is(actual.options.title, RSS_TITLE)
    t.is(actual.options.copyright, RSS_COPYRIGHT)
    t.is(actual.options.id, defaultSiteUrl)
    t.is(actual.options.link, defaultSiteUrl)
})

test("Rss contains posts", t => {
    t.is(getActualWithDefaults().items.length, defaultPosts.length)
})

test("Item contains post data", t => {
    const expected = defaultPosts[0]
    const { title, link, date, id } = getActualWithDefaults().items[0]

    t.is(title, expected.title)
    t.is(id, expected.slug)
    t.is(date, expected.date)
    t.is(new URL(link).pathname, "/blog/a")
    t.is(new URL(link).hostname, "aaa.com")
})