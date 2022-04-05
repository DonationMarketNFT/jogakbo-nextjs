import { useEffect, useState } from "react";
import { isBrowser, isDesktop } from "react-device-detect";

// 접속 환경이 브라우저라면 true를, 모바일이라면 false를 리턴
export function useIsBrowser() {
  const [isBroswer, setIsBroswer] = useState(false);
  const browser = isBrowser;
  useEffect(() => {
    setIsBroswer(browser);
  }, [browser]);
  return isBroswer;
}
