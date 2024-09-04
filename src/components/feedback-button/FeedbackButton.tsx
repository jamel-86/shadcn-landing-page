import { MessageSquare } from "lucide-react";

export const FeedbackButton = () => {
  return (
    <div className="group fixed bottom-20 right-3 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg flex items-center justify-start cursor-pointer transition-all duration-300 ease-in-out z-50 overflow-hidden text-white hover:w-44 hover:shadow-xl">
      <MessageSquare size={24} className="ml-3 flex-shrink-0" />
      <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out whitespace-nowrap">
        Leave Feedback
      </span>
    </div>
  );
};
