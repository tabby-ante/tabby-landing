"use client";

import dynamic from "next/dynamic";

const HelpAgent = dynamic(
  () => import("@/components/HelpAgent").then((m) => m.HelpAgent),
  { ssr: false },
);

export function LazyHelpAgent() {
  return <HelpAgent />;
}
