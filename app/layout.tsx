import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clinique Recto Verso | Grandir, bouger, s’épanouir",
  themeColor: "#f6f5fc",
  description:
    "La Clinique Recto Verso accompagne les enfants de 0 à 18 ans dans leur développement, à Québec et dans les environs.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr-CA">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
