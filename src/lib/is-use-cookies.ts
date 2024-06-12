import { useCookies } from "react-cookie";

export function isUseCookies() {
  const [cookies] = useCookies(["isCookieAccepted"]);

  return cookies.isCookieAccepted === undefined;
}
