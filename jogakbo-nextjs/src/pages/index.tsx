import { NextPage } from "next";
import BrowserHome from "../components/home/BrowserHome";
import MobileHome from "../components/home/MobileHome";
import Seo from "../components/Seo";
import { useIsBrowser } from "../hook/isBrowser";

const Home: NextPage = () => {
  const isBroswer = useIsBrowser();
  console.log(isBroswer);
  return (
    <>
      <Seo />
      {isBroswer ? <BrowserHome /> : <MobileHome />}
    </>
  );
};

export default Home;
