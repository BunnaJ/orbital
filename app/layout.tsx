import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const sora = Sora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sora",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default:
      "Orbital Resources Limited — World-Class Engineering & Energy Services",
    template: "%s | Orbital Resources Limited",
  },
  description:
    "Orbital Resources Limited (ORL) delivers world-class consultancy, engineering, and marine services to the oil and gas industry across Nigeria and West Africa.",
  keywords: [
    "engineering services Nigeria",
    "oil gas consultancy",
    "marine services Nigeria",
    "EPCI projects West Africa",
    "Orbital Resources Limited",
  ],
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://orbital-ng.com",
    siteName: "Orbital Resources Limited",
    title:
      "Orbital Resources Limited — World-Class Engineering & Energy Services",
    description:
      "Delivering world-class consultancy, engineering, and marine services to the sub-Saharan energy industry.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Orbital Resources Limited",
    description:
      "World-class engineering and marine services for Nigeria's energy sector.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${sora.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1 overflow-x-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
