import { useState } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Review from "./components/Review";
// A simple code reviewer app
// we will have two columns layout
// where we canw rite code
// AI will give review on our code => PR review

function App() {
  const [review, setReview] = useState("");
  const [state, setState] = useState<"idle" | "generating" | "generated">(
    "idle"
  );

  const isGenerating = state === "generating";

  const handleGenerateReview = async (code: string) => {
    try {
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
    setState("generated")
  };

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden">
      <Editor
        isGenerating={isGenerating}
        onGenerateReview={handleGenerateReview}
      />
      <Review isGenerating={isGenerating} review={review} />
    </div>
  );
}

export default App;
