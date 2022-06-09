import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { init, trackPages } from "insights-js"
import { INSIGHTS_ID } from '../const/insights'

function MyApp({ Component, pageProps }: AppProps) {
  init(INSIGHTS_ID)
  trackPages()

  return <Component {...pageProps} />
}

export default MyApp;
