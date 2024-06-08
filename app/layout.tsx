import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://localhost:3000"),

  title: "Siddhant Kumar",
  authors: {
    name: "chensokheng",
  },

  description:
    "Based in India, I am a full stack developer with a passion for building web applications.",
  openGraph: {
    title: "Siddhant Kumar",
    description:
      "Based in India, I am a full stack developer with a passion for building web applications.",
    url: "https://localhost:3000",
    siteName: "Siddhant Kumar",
    images: "/Spirit Blossom Sett.png",
    type: "website",
  },
  keywords: ["daily web coding", "chensokheng", "dailywebcoding"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
