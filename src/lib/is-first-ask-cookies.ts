import { useCookies } from "react-cookie";

export function isFirstAskCookies() {
  const [cookies, setCookie, removeCookie] = useCookies(["isCookieAccepted"]);

  if (cookies === undefined || cookies === null) {
    return true;
  }

  return false;
}
