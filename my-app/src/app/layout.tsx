import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Meu app",
  description: "Tela inicial em Next.js!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
