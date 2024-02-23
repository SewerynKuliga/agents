import type { Metadata } from "next";

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
        {children}
      </body>
    </html>
  );
}
