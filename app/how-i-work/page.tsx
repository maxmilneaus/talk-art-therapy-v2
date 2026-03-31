import type { Metadata } from "next";
import HowIWorkContent from "./HowIWorkContent";

export const metadata: Metadata = {
  title: "How I Work | Talk. Art. Therapy.",
  description: "My approach to therapy — talk therapy, art therapy, and contemplative practice. No answers, just presence and process. Melbourne counsellor Max Milne.",
  keywords: ["therapy approach", "art therapy process", "talk therapy Melbourne", "contemplative therapy", "how therapy works"],
  openGraph: {
    title: "How I Work | Talk. Art. Therapy.",
    description: "My approach to therapy — talk, art, and contemplative practice. No answers, just presence.",
    type: "website",
    locale: "en_AU",
  },
};

export default function HowIWorkPage() {
  return <HowIWorkContent />;
}
