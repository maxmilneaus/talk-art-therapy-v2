import type { Metadata } from "next";
import WhatWeExploreContent from "./WhatWeExploreContent";

export const metadata: Metadata = {
  title: "What We Explore | Talk. Art. Therapy.",
  description: "Stress, anxiety, life transitions, grief, compulsive patterns, and questions of meaning. What brings people to therapy — and what we work through together.",
  keywords: ["therapy for anxiety", "therapy for stress", "grief counselling", "addiction therapy Melbourne", "life transitions"],
  openGraph: {
    title: "What We Explore | Talk. Art. Therapy.",
    description: "Stress, anxiety, transitions, grief, compulsive patterns. What brings people to therapy.",
    type: "website",
    locale: "en_AU",
  },
};

export default function WhatWeExplorePage() {
  return <WhatWeExploreContent />;
}
