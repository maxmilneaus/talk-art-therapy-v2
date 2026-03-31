import type { Metadata } from "next";
import AddictionContent from "./AddictionContent";

export const metadata: Metadata = {
  title: "Addiction & Compulsive Use | Talk. Art. Therapy.",
  description: "Addiction counselling in Melbourne for screens, pornography, social media, substances. Trauma-informed, twelve-step recovery experience. Understanding, not judgment.",
  keywords: ["addiction counselling Melbourne", "compulsive use therapy", "pornography addiction help", "screen addiction", "trauma-informed addiction therapy"],
  openGraph: {
    title: "Addiction & Compulsive Use | Talk. Art. Therapy.",
    description: "Addiction counselling for screens, substances, compulsive patterns. Understanding, not judgment. Trauma-informed approach.",
    type: "website",
    locale: "en_AU",
  },
};

export default function AddictionPage() {
  return <AddictionContent />;
}
