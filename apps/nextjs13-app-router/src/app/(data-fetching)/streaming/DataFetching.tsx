// Generate a component that has a 5 second delay in loading by doing a fetch
import { Card } from "ui";

export default async function DataFetching() {
  const delayTime = 5000;
  const dummyFetch = await fetch(
    // We intentionally delay the response to simulate a slow data
    // request that would benefit from streaming
    `https://app-router-api.vercel.app/api/products?delay=${delayTime}&filter=1`,
    {
      // We intentionally disable Next.js Cache to better demo
      // streaming
      cache: "no-store",
    }
  ).then((res) => res.json());
  return (
    <Card>
      <div className="h-full flex justify-center items-center text-xl text-white">
        Data has been fetched!
      </div>
    </Card>
  );
}
