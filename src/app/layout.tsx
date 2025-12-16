import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import DataMeshBackground from "@/components/layout/DataMeshBackground";
import Providers from "@/components/Providers";
import CustomCursor from "@/components/ui/CustomCursor";
import ThemeToggleFab from "@/components/ui/ThemeToggleFab";
import { Footer } from "@/components/Footer";
import { Analytics } from "@/components/Analytics";
import { CookieBanner } from "@/components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Levely Creative | Diseño y desarrollo web orientado a conversión",
  description: "Diseño y desarrollo web orientado a conversión y medición. Next.js, soluciones premium y resultados tangibles.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-background text-foreground flex flex-col min-h-screen overflow-x-hidden`}
      >
        <Providers>
          <Analytics />
          <DataMeshBackground />
          <CustomCursor />
          <Navbar />
          <main className="flex-grow pt-24 pb-12 relative z-10 text-foreground">
            {children}
          </main>
          <Footer />
          <ThemeToggleFab />
          <CookieBanner />
        </Providers>
      </body>
    </html>
  );
}
