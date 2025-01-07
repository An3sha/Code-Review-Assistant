import MarkdownPreview from "@uiw/react-markdown-preview";
import { Loader2 } from "lucide-react";

const Review = ({
  review,
  isGenerating,
}: {
  review: string;
  isGenerating: boolean;
}) => {
  return (
    <div className="flex h-full flex-col overflow-hidden rounded-lg border-2 border-gray-200 shadow-lg bg-zinc-700">
      <div className="border-b border-gray-200 bg-gray-50 px-4 py-3">
        <span className="text-sm font-medium text-gray-700">AI Review</span>
      </div>
      <div className="flex-1 overflow-auto">
        {isGenerating ? (
          <div className="flex h-full items-center justify-center">
            <div className="flex items-center gap-2">
              <Loader2 className="h-4 w-4 animate-spin text-gray-400" />
              <span className="text-sm text-gray-400">
                Generating review...
              </span>
            </div>
          </div>
        ) : (
          <MarkdownPreview
            source={review || "Your code review will appear here"}
            style={{
              fontSize: "14px",
              backgroundColor: "transparent",
              height: "100%",
              padding: "16px",
              color: "#e5e7eb"
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Review;