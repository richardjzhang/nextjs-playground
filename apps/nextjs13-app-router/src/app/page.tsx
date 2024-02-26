import Head from "next/head";
import Link from "next/link";
import { Card, Title } from "ui";
import BlogPosts from "../components/BlogPosts";
import Streaming from "./(data-fetching)/streaming/Streaming";

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
        <title>Next.js 13 - App Router</title>
      </Head>

      <Title center>App Router</Title>

      <div className="mt-16 w-full">
        <h2 className="text-2xl font-semibold text-zinc-300">Data Fetching</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 place-content-evenly">
          <Link className="h-full" href="/streaming">
            <Card title="Streaming" cta="Demonstrating streaming in Next.js" />
          </Link>
          {/* @ts-expect-error Server Component */}
          <BlogPosts type="no-store" />
          {/* @ts-expect-error Server Component */}
          <BlogPosts type="force-cache" />
          {/* @ts-expect-error Server Component */}
          <BlogPosts type="revalidate" />
        </div>
      </div>

      {/* <div className="mt-16 w-full">
        <h2 className="text-2xl font-semibold text-zinc-300">
          HTML + RSC Caching
        </h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 place-content-evenly">
          <Link className="h-full" href="/ssr">
            <Card
              title="Dynamic Rendering"
              cta="Demonstrating dynamically rendering React Components"
            />
          </Link>
          <Link className="h-full" href="/ppr">
            <Card
              title="Partial Pre-rendering"
              cta="Demonstrating rendering a static shell of your React Components"
            />
          </Link>
        </div>
      </div> */}

      <div className="mt-16 w-full">
        <h2 className="text-2xl font-semibold text-zinc-300">Edge Compute</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 place-content-evenly">
          {EDGE_CARD_CONTENT.map((card) => (
            <Link key={card.title} className="h-full" href={card.href}>
              <Card {...card} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
