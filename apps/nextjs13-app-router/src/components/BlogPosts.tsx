import Link from "next/link";
import dayjs from "dayjs";
import type { RawBlogPost } from "contentful";

type FetchingType = "ssg" | "ssr" | "isr";

const getFetchPayload = (type: FetchingType): RequestInit => {
  switch (type) {
    case "ssg":
      return { cache: "force-cache" };
    case "ssr":
      return { cache: "no-store" };
    case "isr":
      return { next: { revalidate: 10 } };
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
      {posts.items.map((post: RawBlogPost) => (
        <div
          key={post.fields.slug}
          className="group rounded-lg border border-transparent h-full w-full min-h-[130px] overflow-hidden bg-origin-border bg-gradient-to-r from-blue-500 to-emerald-500 text-[#6b7280]"
        >
          <Link href={`/${type}/${post.fields.slug}`}>
            <div className="p-4 bg-zinc-900 h-full flex items-center">
              <div>
                <h2 className="text-xl font-semibold text-zinc-200">
                  {post.fields.title}
                </h2>
                <p className="mt-1 text-zinc-300">{post.fields.description}</p>
                <p className="mt-1.5 text-zinc-500 text-xs">
                  {dayjs(post.sys.createdAt).format("MMMM D, YYYY")}
                </p>
              </div>
              <div className="ml-auto text-xs mt-2 group-hover:underline">
                →
              </div>
            </div>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default BlogPosts;
