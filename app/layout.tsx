import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "GaadiGuru",
  description: "Ride Booking Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={comfortaa.className}>
        {children}

        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              borderRadius: "10px",
              padding: "12px 16px",
            },
          }}
        />
      </body>
    </html>
  );
}