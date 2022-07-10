import type { InferGetStaticPropsType, NextPage } from "next";
import fs from "fs";
import Head from "next/head";
import Link from "next/link";
import SocialIcon from "../components/social_icon";
import { rssRoot } from "../const/paths";
import { getConfiguration } from "../services/configuration";
import { getPosts, getPostUrl, serialize } from "../services/posts";
import { getRssFeed } from "../services/rss";
import styles from "../styles/Home.module.css";
import { toStaticProps } from "../utils/staticPropHelpers";
import { BLOG_DESCRIPTION } from "../const/strings";

type HomeProps = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps = () => {
  const { siteUrl } = getConfiguration();
  const feed = getRssFeed(
    () => getPosts("blog", fs.readdirSync, fs.readFileSync),
    siteUrl
  );
  fs.mkdirSync(rssRoot, { recursive: true });
  fs.writeFileSync(`${rssRoot}/feed.xml`, feed.rss2());
  fs.writeFileSync(`${rssRoot}/feed.json`, feed.json1());
  fs.writeFileSync(`${rssRoot}/atom.xml`, feed.atom1());

  const posts = getPosts("blog", fs.readdirSync, fs.readFileSync);

  return toStaticProps({ posts: posts.map(serialize) });
};

const Home: NextPage<HomeProps> = ({ posts }: HomeProps) => {
  const { slug, title } = posts[0];
  const latestPostUrl = getPostUrl("blog", slug);

  return (
    <div className={styles.container}>
      <Head>
        <title>Jan Kratochvil</title>
        <meta name="description" content={BLOG_DESCRIPTION} />
        <link
          rel="alternate"
          type="application/rss+xml"
          title="janjan.xyz RSS feed"
          href="/rss/feed.xml"
        />
        <link
          rel="alternate"
          type="application/rss+atom"
          title="janjan.xyz RSS feed"
          href="/rss/atom.xml"
        />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <div>ヤ</div>
          <br />
          Hi, my name is <span className={styles["author-name"]}>Jan</span>.
        </h1>

        <div className={styles.description}>
          A software engineering lead with product overlap.
          <p className={styles["japanese-greeting"]}>
            ～よろしくお願いします～
          </p>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>
            <Link href="/blog">
              <a>
                <h2>Blog</h2>
              </a>
            </Link>
            <div>
              <div className={styles["new-tag"]}>New</div>
              <Link href={latestPostUrl}>
                <a className={styles["last-post"]}>
                  <i>{title}</i>
                </a>
              </Link>
            </div>
          </div>

          <Link href="/projects">
            <a className={styles.card}>
              <h2>Projects</h2>
              <p>Work I&lsquo;ve done both on and off the clock.</p>
            </a>
          </Link>
        </div>
        <div className={styles.social}>
          <SocialIcon
            href="https://www.linkedin.com/in/jan-kratochv%C3%ADl-a3367b24/"
            alt="LinkedIn profile link"
            src="/social/social-1_logo-linkedin.svg"
          />
          <SocialIcon
            href="https://github.com/jankratochvilcz"
            alt="GitHub profile link"
            src="/social/social-1_logo-github.svg"
          />
          <SocialIcon
            href="https://twitter.com/jankratochvilcz"
            alt="Twitter profile link"
            src="/social/social-1_logo-twitter.svg"
          />
          <SocialIcon
            href="https://www.instagram.com/janjan.xyz/"
            alt="Instagram profile link"
            src="/social/social-1_logo-instagram.svg"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
