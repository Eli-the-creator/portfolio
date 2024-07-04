import Image from "next/image";
import React from "react";

const AboutMeSelf = () => {
  return (
    <div className="mt-10 laptop:mt-40 p-2 laptop:p-0 bg-black  w-full flex justify-center items-center  border-neutral-100/10 tablet:rounded-3xl mob:rounded-xl shadow-zinc-50/10 shadow-[0px_0px_28px_1px_inset]">
      <div className="flex mt-5 p-4 w-screen tablet:flex-row mob:flex-col justify-around items-center">
        <div className="shadow-orange-100/30 shadow-2xl border border-orange-300/40 rounded-full h-[320px] mb-6">
          <Image
            width={340}
            height={340}
            className=" rounded-full"
            src="/me.png"
            alt="Author photo"
          />
        </div>

        <div className="mob:w-full  tablet:w-[60%]">
          <h3 className="mb-4 mt-4 text-2xl tablet:text-4xl laptop:text-4xl desktop:text-5xl laptopl:text-5xl ">
            How is Eliasz.
          </h3>
          <p className=" text-zinc-500  text-md laptop:text-[16px]">
            23 years old Software Engineer.
          </p>
          <p className="mt-2 text-zinc-500  text-md mb-4 laptop:text-[16px]">
            You'll often find me exploring new hiking trails, experimenting with
            recipes in the kitchen, or diving into tech and psychology books. I
            believe that a balanced lifestyle enhances both my creativity and
            productivity at work.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMeSelf;
