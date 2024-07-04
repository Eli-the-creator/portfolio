import { useRef } from "react";
import Header from "../components/Header";
import { BentoGridTwoColomns } from "../components/ServiceCard";
import WorkCard from "../components/WorkCard";
import Footer from "../components/Footer";
import Head from "next/head";
import Button from "../components/Button";
import Link from "next/link";
import Cursor from "../components/Cursor";
import AboutMeSelf from "../components/Me/me";
//

// Local Data
import data from "../data/portfolio.json";
import webProjectsDate from "../data/web-project.json";
import mobileProject from "../data/mobile-project.json";
import AboutSection from "../components/About/AboutSection";
import TechBadge from "../components/extra/technologis";
import { motion } from "framer-motion";

// Helpers
import {
  getPreviewData,
  normilizaDataObject,
  normilizeAndMergeObject,
} from "../utils/helpers";

// Helpers Normalize JSON Objet to JS Array of Object with id
const PROJECT_DATA = normilizeAndMergeObject(webProjectsDate, mobileProject);
const PREVIEW_PROJECT_DATA = getPreviewData(PROJECT_DATA);

export default function Home() {
  // Ref
  const workRef = useRef();
  const aboutRef = useRef();

  // Handling Scroll
  const handleWorkScroll = () => {
    window.scrollTo({
      top: workRef.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleAboutScroll = () => {
    window.scrollTo({
      top: aboutRef.current.offsetTop - 200,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`relative antialiased pixelated cursor-none ${
        data.showCursor && "cursor-none"
      }`}
    >
      {data.showCursor && <Cursor />}
      <Head>
        <title>{data.name}</title>
      </Head>
      <div className="gradient-circle"></div>
      <div className="gradient-circle-bottom"></div>

      <div className="backdrop-blur-md border-b  border-neutral-100/10 transition-all pr-4 pl-2 duration-75 sticky top-0 z-[1000] ">
        <Header
          handleWorkScroll={handleWorkScroll}
          handleAboutScroll={handleAboutScroll}
        />
      </div>

      <div className="container mx-auto mb-10  text-zinc-400">
        <div className="flex justify-center items-center relative h-[50vh] mt-32 ">
          <div className="mt-5 flex flex-col justify-center items-center  z-[100]">
            <motion.p
              initial={{ opacity: 0, y: 2, filter: "blur(9px)" }}
              animate={{ opacity: 1, y: 2, filter: "blur(0px)" }}
              transition={{
                delay: 0.4,
                duration: 0.9,
              }}
              className="flex mb-1 text-md mob:text-md  mob:font-medium laptop:text-xl bg-gradient-to-b from-zinc-50 to-black bg-clip-text text-transparent"
            >
              Front-end & App Developer
            </motion.p>

            <h1 className="text-5xl font-[500] text-center text-zinc-200/90 tablet:text-7xl laptop:text-6xl desktop:text-8xl laptopl:text-8xl ">
              {data.headerTaglineOne}
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 2, filter: "blur(12px)" }}
              animate={{ opacity: 1, y: 2, filter: "blur(10px)" }}
              transition={{
                delay: 0.4,
                duration: 0.9,
              }}
              className=" bg-gradient-to-r from-transparent via-purple-300/90 to-transparent h-[3.2px] w-1/2 blur-sm"
            />
            <motion.div
              initial={{ opacity: 0, y: 2, filter: "blur(2px)" }}
              animate={{ opacity: 1, y: 2, filter: "blur(0px)" }}
              transition={{
                delay: 0.8,
                duration: 0.6,
              }}
              className=" bg-gradient-to-r from-transparent via-indigo-400/70 to-transparent h-px w-full"
            />
          </div>
        </div>

        <AboutSection ref={aboutRef} text={data.aboutpara} />
        <AboutMeSelf />

        <div className="mt-40">
          <h3 className="text-2xl text-center tablet:text-4xl laptop:text-4xl desktop:text-5xl mb-20 ">
            Achievements.
          </h3>
          <BentoGridTwoColomns />
        </div>

        <div className="pt-64">
          <h3 className="text-center mb-4 text-5xl">Main tech stack</h3>

          <TechBadge />
        </div>

        <div className="pt-64 laptop:mt-32 p-2 laptop:p-0 " ref={workRef}>
          <h1 className="tablet:m-10 text-2xl tablet:text-4xl laptop:text-4xl desktop:text-5xl laptopl:text-5xl ">
            Showcase.
          </h1>

          <div className="mt-5 laptop:mt-10 flex flex-wrap justify-center mx-auto ">
            {PREVIEW_PROJECT_DATA.map((project) => (
              <WorkCard
                key={project.id}
                img={project.img}
                name={project.projectName}
                description={""}
                onClick={() => window.open("/about-project/" + project.id)}
              />
            ))}
          </div>
        </div>

        {/* This button should not go into production */}
        {process.env.NODE_ENV === "development" && (
          <div className="fixed bottom-5 right-5">
            <Link href="/edit">
              <Button type="primary">Edit Data</Button>
            </Link>
          </div>
        )}
        <Footer />
      </div>
    </div>
  );
}
