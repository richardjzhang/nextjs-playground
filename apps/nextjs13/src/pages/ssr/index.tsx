import Head from "next/head";
import { getAllBlogPosts } from "contentful";
import BlogPosts from "../../components/BlogPosts";
import { BlogPosts as BlogPostsType } from "contentful";

export async function getServerSideProps() {
  const posts = await getAllBlogPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function SSR({ posts }: { posts: BlogPostsType }) {
  return (
    <>
      <Head>
        <title>SSR Blog</title>
      </Head>
      <BlogPosts posts={posts} type="ssr" />
    </>
  );
}
