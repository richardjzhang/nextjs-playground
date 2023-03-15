import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="ui-py-5 ui-border-b ui-border-zinc-600">
        <div className="ui-mx-auto ui-px-4 ui-max-w-5xl ui-text-white lg:ui-px-8">
          <Link href="/">
            <Image
              alt="Vercel Logo"
              src="/vercel-icon-light.png"
              width={32}
              height={32}
            />
          </Link>
        </div>
      </div>
      <main className="ui-mx-auto ui-flex ui-flex-col ui-w-full ui-max-w-5xl ui-px-4 ui-pt-16 ui-pb-8 text-white sm:ui-pt-24 lg:ui-px-8">
        {children}
      </main>
    </>
  );
};

export default Layout;
