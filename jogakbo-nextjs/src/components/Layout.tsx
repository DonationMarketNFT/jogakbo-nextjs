import { useRouter } from "next/dist/client/router";
import { useIsMobile } from "../hook/isMobile";
import BrowserHeader from "./header/BrowserHeader";
import MobileHeader from "./header/MobileHeader";

export default function Layout({ children }: any) {
  const isMobile = useIsMobile();
  const router = useRouter();

  return (
    <>
      {router.pathname.slice(0, 6) === "/admin" ? null : isMobile ? (
        <MobileHeader />
      ) : (
        <BrowserHeader />
      )}
      <div>{children}</div>
    </>
  );
}
