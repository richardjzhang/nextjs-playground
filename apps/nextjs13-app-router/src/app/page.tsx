import Head from "next/head";
import Link from "next/link";
import { Card, Title } from "ui";
import BlogPosts from "../components/BlogPosts";

const FETCHING_CARD_CONTENT = [
  {
    title: "Caching Tasks",
    href: "https://turbo.build/repo/docs/core-concepts/caching",
    cta: "Read More",
  },
  {
    title: "Running Tasks",
    href: "https://turbo.build/repo/docs/core-concepts/monorepos/running-tasks",
    cta: "Read More",
  },
  {
    title: "Configuration Options",
    href: "https://turbo.build/repo/docs/reference/configuration",
    cta: "Read More",
  },
];

const EDGE_CARD_CONTENT = [
  {
    title: "Edge Functions",
    href: "/edge-functions",
    cta: "Run code at the edge",
  },
  // Currently broken
  // {
  //   title: "Edge Config",
  //   href: "/edge-config",
  //   cta: "Ultra low-latency data at the edge",
  // },
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
        <h2 className="text-2xl font-semibold text-zinc-300">Edge Compute</h2>
        <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-4 place-content-evenly">
          {EDGE_CARD_CONTENT.map((card) => (
            <Link key={card.title} className="h-full" href={card.href}>
              <Card {...card} />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16 w-full">
        <h2 className="text-2xl font-semibold text-zinc-300">
          Server Side Rendering
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-4 place-content-evenly">
          {/* @ts-expect-error Server Component */}
          <BlogPosts type="ssr" />
        </div>
      </div>

      <div className="mt-16 w-full">
        <h2 className="text-2xl font-semibold text-zinc-300">
          Static Site Generation
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-4 place-content-evenly">
          {/* @ts-expect-error Server Component */}
          <BlogPosts type="ssg" />
        </div>
      </div>

      <div className="mt-16 w-full">
        <h2 className="text-2xl font-semibold text-zinc-300">
          Incremental Static Regeneration
        </h2>
        <div className="mt-5 grid grid-cols-1 gap-4 place-content-evenly">
          {/* @ts-expect-error Server Component */}
          <BlogPosts type="isr" />
        </div>
      </div>
    </>
  );
}
