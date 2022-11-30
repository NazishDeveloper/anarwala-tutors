import { NextRequest, NextResponse } from "next/server";

import { jwtVerify } from "jose";

const secretKey = process.env.SECRET;

export default async function handler(req, res) {
  const url = req.url;

  if (url.includes("/dashboard")) {
    const token = req.cookies.get("OurSiteJWT");
    if (token) {
      try {
        const decoded = await jwtVerify(
          token.value,
          new TextEncoder().encode(secretKey)
        );

        if (decoded.payload.verify == 1) {
          return NextResponse.next();
        } else if (decoded.payload.verify == 0) {
          return NextResponse.redirect(process.env.BASE_URL + "/verify");
        }

      } catch (error) {
        console.log(error);
        return NextResponse.redirect(process.env.BASE_URL + "/login");
      }
    } else {
      return NextResponse.redirect(process.env.BASE_URL + "/login");
    }
  }

  if (url.includes("/login") || url.includes("/verify")) {
    let JWTtoken = req.cookies.get("OurSiteJWT");
    if (JWTtoken) {
      try {
        const decoded = await jwtVerify(
          JWTtoken.value,
          new TextEncoder().encode(secretKey)
        );

        if (decoded.payload.verify == 0) {
          return NextResponse.redirect(process.env.BASE_URL + "/verify");
        } else if (decoded.payload.verify == 1) {
          return NextResponse.redirect(process.env.BASE_URL + "/dashboard");
        }
      } catch (error) {
        console.log(error);
        return NextResponse.next();
      }
    } else {
      return NextResponse.next();
    }
  }

  return NextResponse.next();
}
