import Head from "next/head";
import Link from "next/link";
import { Card, Title } from "ui";

const FETCHING_CARD_CONTENT = [
  {
    title: "Server Side Rendering",
    href: "/ssr",
    cta: "Always pre-render at each request",
  },
  {
    title: "Static Site Generation",
    href: "/ssg",
    cta: "Pre-render at build time",
  },
  {
    title: "Incremental Static Regeneration",
    href: "/isr",
    cta: "Pre-render at build time and regenerate on demand",
  },
];

const EDGE_CARD_CONTENT = [
  {
    title: "Edge Functions",
    href: "/edge-functions",
    cta: "Run code at the edge",
  },
  {
    title: "Edge Config",
    href: "/edge-config",
    cta: "Ultra low-latency data at the edge",
  },
  {
    title: "Edge Middleware",
    href: "/edge-middleware",
    cta: "Run code before a request is completed",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js 13</title>
        <meta name="description" content="Features of Next.js 13" />
      </Head>
      <div className="block my-auto w-full h-full">
        <Title center>Next.js 13</Title>

        <div className="mt-16 w-full">
          <h2 className="text-2xl font-semibold text-zinc-300">
            Data Fetching
          </h2>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 place-content-evenly">
            {FETCHING_CARD_CONTENT.map((card) => (
              <Link key={card.title} className="h-full" href={card.href}>
                <Card {...card} />
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-12 w-full">
          <h2 className="text-2xl font-semibold text-zinc-300">Edge Compute</h2>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-4 place-content-evenly">
            {EDGE_CARD_CONTENT.map((card) => (
              <Link key={card.title} className="h-full" href={card.href}>
                <Card {...card} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
