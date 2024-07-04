import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <div className="pt-24 flex flex-col justify-center items-center">
            <h1 className="text-3xl tablet:text-6xl laptop:text-4xl laptopl:text-7xl text-bold text-zinc-200">
              LET&apos;S TALK
            </h1>
            <button
              className="tablet:px-12 tablet:py-3 mob:px-8 mob:py-1 mob:text-[18px] rounded-xl bg-zinc-100 text-zinc-800 hover:bg-zinc-800 hover:text-zinc-100 transition-all duration-300 link text-xl mt-5 cursor-none"
              onClick={() => window.open("mailto:neverlookbackeli@gmail.com")}
            >
              Email me
            </button>
            <div className="mt-10 pt-32">
              <Socials />
            </div>
          </div>
        </div>
      </div>
      <p className="text-sm text-center text-bold mt-5 laptop:mt-10 p-2 laptop:p-0">
        Made With ❤ by{" "}
        <span className="underline underline-offset-1"> Eliasz Zakrzewski</span>
      </p>
    </>
  );
};

export default Footer;
