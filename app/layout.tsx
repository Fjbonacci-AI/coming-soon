import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.css";
import Footer from "./components/Layout/Footer";
import NavbarLayout from "./components/Layout/Navbar";

const geologica = Geologica({
  variable: "--font-geologica",
});

export const metadata: Metadata = {
  title: "Fjbonacci",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={geologica.variable}>
        <NavbarLayout />
        {children}
        <Footer />
      </body>
    </html>
  );
}
