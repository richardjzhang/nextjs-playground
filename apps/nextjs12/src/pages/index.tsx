import Head from "next/head";
import Link from "next/link";
import { Card } from "ui";

const CARD_CONTENT = [
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

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Web - Turborepo Example</title>
      </Head>

      <main className="mx-auto w-auto px-4 pt-16 pb-8 sm:pt-24 lg:px-8">
        <h1 className="mx-auto text-center text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          <span className="block bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent px-2">
            Sanity Blogs
          </span>
        </h1>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 place-content-evenly">
          {CARD_CONTENT.map((card) => (
            <Link key={card.title} className="h-full" href={card.href}>
              <Card {...card} />
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
