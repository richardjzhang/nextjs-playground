import * as React from "react";
import dayjs from "dayjs";
import type { BlogPost, BlogPosts as BlogPostsType } from "contentful";

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

export const BlogPosts = ({
  posts,
  type,
}: {
  posts: BlogPostsType;
  type: FetchingType;
}) => {
  return (
    <div className="ui-divide-y ui-divide-zinc-600 ui-space-y-10">
      <div>
        <h1 className="ui-text-6xl ui-font-extrabold ui-tracking-tight ui-text-white sm:ui-text-7xl lg:ui-text-8xl xl:ui-text-8xl">
          <span className="ui-bg-gradient-to-r ui-from-brandred ui-to-brandblue ui-bg-clip-text ui-text-transparent">
            {type.toUpperCase()} Blog
          </span>
        </h1>

        <p className="ui-mt-5 ui-text-xl ui-text-zinc-400">
          Posts that are listed using {fetchingType(type)}
        </p>
      </div>
      <div>
        {posts.map((post: BlogPost) => (
          <div key={post.slug} className="ui-mt-14">
            <h2 className="ui-text-3xl ">{post.title}</h2>
            <p className="ui-mt-2 ui-text-zinc-300">{post.description}</p>
            <p className="ui-mt-1.5 ui-text-zinc-500 ui-text-xs">
              {dayjs(post.sys.firstPublishedAt).format("MMMM D, YYYY")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
