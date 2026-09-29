import type { Metadata } from "next";
import "./styles.css";

export const metadata: Metadata = {
  title: "Agent Inc. | A tiny intelligence, growing",
  description: "A cozy little simulation of an AI finding its feet.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
