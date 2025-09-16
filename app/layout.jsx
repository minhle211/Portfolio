import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

//Components
import Header from "@/components/Header"
import PageTransition from "@/components/PageTransition";
import StairTrans from "@/components/StairTrans";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"], 
  weight: ["100","200","300","400","500","600","700","800"],
  variable: '--font-jetbrainMonos'});

export const metadata = {
  title: "Leo Le",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header/>
        <StairTrans/>
        <PageTransition>
        {children}
        </PageTransition>
      </body>
    </html>
  );
}
