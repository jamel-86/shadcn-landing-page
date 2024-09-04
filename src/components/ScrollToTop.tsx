import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ArrowUpToLine, MessageSquare } from "lucide-react";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  return (
    <>
      {showTopBtn && (
        <>
          <div
            className={`group fixed ${
              showTopBtn ? "bottom-20" : "bottom-4"
            } right-3 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg flex items-center justify-start cursor-pointer transition-all duration-300 ease-in-out z-50 overflow-hidden text-white hover:w-44 hover:shadow-xl`}
          >
            <MessageSquare size={24} className="ml-3 flex-shrink-0" />
            <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out whitespace-nowrap">
              Leave Feedback
            </span>
          </div>
          <Button
            onClick={goToTop}
            className="fixed bottom-4 right-4 opacity-90 shadow-md"
            size="icon"
          >
            <ArrowUpToLine className="h-4 w-4" />
          </Button>
        </>
      )}
      {!showTopBtn && (
        <div
          className={`group fixed bottom-4 right-3 w-12 h-12 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full shadow-lg flex items-center justify-start cursor-pointer transition-all duration-300 ease-in-out z-50 overflow-hidden text-white hover:w-44 hover:shadow-xl`}
        >
          <MessageSquare size={24} className="ml-3 flex-shrink-0" />
          <span className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out whitespace-nowrap">
            Leave Feedback
          </span>
        </div>
      )}
    </>
  );
};
