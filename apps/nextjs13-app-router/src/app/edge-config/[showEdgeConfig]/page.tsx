import Image from "next/image";
import { Title } from "ui";

interface Props {
  params: {
    showEdgeConfig: string;
  };
}

export async function generateStaticParams() {
  return [{ showEdgeConfig: "true" }, { showEdgeConfig: "false" }];
}

export default function EdgeConfig({ params }: Props) {
  const showEdgeConfig = params.showEdgeConfig === "true";
  return (
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
  );
}
