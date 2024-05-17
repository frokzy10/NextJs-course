import React from "react";
import type {Metadata} from "next";
import "./globals.scss";
import Header from "@/widgets/header/ui/Header";
import StoreProvider from "@/providers/storeProvider/ui/storeProvider";


export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

type RootLayoutProps = {
    children: React.ReactNode;
};

export default function RootLayout({children}: RootLayoutProps) {
    return (
        <html lang="en">
        <body>
        <Header/>
        <StoreProvider>
            {children}
        </StoreProvider>
        </body>
        </html>
    );
};
