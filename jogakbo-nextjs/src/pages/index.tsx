import {NextPage} from "next";
import BrowserHome from "../components/home/BrowserHome";
import MobileHome from "../components/home/MobileHome";
import Seo from "../components/Seo";
import {useIsBrowser} from "../hooks/isBrowser";

const Home: NextPage = () => {
  const isBroswer = useIsBrowser();
  return (
    <>
      <Seo />
      {isBroswer ? <BrowserHome /> : <MobileHome />}
    </>
  );
};

export default Home;
