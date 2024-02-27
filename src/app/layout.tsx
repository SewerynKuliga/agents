import type { Metadata } from "next";
import { ReduxProvider } from "./store/provider";

export const metadata: Metadata = {
  title: "J.S. List",
  description: "List of james smith agents",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        style={{
          padding: 0,
          margin: 0,
          width: "100%",
          maxHeight: "100vh",
        }}
      >
        <ReduxProvider> {children}</ReduxProvider>
      </body>
    </html>
  );
}
