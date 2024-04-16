import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SMACS",
  description: "Science and Mathematics Applied to Computer Science",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-background mx-8 md:mx-10 lg:mx-24`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
