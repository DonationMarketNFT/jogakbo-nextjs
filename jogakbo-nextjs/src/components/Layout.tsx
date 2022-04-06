import { useIsMobile } from "../hook/isMobile";
import BrowserHeader from "./header/BrowserHeader";
import MobileHeader from "./header/MobileHeader";

export default function Layout({ children }: any) {
  const isMobile = useIsMobile();
  return (
    <>
      {isMobile ? <MobileHeader /> : <BrowserHeader />}
      <div>{children}</div>
    </>
  );
}
