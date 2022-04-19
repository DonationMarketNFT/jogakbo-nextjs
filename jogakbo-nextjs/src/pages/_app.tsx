import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import "../../styles/globals.css";
import { RecoilRoot, useRecoilState } from "recoil";
import { showSignInModalState } from "../../atom";
import { useState } from "react";
import Provider from "../../styles/Provider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <Provider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </RecoilRoot>
  );
}

export default MyApp;
