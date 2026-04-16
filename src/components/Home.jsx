import React from "react";
import { Link } from "react-router-dom";
import ProfileImg from "./profile_img.png";
import pro from "../logo/Screenshot 2026-04-15 224438.png";
import ProjectCard from "./project";
import password from "../logo/Screenshot 2026-04-16 170025.png";

function About() {
  return (
    <>
      <div className="mx-auto w-full max-w-7xl">
        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
          <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
              <h2 className="text-4xl font-bold sm:text-5xl">
                Hi, I am Vardan Tyagi
                <span className=" sm:block text-xl mt-1">
                  Frontend Developer
                </span>
              </h2>
              {/* Project Link*/}
              <Link
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                to="https://github.com/Vardantyagi12?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
                  />
                </svg>
                &nbsp; View Projects
              </Link>
              {/* Resume Download Link*/}
              <Link
                className="inline-flex text-white items-center ml-10 px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                to="https://drive.google.com/file/d/11zd_vRpdPgkSjDf3r3JfrDG2m3ODgJLx/view?usp=drive_link"
                target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
                &nbsp; View Resume
              </Link>
            </div>
          </div>

          <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
            <img className="w-96 rounded-full" src={ProfileImg} alt="image1" />
          </div>
        </aside>
        <div className="flex gap-5">
          <ProjectCard
            picture={pro}
            projectName={"Portfolio Wbsite"}
            detail={"[React + Tailwind CSS]"}
            githubLink=""
            liveDemoLink=""
          />
          <ProjectCard
            picture={password}
            projectName={"Password Generator"}
            detail={"[React + Tailwind CSS]"}
            githubLink="https://github.com/Vardantyagi12/PasswordGenerator"
            liveDemoLink="https://vardantyagi12.github.io/PasswordGenerator/"
          />
        </div>
      </div>
    </>
  );
}

export default About;
