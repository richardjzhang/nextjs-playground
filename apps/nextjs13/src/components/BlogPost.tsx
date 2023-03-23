import type { BlogPost as BlogPostType } from "contentful";
import dayjs from "dayjs";
import { Title } from "ui";

export default function BlogPost({ post }: { post: BlogPostType }) {
  return (
    <div className="divide-y space-y-10">
      <div>
        <Title>{post.title}</Title>
        <p className="mt-5 text-2xl text-zinc-300">{post.description}</p>
        <p className="mt-2 text-zinc-400">
          {dayjs(post.sys.firstPublishedAt || new Date()).format(
            "MMMM D, YYYY"
          )}
        </p>
      </div>
      <div className="divide-zinc-600 py-10">
        <p className="text-xl">{post.content}</p>
      </div>
    </div>
  );
}
