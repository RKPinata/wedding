import localFont from "next/font/local";
import CardLayout from "@/components/CardLayout/CardLayout";

const playfairDisplay = localFont({
  src: "./fonts/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--playfai-display",
  weight: "400",
})

// const weddingFont = localFont({
//   src: "./fonts/theweddingsignatureregular-bwz55.ttf",
//   variable: "--font-wedding",
//   weight: "400",
// });

export default function Home() {
  return (
    <main className={`${playfairDisplay.variable}`}>
      <CardLayout />
    </main>
  );
}
