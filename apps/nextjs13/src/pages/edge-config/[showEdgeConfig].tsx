import type { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import type { ParsedUrlQuery } from "querystring";
import Image from "next/image";
import { Title } from "ui";

interface Params extends ParsedUrlQuery {
  showEdgeConfig: string;
}

interface Props {
  showEdgeConfig: boolean;
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      { params: { showEdgeConfig: "true" } },
      { params: { showEdgeConfig: "false" } },
    ],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<unknown, Params> = async ({
  params: { showEdgeConfig },
}) => {
  return {
    props: {
      showEdgeConfig: showEdgeConfig === "true",
    },
    revalidate: false,
  };
};

export default function EdgeConfig({ showEdgeConfig }: Props) {
  return (
    <>
      <Head>
        <title>Edge Config</title>
        <meta name="description" content="Edge Config - Nothing to see here" />
      </Head>
      <div className="flex flex-col items-center">
        <Title>Edge Config</Title>
        <Image
          className="mt-12"
          alt="Edge config image"
          src={
            showEdgeConfig ? "/homer-simpson-reverse.gif" : "/homer-simpson.gif"
          }
          height={600}
          width={600}
        />
      </div>
    </>
  );
}
