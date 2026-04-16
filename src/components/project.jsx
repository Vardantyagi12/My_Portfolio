import React from "react";
import { Link } from "react-router-dom";

function ProjectCard({
  picture,
  projectName,
  detail,
  liveDemoLink = "",
  githubLink = "",
}) {
  return (
    <div className="w-400 rounded-2xl shadow-2xl cursor-pointer ">
      <div className="rounded-2xl">
        <img
          src={picture}
          alt={projectName}
          className="rounded-2xl mt-10 w-full h-64 object-cover"
        />
      </div>
      <div className="rounded-2xl p-5">
        <h3 className="text-4xl font-bold">{projectName}</h3>
        <p className="mt-3 text-gray-500 text-2xl">{detail}</p>
        <div className="flex flex-wrap gap-4 mt-6">
          <Link
            to={liveDemoLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 text-white font-medium bg-orange-700 rounded-lg hover:opacity-75"
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
                d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z"
              />
            </svg>
            <span className="ml-2">Live Demo</span>
          </Link>

          <Link
            to={githubLink}
            target="_blank"
            className="inline-flex items-center px-6 py-3 text-white font-medium bg-orange-700 rounded-lg hover:opacity-75"
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
                d="M9 17.25v1.007a3 3 0 0 1-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0 1 15 18.257V17.25m6-12V15a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 15V5.25m18 0A2.25 2.25 0 0 0 18.75 3H5.25A2.25 2.25 0 0 0 3 5.25m18 0V12a2.25 2.25 0 0 1-2.25 2.25H5.25A2.25 2.25 0 0 1 3 12V5.25"
              />
            </svg>
            <span className="ml-2">Github</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
