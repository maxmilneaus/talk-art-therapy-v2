import type { Metadata } from "next";
import WorkingTogetherContent from "./WorkingTogetherContent";

export const metadata: Metadata = {
  title: "Working Together | Talk. Art. Therapy.",
  description: "$130 per session in Thornbury, Melbourne. Free 15-minute consultation. Medicare rebates available. In-person and telehealth sessions.",
  keywords: ["therapy cost Melbourne", "counsellor fees", "Mental Health Care Plan", "telehealth therapy", "Thornbury therapist"],
  openGraph: {
    title: "Working Together | Talk. Art. Therapy.",
    description: "$130 per session. Free 15-minute consultation. Medicare rebates available. Thornbury, Melbourne.",
    type: "website",
    locale: "en_AU",
  },
};

export default function WorkingTogetherPage() {
  return <WorkingTogetherContent />;
}
