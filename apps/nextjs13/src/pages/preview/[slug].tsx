import Head from "next/head";
import {
  type BlogPost as BlogPostType,
  getAllBlogPosts,
  getPreviewBlogPostBySlug,
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
  const post = await getPreviewBlogPostBySlug(params.slug);
  return {
    props: {
      post,
    },
  };
}

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
