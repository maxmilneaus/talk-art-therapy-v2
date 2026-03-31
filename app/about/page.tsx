import type { Metadata } from "next";
import AboutContent from "./AboutContent";

export const metadata: Metadata = {
  title: "About Max | Talk. Art. Therapy.",
  description: "From photographer to counsellor. Fifteen years visual storytelling, twelve months in Buddhist monasteries, Master of Counselling from Swinburne. Melbourne therapist Max Milne.",
  keywords: ["Max Milne", "counsellor Melbourne", "art therapist Melbourne", "therapist background", "Swinburne counselling"],
  openGraph: {
    title: "About Max | Talk. Art. Therapy.",
    description: "From photographer to counsellor. 15 years visual storytelling, 12 months in monasteries, Master of Counselling.",
    type: "website",
    locale: "en_AU",
  },
};

export default function AboutPage() {
  return <AboutContent />;
}
