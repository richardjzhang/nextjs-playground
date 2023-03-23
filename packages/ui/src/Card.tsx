import * as React from "react";

export const Card = ({ title, cta }: { title: string; cta: string }) => {
  return (
    <div className="ui-group ui-rounded-lg ui-border ui-border-transparent ui-h-full ui-min-h-[130px] ui-overflow-hidden ui-bg-origin-border ui-bg-gradient-to-r ui-from-brandred ui-to-brandblue ui-text-[#6b7280]">
      <div className="ui-p-4 ui-bg-zinc-900 ui-h-full">
        <p className="ui-inline-block ui-text-xl ui-text-white">{title}</p>
        <div className="ui-text-xs ui-mt-2 group-hover:ui-underline">
          {cta} →
        </div>
      </div>
    </div>
  );
};
