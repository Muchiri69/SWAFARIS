import { Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  variable: "--font-cormorant",
});

export const metadata = {
  title: "Swafaris - Premium AI Travel Kenya",
  description: "Discover Kenya, your way.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cormorant.variable}>
        {children}
      </body>
    </html>
  );
}
