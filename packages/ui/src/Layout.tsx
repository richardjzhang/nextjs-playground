import * as React from "react";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="ui-flex ui-min-h-screen ui-flex-col ui-items-center ui-justify-center ui-py-2">
      {children}
    </div>
  );
};
