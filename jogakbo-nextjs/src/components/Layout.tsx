import {useRouter} from "next/dist/client/router";
import BrowserHeader from "./header/BrowserHeader";

export default function Layout({children}: any) {
  const router = useRouter();

  return (
    <>
      {router.pathname.slice(0, 6) !== "/admin" && <BrowserHeader />}
      <div>{children}</div>
    </>
  );
}
