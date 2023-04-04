import BlogPost from "../../../components/BlogPost";

async function fetcher(url: string) {
  const res = await fetch(url, { cache: "no-store" });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function SSRBlogPost({
  params,
}: {
  params: { slug: string };
}) {
  const posts = await fetcher(
    `https://cdn.contentful.com/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/${process.env.CONTENTFUL_ENVIRONMENT}/entries?fields.slug=${params.slug}&access_token=${process.env.CONTENTFUL_ACCESS_TOKEN}&content_type=blogPost&order=-sys.createdAt&select=fields.title,fields.description,fields.slug,fields.content,sys.createdAt&limit=10`
  );
  const post = posts.items[0];
  return <BlogPost post={post} />;
}
