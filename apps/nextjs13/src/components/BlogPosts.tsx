import Link from "next/link";
import dayjs from "dayjs";
import type { BlogPost, BlogPosts as BlogPostsType } from "contentful";
import { Title } from "ui";

type FetchingType = "ssg" | "ssr" | "isr";

const fetchingType = (type: FetchingType) => {
  switch (type) {
    case "ssg":
      return "Static Site Generation";
    case "ssr":
      return "Server Side Rendering";
    case "isr":
      return "Static Site Generation and updated using Incremental Static Regeneration";
    default:
      throw new Error("Invalid type");
  }
};

const BlogPosts = ({
  posts,
  type,
}: {
  posts: BlogPostsType;
  type: FetchingType;
}) => {
  return (
    <div className="divide-y divide-zinc-600 space-y-10">
      <div>
        <Title>{type.toUpperCase()} Blog</Title>
        <p className="mt-5 text-xl text-zinc-400">
          Posts that are listed using {fetchingType(type)}
        </p>
      </div>
      <div>
        {posts.map((post: BlogPost) => (
          <div key={post.slug} className="mt-14">
            <Link key={post.slug} href={`/${type}/${post.slug}`}>
              <h2 className="text-3xl ">{post.title}</h2>
              <p className="mt-2 text-zinc-300">{post.description}</p>
              <p className="mt-1.5 text-zinc-500 text-xs">
                {dayjs(post.sys.firstPublishedAt).format("MMMM D, YYYY")}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;
