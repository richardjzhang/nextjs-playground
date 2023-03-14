import * as React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="ui-flex ui-min-h-screen ui-flex-col ui-py-2 text-white">
      <div className="ui-mx-auto ui-flex-1 ui-w-full ui-max-w-5xl ui-px-4 ui-pt-16 ui-pb-8 sm:ui-pt-24 lg:ui-px-8">
        {children}
      </div>
    </main>
  );
};
