// These styles apply to every route in the application
import "../styles/globals.css";
import "ui/styles.css"; // include styles from the ui package
import Image from "next/image";
import Link from "next/link";
import { DeployButton } from "ui";

export const metadata = {
  title: "Next.js 13 - App Router",
  description: "Features of Next.js 13 using the app router",
};

const HORIZONTAL_RESPONSIVE_STYLES = "mx-auto max-w-4xl px-4 lg:px-8";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-zinc-900">
      <body>
        <nav className="py-5 border-b border-zinc-600">
          <div
            className={`${HORIZONTAL_RESPONSIVE_STYLES} flex items-center text-white`}
          >
            <Link className="flex items-center" href="/">
              <Image
                alt="Vercel Logo"
                src="/nextjs-icon-dark-background.png"
                width={36}
                height={36}
              />
            </Link>
            <div className="ml-auto">
              <DeployButton />
            </div>
          </div>
        </nav>
        <main
          className={`${HORIZONTAL_RESPONSIVE_STYLES} flex flex-col w-full pt-16 pb-8 text-white`}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
