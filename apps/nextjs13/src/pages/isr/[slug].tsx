import type { GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import {
  type BlogPost as BlogPostType,
  getAllBlogPosts,
  getBlogPostBySlug,
} from "contentful";
import BlogPost from "../../components/BlogPost";

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllBlogPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<unknown, Params> = async ({
  params,
}) => {
  const post = await getBlogPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
};

function ISRPost({ post }: { post: BlogPostType }) {
  return (
    <>
      <Head>
        <title>ISR - {post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <BlogPost post={post} />
    </>
  );
}

export default ISRPost;
