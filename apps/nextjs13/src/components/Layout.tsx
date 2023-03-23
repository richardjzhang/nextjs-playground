import Image from "next/image";
import Link from "next/link";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="py-5 border-b border-zinc-600">
        <div className="mx-auto px-4 max-w-4xl text-white lg:px-8">
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
      <main className="mx-auto flex flex-col w-full max-w-4xl px-4 pt-16 pb-8 text-white sm:pt-24 lg:px-8">
        {children}
      </main>
    </>
  );
};

export default Layout;
