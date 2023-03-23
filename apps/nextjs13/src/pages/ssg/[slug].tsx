import type { GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import {
  type BlogPost as BlogPostType,
  getAllStaticBlogPosts,
  getStaticBlogPostBySlug,
} from "contentful";
import BlogPost from "../../components/BlogPost";

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getAllStaticBlogPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<unknown, Params> = async ({
  params,
}) => {
  const post = await getStaticBlogPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
};

function SSGPost({ post }: { post: BlogPostType }) {
  return (
    <>
      <Head>
        <title>SSG - {post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <BlogPost post={post} />
    </>
  );
}

export default SSGPost;
