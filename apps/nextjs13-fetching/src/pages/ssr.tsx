import { getAllBlogPosts } from "contentful";

export async function getServerSideProps() {
  const posts = await getAllBlogPosts();

  return {
    props: {
      posts,
    },
  };
}

export default function SSR({ posts }) {
  return (
    <>
      <h1>Blog</h1>
      {posts.map((post) => (
        <div key={post.slug}>
          <h2>{post.title}</h2>
          <p>{post.description}</p>
        </div>
      ))}
    </>
  );
}
