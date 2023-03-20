import Head from "next/head";
import Link from "next/link";
import { Card } from "ui";

const CARD_CONTENT = [
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js 13</title>
      </Head>
      <div className="block my-auto w-full h-full">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          <span className="bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent">
            Next.js 13
          </span>
        </h1>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 place-content-evenly">
          {CARD_CONTENT.map((card) => (
            <Link key={card.title} className="h-full" href={card.href}>
              <Card {...card} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
