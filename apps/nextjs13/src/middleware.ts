import { NextRequest, NextResponse } from "next/server";

// only run middleware on home page
export const config = {
  matcher: "/edge-middleware",
};

export default function middleware(req: NextRequest) {
  const country = req.geo?.country?.toLowerCase() || "us";

  // Rewrite the path (`/`) to the localized page (edge-middleware/[country])
  req.nextUrl.pathname = `/edge-middleware/${country}`;
  return NextResponse.rewrite(req.nextUrl);
}
