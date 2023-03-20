import "../styles/globals.css";
import "ui/styles.css"; // include styles from the ui package
import type { AppProps } from "next/app";
import Layout from "../components/Layout";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
