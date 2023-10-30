// Generate a component that has a 5 second delay in loading by doing a fetch
import { Card } from "ui";

export default async function DataFetching() {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return (
    <Card>
      <div className="h-full flex justify-center items-center text-xl text-white">
        Data has been fetched!
      </div>
    </Card>
  );
}
