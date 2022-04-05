import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

// window의 width 값이 767 이하라면 true를, 초과라면 false를 리턴
export function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  const mobile = useMediaQuery({ query: "(max-width: 767px)" });
  useEffect(() => {
    setIsMobile(mobile);
  }, [mobile]);
  return isMobile;
}
