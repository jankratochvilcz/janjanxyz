import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import SocialIcon from "../components/social_icon";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Jan Kratochvil</title>
      <meta name="description" content="Jan Kratochvil's personal web site" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        <div>ヤ</div>
        <br />
        Hi, my name is <span className={styles["author-name"]}>Jan</span>.
      </h1>

      <div className={styles.description}>
        A software engineering lead with product overlap.
        <p className={styles["japanese-greeting"]}>～よろしくお願いします～</p>
      </div>

      <div className={styles.grid}>
        <Link href="/blog">
          <a className={styles.card}>
            <h2>Blog</h2>
            <p>Musings on tech, leadership, and remote.</p>
          </a>
        </Link>

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

export default Home;
