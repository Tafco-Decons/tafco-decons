import { Inter, Roboto } from "next/font/google";
import "./globals.css";
// import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Navbar2 } from "@/components/Navbar2";
import NavBar from "@/components/NavBar";

const font = Roboto({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata = {
  title: "TAFCO Designs and Constructions",
  description: "TAFCO Designs and Constructions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
