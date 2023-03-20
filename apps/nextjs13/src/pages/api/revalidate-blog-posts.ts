import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // should be secret, custom header coming in from Contentful
  let inboundRevalToken = req.headers["x-vercel-reval-key"];

  // Check for secret to confirm this is a valid request
  if (!inboundRevalToken) {
    return res
      .status(401)
      .json({ message: "x-vercel-reval-key header not defined" });
  } else if (inboundRevalToken !== process.env.REVALIDATE_TOKEN) {
    return res.status(401).json({ message: "Invalid token" });
  }

  try {
    // this should be the actual path not a rewritten path
    // e.g. for "/blog/[slug]" this should be "/blog/post-1"
    await Promise.all([
      res.revalidate("/isr"),
      res.revalidate(`/isr/${req.body.slug}`),
    ]);
    return res.json({ revalidated: true });
  } catch (err) {
    // If there was an error, Next.js will continue
    // to show the last successfully generated page
    return res.status(500).send("Error revalidating");
  }
}
