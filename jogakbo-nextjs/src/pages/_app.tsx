import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../../styles/globals.css";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../../styles/theme";
import { RecoilRoot, useRecoilState } from "recoil";
import { showSignInModalState } from "../../atom";
import { useState } from "react";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <ThemeProvider theme={lightTheme}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
