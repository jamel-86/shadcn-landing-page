import { Badge } from "./ui/badge";
import {
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import image from "../assets/growth.png";
import astro from "../assets/Astro.svg";
import pantalones from "../assets/pantalones.svg";
import roboto from "../assets/roboto.png";
import experiments from "../assets/Experiments.svg";
import gamestation from "../assets/Gamestation.svg";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "@/components/theme-provider";

interface FeatureProps {
  title: string;
  description: string;
  image: string;
}

const features: FeatureProps[] = [
  {
    title: "Responsive Design",
    description:
      "Ensure your feedback forms look great on any device, from mobile phones to desktops.",
    image: pantalones,
  },
  {
    title: "Intuitive user interface",
    description:
      "A simple and user-friendly interface designed to make gathering feedback effortless for you and your users",
    image: roboto,
  },
  {
    title: "AI-Powered insights",
    description:
      "Leverage advanced AI to analyze feedback and provide actionable insights to improve your services.",
    image: astro,
  },
  {
    title: "Customizable Themes",
    description:
      "Personalize the look and feel of your feedback forms with easy-to-use theme customization options.",
    image: experiments,
  },
  {
    title: "Real-Time Notifications",
    description:
      "Get instant alerts when new feedback is submitted, allowing you to respond quickly to your users’ needs.",
    image: gamestation,
  },
  {
    title: "Advanced Analytics",
    description:
      "Track and measure the effectiveness of your feedback collection with detailed analytics.",
    image: image,
  },
];

const featureList: string[] = [
  "Dark/Light theme",
  "Reviews",
  "Notifications",
  "Free version",
  "Customizable",
  "Data storage",
  "Responsive design",
  "Easy to use",
  "Minimalist",
];

export const Features = () => {
  const { theme } = useTheme();
  return (
    <section id="features" className="container py-24 sm:py-32 space-y-8">
      <h2 className="text-3xl lg:text-4xl font-bold md:text-center">
        Many{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Great Features
        </span>
      </h2>

      <div className="flex flex-wrap md:justify-center gap-4">
        {featureList.map((feature: string) => (
          <div key={feature}>
            <Badge variant="secondary" className="text-sm">
              {feature}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map(({ title, description, image }: FeatureProps) => (
          <MagicCard
            gradientColor={theme === "dark" ? "#01D56F20" : "#01D56F20"}
            className=""
            key={title}
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
            </CardHeader>

            <CardContent>{description}</CardContent>

            <CardFooter>
              <img
                src={image}
                alt="About feature"
                className="w-[200px] lg:w-[300px] mx-auto"
              />
            </CardFooter>
          </MagicCard>
        ))}
      </div>
    </section>
  );
};
