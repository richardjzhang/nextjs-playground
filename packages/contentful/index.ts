import gql from "graphql-tag";
import apolloClient from "./apollo-client";
import type { BlogPost, BlogPosts } from "./types";

async function getAllBlogPosts() {
  try {
    const { data } = await apolloClient.query({
      query: gql`
        query GetAllBlogPosts {
          blogPostCollection {
            items {
              sys {
                id
                firstPublishedAt
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

export { getAllBlogPosts, BlogPost, BlogPosts };
