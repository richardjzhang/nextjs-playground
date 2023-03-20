import Head from "next/head";
import { type BlogPost as BlogPostType, getBlogPostBySlug } from "contentful";
import BlogPost from "../../components/BlogPost";

export async function getServerSideProps({ params }) {
  const post = await getBlogPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
}

function SSRPost({ post }: { post: BlogPostType }) {
  return (
    <>
      <Head>
        <title>SSR - {post.title}</title>
        <meta name="description" content={post.description} />
      </Head>
      <BlogPost post={post} />
    </>
  );
}

export default SSRPost;
