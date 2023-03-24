import Image from "next/image";
import Link from "next/link";
import { DeployButton } from "ui";

const HORIZONTAL_RESPONSIVE_STYLES = "mx-auto max-w-4xl px-4 lg:px-8";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
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
    </>
  );
};

export default Layout;
