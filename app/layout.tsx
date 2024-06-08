import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-demo-lol.netlify.app"),

  title: "Siddhant Kumar",
  authors: {
    name: "Siddhant Kumar",
  },

  description:
    "Based in India, I am a full stack developer with a passion for building web applications.",
  openGraph: {
    title: "Siddhant Kumar",
    description:
      "Based in India, I am a full stack developer with a passion for building web applications.",
    url: "https://portfolio-demo-lol.netlify.app",
    siteName: "Siddhant Kumar",
    images: "/Spirit Blossom Sett.png",
    type: "website",
  },
  keywords: [
    "Portfolio Demo From Sid",
    "Siddhant Kumar",
    "Sid's Next.js Website",
  ],
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
