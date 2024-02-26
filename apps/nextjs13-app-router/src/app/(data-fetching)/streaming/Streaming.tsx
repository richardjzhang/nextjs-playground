import { Suspense } from "react";
import ClientComponent from "./ClientComponent";
import DataFetching from "./DataFetching";
import { Card, Title } from "ui";

export default function Streaming() {
  return (
    <div className="space-y-20">
      <Title>Streaming components</Title>
      <div className="grid grid-cols-1 gap-4 place-content-evenly">
        <div>
          <h2 className="mb-4 text-2xl font-semibold text-zinc-300">
            Client component
          </h2>
          <ClientComponent />
        </div>
        <div className="mt-16">
          <h2 className="mb-4 text-2xl font-semibold text-zinc-300">
            Streamed server component
          </h2>
          <Suspense
            fallback={
              <Card>
                <div className="h-full flex justify-center items-center text-xl text-white">
                  Waiting for data...
                </div>
              </Card>
            }
          >
            {/* @ts-expect-error Server Component */}
            <DataFetching />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
