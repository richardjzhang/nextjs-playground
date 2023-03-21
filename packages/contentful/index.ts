import gql from "graphql-tag";
import apolloClient from "./apollo-client";
import type { BlogPost, BlogPosts } from "./types";

const GRAPHQL_FIELDS = `
sys {
  id
  firstPublishedAt
}
title
slug
description
content
`;

async function getAllBlogPosts() {
  try {
    const { data } = await apolloClient().query({
      query: gql`
        query GetAllBlogPosts {
          blogPostCollection {
            items {
              ${GRAPHQL_FIELDS}
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

async function getBlogPostBySlug({
  slug,
  isStatic = false, // Needed because we need a unique query name for the SSG version not to revalidate
}: {
  slug: string;
  isStatic?: boolean;
}) {
  try {
    const { data } = await apolloClient().query({
      query: gql`
        query Get${isStatic ? "Static" : ""}BlogPostBySlug($slug: String!) {
          blogPostCollection(where: { slug: $slug }) {
            items {
              ${GRAPHQL_FIELDS}
            }
          }
        }
      `,
      variables: {
        slug,
      },
    });
    return data.blogPostCollection.items[0];
  } catch (e) {
    console.log(e);
  }
}

async function getPreviewBlogPostBySlug(slug: string) {
  try {
    const { data } = await apolloClient(true).query({
      query: gql`
        query GetBlogPostBySlug($slug: String!) {
          blogPostCollection(where: { slug: $slug }, preview: true) {
            items {
              ${GRAPHQL_FIELDS}
            }
          }
        }
      `,
      variables: {
        slug,
      },
    });
    return data.blogPostCollection.items[0];
  } catch (e) {
    console.log(e);
  }
}

export {
  getAllBlogPosts,
  getBlogPostBySlug,
  getPreviewBlogPostBySlug,
  BlogPost,
  BlogPosts,
};
