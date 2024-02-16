import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techfolkz - A portal of tutorial and learning materials for tech people. Find all latest technology related news and articles here.",
  description: "Techfolkz is a technical blog site where latest news and articles related to technology will be published. It is a learning hub for the programmers to learn coding, problem solving and share knowledge with each other.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <main className="max-w-6xl mx-auto px-4">
              <Navbar/>
              <div className="mt-8">{children}</div>
            </main>
          </ThemeProvider>
      </body>
    </html>
  );
}
