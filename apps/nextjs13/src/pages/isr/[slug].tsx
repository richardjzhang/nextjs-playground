import Head from "next/head";
import {
  type BlogPost as BlogPostType,
  getAllBlogPosts,
  getBlogPostBySlug,
} from "contentful";
import BlogPost from "../../components/BlogPost";

export async function getStaticPaths() {
  const posts = await getAllBlogPosts();
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const post = await getBlogPostBySlug({ slug: params.slug });
  return {
    props: {
      post,
    },
  };
}

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
