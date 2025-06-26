import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/layout/sections/navbar";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { Toaster } from "sonner";  // <-- Importa Toaster aquí

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shadcn - Landing template",
  description: "Landing template from Shadcn",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={cn("min-h-screen bg-background", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {children}

          <Toaster className="toast-container-center" richColors />  {/* <-- Aquí */}
        </ThemeProvider>
      </body>
    </html>
  );
}
