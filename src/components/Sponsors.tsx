import { useTheme } from "./theme-provider";
import {
  WordPressIcon,
  ShopifyIcon,
  JoomlaIcon,
  ReactIcon,
  NextIcon,
  ViteIcon,
  DrupalIcon,
  MagentoIcon,
  GatsbyIcon,
  VuejsIcon,
  NuxtjsIcon,
  SvelteIcon,
  GridsomeIcon,
  AngularIcon,
  SquarespaceIcon,
  WixIcon,
  DjangoIcon,
  FlaskIcon,
  RubyonrailsIcon,
  LaravelIcon,
} from "./Icons";

interface SponsorProps {
  icon: JSX.Element;
  name: string;
}
export const Sponsors = () => {
  const { theme } = useTheme();
  const sponsors: SponsorProps[] = [
    {
      icon: <ShopifyIcon theme={theme} />,
      name: "Shopify",
    },
    {
      icon: <WordPressIcon theme={theme} />,
      name: "Wordpress",
    },
    {
      icon: <JoomlaIcon theme={theme} />,
      name: "Joomla",
    },
    {
      icon: <ReactIcon theme={theme} />,
      name: "React",
    },
    {
      icon: <NextIcon theme={theme} />,
      name: "Next.js",
    },
    {
      icon: <ViteIcon theme={theme} />,
      name: "Vite",
    },
    {
      icon: <DrupalIcon theme={theme} />,
      name: "Drupal",
    },
    {
      icon: <MagentoIcon theme={theme} />,
      name: "Magento",
    },
    {
      icon: <GatsbyIcon theme={theme} />,
      name: "Gatsby",
    },
    {
      icon: <VuejsIcon theme={theme} />,
      name: "Vue.js",
    },
    {
      icon: <NuxtjsIcon theme={theme} />,
      name: "Nuxt.js",
    },
    {
      icon: <SvelteIcon theme={theme} />,
      name: "Svelte",
    },
    {
      icon: <GridsomeIcon theme={theme} />,
      name: "Gridsome",
    },
    {
      icon: <AngularIcon theme={theme} />,
      name: "Angular",
    },
    {
      icon: <SquarespaceIcon theme={theme} />,
      name: "Squarespace",
    },
    {
      icon: <WixIcon theme={theme} />,
      name: "Wix",
    },
    {
      icon: <DjangoIcon theme={theme} />,
      name: "Django",
    },
    {
      icon: <FlaskIcon theme={theme} />,
      name: "Flask",
    },
    {
      icon: <RubyonrailsIcon theme={theme} />,
      name: "Ruby on Rails",
    },
    {
      icon: <LaravelIcon theme={theme} />,
      name: "Laravel",
    },
  ];

  return (
    <section id="sponsors" className="container pt-24 sm:py-32">
      <h2 className="text-center text-md lg:text-xl font-bold mb-8 text-primary">
        Works with
      </h2>

      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
        {sponsors.map(({ icon, name }: SponsorProps) => (
          <div
            key={name}
            className="icon-container flex flex-col items-center text-muted-foreground/60"
          >
            <span className="icon mb-2">{icon}</span>
            <h3 className="icon-text text-sm md:text-base font-bold">{name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};
