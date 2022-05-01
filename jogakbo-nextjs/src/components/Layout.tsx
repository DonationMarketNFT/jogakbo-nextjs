import {useRouter} from "next/dist/client/router";
import Header from "./header/Header";

export default function Layout({children}: any) {
  const router = useRouter();

  return (
    <>
      {router.pathname.slice(0, 6) !== "/admin" && <Header />}
      <div>{children}</div>
    </>
  );
}
