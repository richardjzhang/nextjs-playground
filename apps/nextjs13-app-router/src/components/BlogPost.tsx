import { RawBlogPost } from "contentful";
import { Title } from "ui";
import dayjs from "dayjs";

export default function BlogPost({ post }: { post: RawBlogPost }) {
  return (
    <div className="divide-y space-y-10">
      <div>
        <Title>{post.fields.title}</Title>
        <p className="mt-5 text-2xl text-zinc-300">{post.fields.description}</p>
        <p className="mt-2 text-zinc-400">
          {dayjs(post.sys.createdAt || new Date()).format("MMMM D, YYYY")}
        </p>
      </div>
      <div className="divide-zinc-600 py-10">
        <p className="text-xl">{post.fields.content}</p>
      </div>
    </div>
  );
}
