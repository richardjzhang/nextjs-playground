import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";

const PREVIEW_TOKEN = process.env.CONTENTFUL_PREVIEW_TOKEN;
const TOKEN = process.env.CONTENTFUL_ACCESS_TOKEN;
const SPACE = process.env.CONTENTFUL_SPACE_ID;
const URL = `https://graphql.contentful.com/content/v1/spaces/${SPACE}`;

const getLink = (preview) =>
  ApolloLink.from([
    new HttpLink({
      uri: URL,
      headers: {
        Authorization: `Bearer ${preview ? PREVIEW_TOKEN : TOKEN}`,
      },
    }),
  ]);

const cache = new InMemoryCache();

const defaultOptions = {
  watchQuery: {
    fetchPolicy: "no-cache",
    errorPolicy: "ignore",
  },
  query: {
    fetchPolicy: "no-cache",
    errorPolicy: "all",
  },
};

const apolloClient = (preview = false) =>
  new ApolloClient({
    link: getLink(preview),
    cache,
    defaultOptions,
  });

export default apolloClient;
