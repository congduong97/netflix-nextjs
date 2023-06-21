import { GoogleAnalytics, usePagesViews } from "nextjs-google-analytics";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  usePagesViews()
  return (
    <>
      <GoogleAnalytics trackPageViews /> 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
