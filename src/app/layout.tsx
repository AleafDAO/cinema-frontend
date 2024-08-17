import "./globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import "@radix-ui/themes/styles.css";
import { Navbar } from "@/components/navbar";
import { Theme } from "@radix-ui/themes";
import React from "react";
import { Providers } from "./providers";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "@/components/footer";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Providers>
            <Navbar />
            <main className="min-h-[calc(100vh-250px)]">{children}</main>
            <Footer />
          </Providers>
        </Theme>
      </body>
    </html>
  );
}

export default RootLayout;
