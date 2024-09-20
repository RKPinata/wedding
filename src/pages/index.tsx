import localFont from "next/font/local";

import Layout from "@/components/Layout/Layout";

// example fonts
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const weddingFont = localFont({
  src: "./fonts/theweddingsignatureregular-bwz55.ttf",
  variable: "--font-wedding",
  weight: "400",
});

export default function Home() {
  return (
    <main className={`${weddingFont.variable}`}>
      <Layout />
    </main>
  );
}
