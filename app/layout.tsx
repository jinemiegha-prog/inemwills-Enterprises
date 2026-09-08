import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: {default:"Inemwills Enterprise",template:"%s | Inemwills Enterprise"}, description:"Nigerian oil and gas construction, contract, and consultancy services based in Yenagoa, Bayelsa State." };

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
