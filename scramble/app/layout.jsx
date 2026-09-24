import "../style.css";

export const metadata = {
  metadataBase: new URL(
    process.env.NEXTAUTH_URL ||
    (process.env.VERCEL_PROJECT_PRODUCTION_URL
      ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
      : "http://127.0.0.1:3000")
  ),
  title: "Scramb — Daily word arcade",
  description: "Scramb: a daily word arcade. Make words, fill the board, beat the clock.",
  openGraph: {
    type: "website",
    siteName: "Scramb",
    title: "Scramb — Wordplay, over easy",
    description: "Trace paths, fill the gaps, and cook up your best score on the daily board.",
    images: [{ url: "/scramb-preview.png", width: 1200, height: 630, alt: "Scramb in pixel lettering beside a sunny-side-up egg on a dark background." }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Scramb — Wordplay, over easy",
    description: "Trace paths, fill the gaps, and cook up your best score on the daily board.",
    images: ["/scramb-preview.png"],
  },
  icons: { icon: "/egg.svg" },
};

export const viewport = { themeColor: "#111324" };

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}</body></html>;
}
