import type { NextPage } from "next";
import Head from "next/head";
import SocialIcon from "../components/social_icon";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => (
    <div className={styles.container}>
        <Head>
            <title>Jan Kratochvil</title>
            <meta
                name="description"
                content="Jan Kratochvil's personal web site"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
            <h1 className={styles.title}>
                Hi, my name is{" "}
                <span className={styles["author-name"]}>Jan</span>.
            </h1>

            <div className={styles.description}>
                A software engineering lead with product overlap.
                <p className={styles["japanese-greeting"]}>
                    ～よろしくお願いします～
                </p>
            </div>

            <div className={styles.grid}>
                <a href="/blog" className={styles.card}>
                    <h2>Blog</h2>
                    <p>Musings on tech, leadership, and remote.</p>
                </a>

                <a href="https://nextjs.org/learn" className={styles.card}>
                    <h2>Projects</h2>
                    <p>Work I&lsquo;ve done both on and off the clock.</p>
                </a>
            </div>
            <div className={styles.social}>
                <SocialIcon
                    href="https://github.com/jankratochvilcz"
                    alt="GitHub profile link"
                    src="/social/social-1_logo-linkedin.svg"
                />
                <SocialIcon
                    href="https://github.com/jankratochvilcz"
                    alt="GitHub profile link"
                    src="/social/social-1_logo-github.svg"
                />
                <SocialIcon
                    href="https://github.com/jankratochvilcz"
                    alt="GitHub profile link"
                    src="/social/social-1_logo-instagram.svg"
                />
                <SocialIcon
                    href="https://github.com/jankratochvilcz"
                    alt="GitHub profile link"
                    src="/social/social-1_logo-twitter.svg"
                />
            </div>
        </main>
    </div>
);

export default Home;
