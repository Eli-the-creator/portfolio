import React from "react";
import { forwardRef } from "react";
import Card from "./Experience/Card";

const AboutSection = React.forwardRef(({ text }, ref) => {
  return (
    <div className="mt-10 laptop:mt-40 p-2 laptop:p-0" ref={ref}>
      <h1 className="tablet:m-10 text-2xl tablet:text-4xl laptop:text-4xl desktop:text-5xl laptopl:text-5xl ">
        About.
      </h1>

      <div className="flex flex-col laptop:flex-row  justify-between gap-4 mt-5 p-4 w-full">
        <div className="order-1 mob:order-2 mt-2 text-xl laptop:text-[16px] leading-6 w-full laptop:w-1/2">
          <p className="">
            My name is Eliasz, and I am a Front-End Engineer. I start my journey
            in{" "}
            <span className="font-bold text-zinc-300">
              Software Development in 2021.
            </span>{" "}
            Since then, I have been dedicated to creating high-quality web
            applications for clients, primarily using{" "}
            <span className="font-bold text-zinc-300">
              Typescript working with frameworks like React (Next-JS) and React
              Native(Expo).
            </span>
          </p>
          <br />
          <p className="">
            In my work, I strive to create intuitive and visually appealing
            interfaces that not only meet modern standards but also exceed user
            expectations. My experience spans both{" "}
            <span className="font-bold text-zinc-300">
              WEB & MOBILE App&apos;s
            </span>{" "}
            development, allowing me to deliver seamless and consistent user
            experiences across different platforms.
          </p>
          <br />
          <p className="">
            I believe in the power of collaboration and always focus on
            achieving{" "}
            <span className="font-bold text-zinc-300">team success</span> rather
            than individual accomplishments.
          </p>
          <br />
          <p className="">
            I am passionate about continuous learning and keeping up with the
            latest trends and technologies to ensure that the solutions I
            provide are cutting-edge and effective.
          </p>
        </div>
        <Card />
      </div>
    </div>
  );
});

export default AboutSection;
