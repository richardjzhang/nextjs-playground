import { NextRequest, NextResponse } from "next/server";
import { get } from "@vercel/edge-config";

// only run middleware on home page
export const config = {
  matcher: ["/edge-middleware", "/edge-config"],
};

export default async function middleware(req: NextRequest, res: NextResponse) {
  if (req.nextUrl.pathname === "/edge-middleware") {
    const country = req.geo?.country?.toLowerCase() || "us";

    // Rewrite the path (`/`) to the localized page (edge-middleware/[country])
    req.nextUrl.pathname = `/edge-middleware/${country}`;
    return NextResponse.rewrite(req.nextUrl);
  }

  if (req.nextUrl.pathname === "/edge-config") {
    const showEdgeConfig = await get("showEdgeConfig");
    req.nextUrl.pathname = `/edge-config/${showEdgeConfig}`;
    return NextResponse.rewrite(req.nextUrl);
  }

  return NextResponse.next();
}
