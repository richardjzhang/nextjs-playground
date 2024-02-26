import Link from "next/link";
import dayjs from "dayjs";
import type { RawBlogPost } from "contentful";
import { Card, Title } from "ui";

type FetchingType = "force-cache" | "no-store" | "revalidate";

const getFetchPayload = (type: FetchingType): RequestInit => {
  switch (type) {
    case "force-cache":
      return { cache: "force-cache" };
    case "no-store":
      return { cache: "no-store" };
    case "revalidate":
      return { next: { revalidate: 10 } };
    default:
      throw new Error("Invalid type");
  }
};

const getFetchContent = (
  type: FetchingType
): {
  title: string;
  description: string;
} => {
  switch (type) {
    case "force-cache":
      return {
        title: "Static Data",
        description: "Static data is served from the cache.",
      };
    case "no-store":
      return {
        title: "Dynamic Data",
        description: "Data is not stored in the cache.",
      };
    case "revalidate":
      return {
        title: "Revalidated Data",
        description: "Data is revalidated every 3 seconds.",
      };
    default:
      throw new Error("Invalid type");
  }
};

async function fetcher(url: string, type) {
  const fetchPayload = getFetchPayload(type);
  const res = await fetch(url, fetchPayload);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const BlogPosts = async ({ type }: { type: FetchingType }) => {
  const posts = await fetcher(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=blogPost&order=-sys.createdAt&select=fields.title,fields.description,fields.slug,sys.createdAt&limit=10`,
    type
  );
  return (
    <div className="divide-y divide-zinc-600">
      {posts.items.map((post: RawBlogPost) => {
        const cardContent = getFetchContent(type);
        return (
          <div
            key={post.fields.slug}
            className="group rounded-lg border border-transparent h-full w-full min-h-[130px] overflow-hidden bg-origin-border bg-gradient-to-r from-blue-500 to-emerald-500 text-[#6b7280]"
          >
            <Link href={`/${type}/${post.fields.slug}`}>
              <Card title={cardContent.title} cta={cardContent.description} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlogPosts;
