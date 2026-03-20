import type { Metadata } from "next";
import { Suspense } from "react";
import "@refinedev/antd/dist/reset.css";
import "./globals.css";

import { RefineProvider } from "@/components/refine-provider";

export const metadata: Metadata = {
  title: "Nextedge Admin",
  description: "Refine admin shell for the salon platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={<div style={{ padding: 24 }}>Loading admin...</div>}>
          <RefineProvider>{children}</RefineProvider>
        </Suspense>
      </body>
    </html>
  );
}
