import React from "react";
import Header from "./Header";
import profile_img from "../logo/About.png";
import skill_img from "../logo/Skills.png";

function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="mx-auto w-full max-w-xs md:max-w-sm">
            <img className="rounded-full shadow-2xl" src={profile_img} alt="image" />
          </div>

          <div className="md:w-7/12 lg:w-6/12 ml-10 mt-6 md:mt-0 space-y-6 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-2xl">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Frontend Developer
            </h2>
            <p className="mt-6 text-gray-600">
              I’m a front-end developer who enjoys building clean and responsive
              web applications. I like working with React and modern JavaScript,
              and I try to keep my code simple, readable, and easy to maintain.
              For me, it’s not just about making things work — it’s about
              creating smooth and enjoyable user experiences.
            </p>
            <p className="mt-4 text-gray-600">
              I’m always learning and trying to improve by building new projects
              and exploring different technologies. I enjoy solving problems and
              figuring things out along the way, and I’m excited to keep growing
              as a developer while working on meaningful projects.
            </p>
          </div>
        </div>

        <div className="flex flex-col space-y-6 md:space-y-0 md:flex-row md:gap-6 lg:items-center lg:gap-12">
          <div className="mx-auto w-full max-w-xs md:max-w-sm mt-6 md:mt-0">
            <img className="rounded-full shadow-2xl" src={skill_img} alt="image" />
          </div>
          <div className="md:w-7/12 lg:w-6/12 ml-10 mt-6 md:mt-0">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              Tech Stack
            </h2>
            <ol className="mt-6 list-decimal list-inside space-y-3 rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-2xl">
              <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-gray-700 shadow-sm transition hover:border-orange-800 hover:shadow-md marker:text-orange-500 marker:text-lg marker:font-semibold">
                HTML
              </li>
              <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-gray-700 shadow-sm transition hover:border-orange-800 hover:shadow-md marker:text-orange-500 marker:text-lg marker:font-semibold">
                CSS
              </li>
              <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-gray-700 shadow-sm transition hover:border-orange-800 hover:shadow-md marker:text-orange-500 marker:text-lg marker:font-semibold">
                JavaScript
              </li>
              <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-gray-700 shadow-sm transition hover:border-orange-800 hover:shadow-md marker:text-orange-500 marker:text-lg marker:font-semibold">
                React
              </li>
              <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-gray-700 shadow-sm transition hover:border-orange-800 hover:shadow-md marker:text-orange-500 marker:text-lg marker:font-semibold">
                SQL
              </li>
              <li className="rounded-2xl border border-slate-200 bg-white px-4 py-3 text-gray-700 shadow-sm transition hover:border-orange-800 hover:shadow-md marker:text-orange-500 marker:text-lg marker:font-semibold">
                TailwindCSS
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
