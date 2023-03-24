// These styles apply to every route in the application
import "../styles/globals.css";

export const metadata = {
  title: "Next.js 13 - App Router",
  description: "Features of Next.js 13 using the app router",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
