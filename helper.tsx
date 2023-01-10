import { serialize } from "cookie";

export const clearToken = async (appContext: any) => {
  let serialised;

  serialised = serialize("smartToken", null!, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: -1,
    path: "/",
  });

  appContext?.ctx?.res?.setHeader("Set-Cookie", serialised);
};
