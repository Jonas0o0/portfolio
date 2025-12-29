import type { Metadata } from "next";
import { Montserrat, Karla } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
    subsets: ["latin"],
    variable: "--font-montserrat",
    display: "swap",
});

const karla = Karla({
    subsets: ["latin"],
    variable: "--font-karla",
    display: "swap",
});

export const metadata: Metadata = {
  title: "Jonas FACON | Portfoloio",
  description: "Mon portofolio web, de développeur",
    icons: {
        icon: "/images/portrait.jpg", // chemin relatif depuis /public
    },
};

import Footer from "@/components/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

    const htmlClass = `${montserrat.variable} ${karla.variable}`;

    return (
    <html lang="fr" className={htmlClass}>
      <body>
        {children}
        <Footer />
      </body>
    </html>
  );
}
