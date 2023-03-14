import gql from "graphql-tag";
import apolloClient from "./apollo-client";

export async function getAllBlogPosts() {
  try {
    const { data } = await apolloClient.query({
      query: gql`
        query GetAllBlogPosts {
          blogPostCollection {
            items {
              sys {
                id
              }
              title
              slug
              description
              content
            }
          }
        }
      `,
    });
    return data.blogPostCollection.items;
  } catch (e) {
    console.log(e);
  }
}

export default { getAllBlogPosts };
