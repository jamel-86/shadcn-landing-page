import { Statistics } from "./Statistics";
import logoLight from "../assets/feedsnap-logo-light.svg";
import logoDark from "../assets/feedsnap-logo-dark.svg";
import { MagicCard } from "@/components/magicui/magic-card";
import { useTheme } from "@/components/theme-provider";

export const About = () => {
  const { theme } = useTheme();

  const logo = theme === "dark" ? logoDark : logoLight;

  return (
    <section id="about" className="container py-24 sm:py-32">
      <div className="bg-muted/50">
        <MagicCard
          gradientColor={theme === "dark" ? "#01D56F20" : "#01D56F20"}
          className="p-10"
        >
          <div className="px-6 flex flex-col-reverse md:flex-row gap-8 md:gap-12">
            <img
              src={logo}
              alt=""
              className="w-[300px] object-contain rounded-lg"
            />
            <div className="bg-green-0 flex flex-col justify-between">
              <div className="pb-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
                    About{" "}
                  </span>
                  FeedSnap
                </h2>
                <p className="text-xl text-muted-foreground mt-4">
                  FeedSnap is a powerful and intuitive tool designed to capture
                  user feedback effortlessly. Whether you're running an
                  e-commerce site, a blog, or any online platform, FeedSnap
                  offers an easy way to gather valuable insights from your
                  users. Customize your feedback forms, receive real-time
                  notifications, and dive deep into advanced analytics to
                  improve your services.
                </p>
              </div>

              <Statistics />
            </div>
          </div>
        </MagicCard>
      </div>
    </section>
  );
};
