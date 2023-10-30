import * as React from "react";

export const Card = ({
  title,
  cta,
  children,
}: {
  title?: string;
  cta?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className="ui-group ui-rounded-lg ui-border ui-border-transparent ui-h-full ui-min-h-[130px] ui-overflow-hidden ui-bg-origin-border ui-bg-gradient-to-r ui-from-blue-500 ui-to-emerald-500 ui-text-[#6b7280]">
      <div className="ui-p-4 ui-bg-zinc-900 ui-h-full ui-min-h-full">
        {title && (
          <p className="ui-inline-block ui-text-xl ui-text-white">{title}</p>
        )}
        {cta && (
          <div className="ui-text-xs ui-mt-2 group-hover:ui-underline">
            {cta} →
          </div>
        )}
        {children && <div className="ui-h-full ui-min-h-full">{children}</div>}
      </div>
    </div>
  );
};
