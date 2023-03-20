import type { BlogPost as BlogPostType } from "contentful";
import dayjs from "dayjs";

export default function BlogPost({ post }: { post: BlogPostType }) {
  return (
    <div className="divide-y space-y-10">
      <div>
        <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
          <span className="bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent">
            {post.title}
          </span>
        </h1>
        <p className="mt-5 text-2xl text-zinc-300">{post.description}</p>
        <p className="mt-2 text-zinc-400">
          {dayjs(post.sys.firstPublishedAt).format("MMMM D, YYYY")}
        </p>
      </div>
      <div className="divide-zinc-600 py-10">
        <p className="text-xl">{post.content}</p>
      </div>
    </div>
  );
}
