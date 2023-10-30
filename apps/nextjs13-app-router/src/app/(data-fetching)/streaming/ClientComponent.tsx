"use client";

import { useState } from "react";
import { Card } from "ui";

export default function ClientComponent() {
  const [count, setCount] = useState(0);
  return (
    <Card>
      <div className="w-full h-full flex flex-col items-center justify-center">
        <button
          className="mt-4 flex items-center justify-center py-3 px-4 bg-blue-500 text-white rounded"
          onClick={() => setCount((c) => c + 1)}
        >
          Press me!
        </button>
        <div className="mt-3">Total times pressed: {count}</div>
      </div>
    </Card>
  );
}
