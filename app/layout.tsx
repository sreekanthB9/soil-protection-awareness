import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ScrollProgressBar } from "@/components/scroll-progress";
import { LoadingScreen } from "@/components/loading-screen";
import { FloatingActionButton } from "@/components/floating-action-button";
import { STUDENT_INFO } from "@/lib/data";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${STUDENT_INFO.projectTitle} | CSP Project`,
  description: `Community Service Project by ${STUDENT_INFO.name} on soil protection and conservation awareness in Yemmiganur, Andhra Pradesh. Survey findings, field visits, awareness programs, and recommendations.`,
  keywords: [
    "soil protection",
    "conservation",
    "CSP",
    "community service project",
    "Yemmiganur",
    "sustainable agriculture",
    "soil health",
    STUDENT_INFO.college,
  ],
  authors: [{ name: STUDENT_INFO.name }],
  openGraph: {
    title: STUDENT_INFO.projectTitle,
    description: "A 6-week community service project on soil protection and conservation awareness.",
    type: "website",
    locale: "en_IN",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <LoadingScreen />
          <ScrollProgressBar />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <FloatingActionButton />
        </ThemeProvider>
      </body>
    </html>
  );
}
