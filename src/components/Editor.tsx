import { useState } from "react";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { Wand2 } from "lucide-react";

const Editor = ({
  isGenerating,
  onGenerateReview,
}: {
  isGenerating: boolean;
  onGenerateReview(code: string): void;
}) => {
  const [code, setCode] = useState("");

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-200 shadow-lg bg-white">
      <div className="flex items-center justify-between border-b border-gray-200 bg-gray-50 px-4 py-3">
        <span className="text-sm font-medium text-gray-700">Write or paste your code here</span>
        <button
          className={`inline-flex items-center rounded-md px-3 py-1.5 text-sm font-semibold shadow-sm 
            ${isGenerating || !code.trim() 
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
              : 'bg-white text-gray-900 hover:bg-gray-50 border border-gray-200'}`}
          disabled={isGenerating || !code.trim()}
          onClick={() => onGenerateReview(code)}
        >
          <Wand2 className="mr-2 h-4 w-4" />
          Review
        </button>
      </div>
      <div className="flex-1 overflow-auto bg-[#1e1e1e]">
        <CodeMirror
          value={code}
          onChange={setCode}
          theme="dark"
          extensions={[javascript({ jsx: true })]}
          style={{
            fontSize: "14px",
            height: "100%",
          }}
        />
      </div>
    </div>
  );
};

export default Editor;