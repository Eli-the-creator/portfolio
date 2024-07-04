import React from "react";
import WorkplaceCard from "./workplace-card";

export default function Card() {
  return (
    <div className="w-full h-full tablet:order-2 rounded-xl p-5  max-w-[500px] mx-auto mob:w-full mob:order-1 border border-[rgba(255,255,255,0.09)] bg-[rgba(40,40,40,0.10)] shadow-[0px_0px_9px_0px_rgba(210,205,210,0.06)_inset] ">
      <div className="pb-6">
        <h3 className="text-md font-bold">Experience.</h3>
        <p className="text-neutral-500 text-sm leading-6">
          The place that made me who I am.
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <WorkplaceCard />
        <WorkplaceCard />
      </div>
    </div>
  );
}
