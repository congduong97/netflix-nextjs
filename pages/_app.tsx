import { GoogleAnalytics } from "nextjs-google-analytics";
import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GoogleAnalytics trackPageViews  gaMeasurementId="G-Z58QZRHSBM"/> 
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
