import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import AIChat from "@/components/AIChat";
import { Toaster } from "sonner";
import { CartProvider } from "@/lib/CartContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EOO | Premium Lifestyle Tech",
  description: "Experience the future of audio and wearables with EOO.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        <CartProvider>
          {children}
        </CartProvider>
        <AIChat />
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
