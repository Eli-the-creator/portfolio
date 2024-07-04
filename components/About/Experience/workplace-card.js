import React from "react";

export default function WorkplaceCard() {
  return (
    <div className="flex justify-between group border-[1px] border-neutral-500/30 p-4 hover:border-neutral-200/60 hover:bg-[rgb(24,24,24)] transition-all duration-300 rounded-xl shadow-neutral-50/40 shadow-[0px_0px_600px_0px_rgba(000,000,000,0.1)] bg-black/70">
      <div className="flex">
        <div className="">
          <p className="text-md text-neutral-100 font-bold pb-2">Google</p>
          <p className="text-sm text-neutral-500 leading-4 group-hover:text-neutral-100 transition-all duration-500">
            Junior Front-end developer
          </p>
        </div>
      </div>
      <div className="">
        <p className="text-sm text-neutral-500 group-hover:text-neutral-100 transition-all duration-500">
          2020 - 2021
        </p>
      </div>
    </div>
  );
}
