import { jwtDecode, JwtPayload } from "jwt-decode";

export const readUserName = (): string | undefined => {
  const token = sessionStorage.getItem("token");

  if (token && token.length > 15) {
    const decodeToken = jwtDecode<JwtPayload>(token);
    return decodeToken.sub?.split("@")[0];
  }
};

export const readToken = (): string => {
  const token = sessionStorage.getItem("token");

  if (token) {
    return token;
  } else {
    return "";
  }
};
export const readTokenExpire = (): number => {
  const expires = Number(sessionStorage.getItem("expires"));

  if (expires) {
    const now = new Date().getTime();
    const expiresInMilliSeconds = expires * 1000;
    return now + expiresInMilliSeconds;
  } else {
    return 0;
  }
};

export const readRefreshToken = (): string => {
  const token = sessionStorage.getItem("refreshToken");

  if (token) {
    return token;
  } else {
    return "";
  }
};
export const getRetryExpireToken = (): number => {
  const time = new Date().getTime();
  const expire = +readTokenExpire();

  if (expire < time) {
    return 2;
  }

  return 0;
};
