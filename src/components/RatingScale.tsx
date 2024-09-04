import React from "react";

interface RatingOption {
  label: string;
  emoji: string;
}

const ratingOptions: RatingOption[] = [
  { label: "Worst", emoji: "😞" },
  { label: "Not Good", emoji: "😕" },
  { label: "Fine", emoji: "😊" },
  { label: "Look Good", emoji: "😃" },
  { label: "Very Good", emoji: "😍" },
];

interface RatingScaleProps {
  label: string;
}

export const RatingScale: React.FC<RatingScaleProps> = ({ label }) => {
  return (
    <div className="flex flex-col justify-center items-center px-5 mt-2.5 w-full max-md:max-w-[500px]">
      <h2 className="gap-2 self-stretch text-2xl font-medium leading-none text-center text-foreground">
        {label}
      </h2>
      <div className="flex flex-col justify-center mt-5 w-full max-w-[500px] min-h-[226px] max-md:max-w-full">
        <div className="flex flex-row justify-between gap-1 items-center text-md font-bold text-primary max-md:max-w-[500px]">
          {ratingOptions.map((option, index) => (
            <div
              key={index}
              className="flex flex-col justify-center items-center p-1 text-center whitespace-nowrap flex-shrink-0"
            >
              <span className="text-xl md:text-4xl">{option.emoji}</span>
              <div className="mt-1">{option.label}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col flex-1 justify-center py-5 w-full rounded-none max-md:max-w-full">
          <div className="flex shrink-0 h-4 bg-primary rounded-[41.362px] max-md:max-w-full" />
        </div>
      </div>
    </div>
  );
};
