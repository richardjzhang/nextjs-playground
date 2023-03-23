import type { GetStaticPaths, GetStaticProps } from "next";
import type { ParsedUrlQuery } from "querystring";
import Image from "next/image";

interface Params extends ParsedUrlQuery {
  country: string;
}

interface Props {
  country: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  // We don't want to specify all possible countries as we get those from the headers
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps<unknown, Params> = async ({
  params: { country },
}) => {
  return {
    props: {
      country,
    },
    revalidate: false,
  };
};

export default function EdgeMiddleware({ country }: Props) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-6xl font-extrabold tracking-tight text-white sm:text-7xl lg:text-8xl xl:text-8xl">
        <span className="bg-gradient-to-r from-brandred to-brandblue bg-clip-text text-transparent">
          Where am I?
        </span>
      </h1>
      <Image
        className="mt-16"
        src={`/flags/${country}.svg`}
        alt="Flag"
        width={300}
        height={200}
      />
    </div>
  );
}
