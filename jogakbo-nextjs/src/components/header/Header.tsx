import { BrowserView, MobileView } from "react-device-detect";
import BrowserHeader from "./BrowserHeader";
import MobileHeader from "./MobileHeader";

export default function Header() {
  return (
    <>
      <BrowserView>
        <BrowserHeader />
      </BrowserView>
      <MobileView>
        <MobileHeader />
      </MobileView>
    </>
  );
}
