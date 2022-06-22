import { Html, Head, Main, NextScript } from "next/document";
import { BLOG_TITLE } from "../const/strings";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Shippori+Mincho&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content={BLOG_TITLE} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
