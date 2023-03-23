import type { GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";
import Head from "next/head";
import {
  type BlogPost as BlogPostType,
  getPreviewBlogPostBySlug,
} from "contentful";
import BlogPost from "../../components/BlogPost";

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // We don't want to specify any preview blog posts
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<unknown, Params> = async ({
  params,
}) => {
  const post = await getPreviewBlogPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
};

function PreviewPost({ post }: { post: BlogPostType }) {
  return (
    <>
      <Head>
        <title>Preview - {post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <BlogPost post={post} />
    </>
  );
}

export default PreviewPost;
