import dynamic from "next/dynamic";
import { Hero } from "@/components/sections/Hero";
import { SectionAnalytics } from "@/components/SectionAnalytics";

const FlipStatement = dynamic(() =>
  import("@/components/sections/FlipStatement").then((m) => ({
    default: m.FlipStatement,
  })),
);

const HowItWorks = dynamic(() =>
  import("@/components/sections/HowItWorks").then((m) => ({
    default: m.HowItWorks,
  })),
);

const Showcase = dynamic(() =>
  import("@/components/sections/Showcase").then((m) => ({
    default: m.Showcase,
  })),
);

const FAQ = dynamic(() =>
  import("@/components/sections/FAQ").then((m) => ({
    default: m.FAQ,
  })),
);

export default function HomePage() {
  return (
    <main>
      <SectionAnalytics />
      <Hero />
      <FlipStatement variant="light" interval={2200} />
      <HowItWorks />
      <Showcase />
      <FAQ />
    </main>
  );
}
