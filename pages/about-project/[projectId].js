"use server";

import { useRouter } from "next/router";
import React from "react";
import Link from "next/link";
import Badge from "../../components/extra/Badge";
import { findDataById } from "../../utils/helpers";
import Carousel from "../../components/extra/Carousel";
import CarouselComponent from "../../components/extra/Carousel";

export default function ProjectPage() {
  const router = useRouter();
  const projectId = router.query.projectId;
  const projectData = findDataById(projectId);

  const getProjectImage = (arr) => {
    const res = [];
    arr.forEach((element) => {
      res.push(element.src);
    });

    return res;
  };

  if (!projectData) {
    return (
      <div className="w-screen h-screen flex justify-center items-center text-3xl animate-ping ">
        Loading
      </div>
    );
  }

  return (
    <div>
      <div className="backdrop-blur-md border-b h-20 flex justify-center items-center border-neutral-100/10 transition-all pr-4 pl-2 duration-75 sticky top-0 z-[1000] ">
        <Link href={"/"} className="text-2xl">
          EZ dev.
        </Link>
      </div>

      {/* Page body */}
      <div className="mx-auto container mt-10">
        <Link href={"/"}>
          <a className="text-sm text-neutral-400 text-center ">
            &larr; back to main page
          </a>
        </Link>

        <div className="container">
          <div className="border-b border-neutral-100/10 pt-4" />
          <div className="w-full p-4 mt-10">
            {/* Right column */}

            <div className="pl-6 pb-10">
              <h1 className="text-3xl pb-2 text-zinc-300">
                {projectData.projectName}
              </h1>
              <p className="text-md w-full tablet:w-[90%] text-zinc-500">
                {projectData.description}
              </p>
              <p className="text-md w-full tablet:w-[90%] text-zinc-500">
                {projectData.modalDescription}
              </p>
              <div className="flex gap-1 flex-wrap pt-12">
                {projectData.feature.map((el, idx) => (
                  <Badge key={idx} className={"text-sm"} text={el} />
                ))}
              </div>
              <div className="flex gap-6 pt-12 flex-wrap">
                <button
                  type="link"
                  onClick={() => window.open(projectData.gitHubURL, "_blank")}
                  className="block px-4 py-2 rounded-xl bg-white shadow-md hover:shadow-[0_0_40px_0px_rgba(200,200,200,0.8)] hover:scale-105 active:scale-95 shadow-[rgba(200,200,200,0.1)] text-zinc-800 transition-all duration-250 text-sm"
                >
                  Source code on GitHub
                </button>
                <button
                  type="link"
                  onClick={() => window.open(projectData.caseURL, "_blank")}
                  href={projectData.caseURL}
                  className="block px-4 py-2 rounded-xl bg-white shadow-md hover:shadow-[0_0_40px_0px_rgba(200,200,200,0.8)] hover:scale-105 active:scale-95 shadow-[rgba(200,200,200,0.1)] text-zinc-800 transition-all duration-250 text-sm"
                >
                  See it online Online
                </button>
              </div>
            </div>

            <div className="flex flex-col overflow-scroll mb-20 mx-auto">
              <div className="min-w-[400px] justify-center items-center">
                <CarouselComponent
                  images={getProjectImage(projectData.modalImg)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
