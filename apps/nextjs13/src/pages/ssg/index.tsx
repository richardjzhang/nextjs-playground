import Head from "next/head";
import { getAllBlogPosts } from "contentful";
import BlogPosts from "../../components/BlogPosts";
import { BlogPosts as BlogPostsType } from "contentful";

export async function getStaticProps() {
  const posts = await getAllBlogPosts();
  return {
    props: {
      posts,
    },
  };
}

export default function SSG({ posts }: { posts: BlogPostsType }) {
  return (
    <>
      <Head>
        <title>SSG Blog</title>
      </Head>
      <BlogPosts posts={posts} type="ssg" />
    </>
  );
}
