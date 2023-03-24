import { useRef, useState } from "react";
import { LoadingDots, Title } from "ui";

const SUBMIT_BUTTON_STYLE =
  "mt-4 px-4 h-10 flex items-center justify-center bg-blue-500 rounded text-white font-medium hover:bg-blue-600 w-full";

export default function EdgeFunctions() {
  const [loading, setLoading] = useState<boolean>(false);
  const [question, setQuestion] = useState<string>("");
  const [answer, setAnswer] = useState<string>("");
  const answerRef = useRef<null | HTMLDivElement>(null);

  const scrollToBios = () => {
    if (answerRef.current !== null) {
      answerRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const prompt = `You are to act as a front-end expert, with particular focus on Next.js, React and Vercel. You are to answer in a friendly, kind, and inspiring way - feel free to also add in some humor!
      
  You will be given a question, and your response should be relatively succinct (ideally under 800 characters). The question is:
  
  ${question}`;

  const generateAnswer = async (e: any) => {
    e.preventDefault();
    setAnswer("");
    setLoading(true);
    const response = await fetch("/api/ask-question", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setAnswer((prev) => prev + chunkValue);
    }
    scrollToBios();
    setLoading(false);
  };

  return (
    <div>
      <Title>Frontend Expert</Title>
      <div className="mt-12">
        <h2 className="mb-4 text-xl font-semibold text-zinc-300">
          Ask a question
        </h2>
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          rows={4}
          className="p-4 w-full rounded-md border-gray-300 shadow-sm text-black focus:border-zinc-300 focus:ring-zinc-300"
          placeholder={"e.g. What are Edge Functions in Next.js?"}
        />
      </div>
      {!loading && (
        <button
          className={SUBMIT_BUTTON_STYLE}
          onClick={(e) => generateAnswer(e)}
        >
          Submit
        </button>
      )}
      {loading && (
        <button className={SUBMIT_BUTTON_STYLE} disabled>
          <LoadingDots color="white" style="large" />
        </button>
      )}
      {answer && (
        <div ref={answerRef} className="mt-12">
          <h2 className="mb-4 text-xl font-semibold text-zinc-300">Answer</h2>
          <div className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border text-black">
            <p>{answer}</p>
          </div>
        </div>
      )}
    </div>
  );
}
