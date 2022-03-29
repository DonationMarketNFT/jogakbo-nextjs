import type { NextPage } from "next";
import { BrowserView, MobileView } from "react-device-detect";
import BrowserHome from "../components/home/BrowserHome";
import MobileHome from "../components/home/MobileHome";
import Seo from "../components/Seo";

const Home: NextPage = () => {
  return (
    <>
      <Seo />
      <BrowserView>
        <BrowserHome />
      </BrowserView>
      <MobileView>
        <MobileHome />
      </MobileView>
    </>
  );
};

export default Home;
