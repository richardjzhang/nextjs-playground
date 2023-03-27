import Image from "next/image";
import { Title } from "ui";

interface Props {
  params: {
    country: string;
  };
}

export async function generateStaticParams() {
  return [
    { country: "au" },
    { country: "sg" },
    { country: "jp" },
    { country: "gb" },
    { country: "us" },
  ];
}

export default function EdgeMiddleware({ params }: Props) {
  const { country } = params;
  return (
    <div className="flex flex-col justify-center items-center">
      <Title>Where am I?</Title>
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
