import { useState } from "react";
import Editor from "./components/Editor";
import Review from "./components/Review";
import "./App.css"

function App() {
  const [review, setReview] = useState("");
  const [state, setState] = useState<"idle" | "generating" | "generated">("idle");
  const isGenerating = state === "generating";

  const handleGenerateReview = async (code: string) => {
    try {
      setState("generating");
      const response = await fetch("http://localhost:3000/api/v1/reviews", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await response.json();
      setReview(data.review);
    } catch (err) {
      alert("Something went wrong. Please try again later.");
      console.log(err);
    }

    setState("generated");
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <main className="w-full max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900">Code Review Assistant</h1>
          <p className="text-gray-500 mt-2">
            Get instant professional code reviews powered by AI
          </p>
        </div>
        
        <div className="flex gap-6 h-[calc(100vh-16rem)]">
          <div className="flex-1">
            <Editor isGenerating={isGenerating} onGenerateReview={handleGenerateReview} />
          </div>
          <div className="flex-1">
            <Review isGenerating={isGenerating} review={review} />
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;