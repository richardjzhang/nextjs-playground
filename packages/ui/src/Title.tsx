import * as React from "react";
import clsx from "clsx";

export function Title({
  center,
  children,
}: {
  center?: boolean;
  children: React.ReactNode;
}) {
  return (
    <h1
      className={clsx(
        center && "ui-text-center",
        "ui-text-6xl ui-font-extrabold ui-tracking-tight ui-text-white sm:ui-text-7xl lg:ui-text-8xl xl:ui-text-8xl"
      )}
    >
      <span className="ui-bg-gradient-to-r ui-from-brandred ui-to-brandblue ui-bg-clip-text ui-text-transparent">
        {children}
      </span>
    </h1>
  );
}
