import type { Metadata } from "next";
import HomeContent from "./HomeContent";

export const metadata: Metadata = {
  title: "Talk. Art. Therapy. | Max Milne — Melbourne Counsellor",
  description: "Talk therapy and art therapy in Melbourne for people who feel stuck, overwhelmed, or can't quite name what's going on. Stories to live by.",
  keywords: ["therapist Melbourne", "counsellor Melbourne", "art therapy", "talk therapy", "mental health", "Thornbury"],
  openGraph: {
    title: "Talk. Art. Therapy. | Max Milne",
    description: "Talk therapy and art therapy for people who feel stuck or overwhelmed. Stories to live by.",
    type: "website",
    locale: "en_AU",
  },
};

export default function HomePage() {
  return <HomeContent />;
}
