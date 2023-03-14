import Head from "next/head";
import { getAllBlogPosts } from "contentful";
import { BlogPosts } from "ui";
import { BlogPosts as BlogPostsType } from "contentful";

export async function getStaticProps() {
  const posts = await getAllBlogPosts();
  return {
    props: {
      posts,
    },
  };
}

export default function ISR({ posts }: { posts: BlogPostsType }) {
  return (
    <>
      <Head>
        <title>ISR Blog</title>
      </Head>
      <BlogPosts posts={posts} type="isr" />
    </>
  );
}
