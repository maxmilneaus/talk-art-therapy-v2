import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Talk. Art. Therapy. | Max Milne — Melbourne Counsellor",
  description: "Stories to live by. Talk therapy, art therapy, and contemplative practice for people who feel stuck, overwhelmed, or can't quite name what's going on.",
  keywords: ["therapist Melbourne", "counsellor Melbourne", "art therapy", "addiction counselling", "talk therapy", "transpersonal therapy"],
  authors: [{ name: "Max Milne" }],
  openGraph: {
    title: "Talk. Art. Therapy. | Max Milne",
    description: "Stories to live by. Talk therapy, art therapy, and contemplative practice.",
    type: "website",
    locale: "en_AU",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
