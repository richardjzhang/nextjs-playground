// This file is used to generate types
const contentfulManagement = require("contentful-management");
const { loadEnvConfig } = require("@next/env");

module.exports = function () {
  loadEnvConfig(process.env.PWD);
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_TOKEN,
  });

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT));
};
