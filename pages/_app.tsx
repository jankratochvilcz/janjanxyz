import "../styles/globals.css";
import type { AppProps } from "next/app";
import { init, trackPages } from "insights-js";
import { getConfiguration } from "../services/configuration";

function MyApp({ Component, pageProps }: AppProps) {
  if (process.env.NODE_ENV === "production") {
    init(getConfiguration().insightsUrl);
    trackPages();
  }

  return <Component {...pageProps} />;
}

export default MyApp;
