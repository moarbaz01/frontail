import { NextRequest, NextResponse } from "next/server";

const realm = "Frontail Studio";

function unauthorized() {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${realm}", charset="UTF-8"`,
    },
  });
}

export function middleware(request: NextRequest) {
  const username = process.env.STUDIO_USERNAME || "frontail";
  const password = process.env.STUDIO_PASSWORD;

  if (!password) {
    if (process.env.NODE_ENV === "development") {
      return NextResponse.next();
    }

    return unauthorized();
  }

  const authHeader = request.headers.get("authorization");

  if (!authHeader?.startsWith("Basic ")) {
    return unauthorized();
  }

  const encoded = authHeader.split(" ")[1];
  const decoded = atob(encoded);
  const separatorIndex = decoded.indexOf(":");
  const providedUsername = decoded.slice(0, separatorIndex);
  const providedPassword = decoded.slice(separatorIndex + 1);

  if (providedUsername !== username || providedPassword !== password) {
    return unauthorized();
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/studio/:path*"],
};
