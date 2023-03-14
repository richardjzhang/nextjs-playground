import Head from "next/head";
import { Card } from "ui";

const CARD_CONTENT = [
  {
    title: "Server Side Rendering",
    href: "/ssr",
    cta: "See SSR",
  },
  {
    title: "Static Site Generation",
    href: "/ssg",
    cta: "See SSG",
  },
  {
    title: "Incremental Static Site Generation",
    href: "/isr",
    cta: "See ISR",
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Next.js 13 Fetching</title>
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          <span className="bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent px-2">
            Next.js 13 Fetching
          </span>
        </h1>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 place-content-evenly">
          {CARD_CONTENT.map((card) => (
            <Card key={card.title} {...card} />
          ))}
        </div>
      </main>
    </>
  );
}
