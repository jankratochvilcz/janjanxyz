import { Html, Head, Main, NextScript } from "next/document";
import { BLOG_TITLE } from "../const/strings";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Quattrocento&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Quattrocento+Sans&display=swap"
          rel="stylesheet"
        />

        <link rel="icon" href="/favicon-32.png" sizes="32x32" />
        <link rel="icon" href="/favicon-128.png" sizes="128x128" />
        <link rel="icon" href="/favicon-180.png" sizes="180x180" />
        <link rel="icon" href="/favicon-192.png" sizes="192x192" />
        <meta property="og:site_name" content={BLOG_TITLE} />
        <meta name="author" content="Jan Kratochvil" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
