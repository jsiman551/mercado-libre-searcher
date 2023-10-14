import type { AppProps } from "next/app";
import { GlobalStyles } from "@/constants/styles";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}
