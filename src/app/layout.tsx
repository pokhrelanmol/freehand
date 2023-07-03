import NextAuthSessionProvider from "@/providers/NextAuthSessionProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html className="bg-amber-100" lang="en">
            <body className={inter.className}>
                <NextAuthSessionProvider>{children}</NextAuthSessionProvider>
            </body>
        </html>
    );
}
