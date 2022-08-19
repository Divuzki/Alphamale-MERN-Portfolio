import React from "react";
import { skillsList } from "./Lists.jsx";

function SkillComponent() {
  return (
    // <!-- Clients -->
    <div className="container mt-12 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <link href="https://unpkg.com/pattern.css" rel="stylesheet" />
      <section className="w-full">
        <h2 id="skills" className="secondary-title">
          What I Can Do
        </h2>
        <p className="section-paragraph">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta eos
          hic et labore quia!
        </p>

        <div className="mt-[3rem] shadow-md flex flex-wrap -mx-4 w-full">
          <div className="p-4 md:mb-0 mb-6 flex flex-wrap gap-10 ">
            {skillsList.map((n, idx) => (
              <div
                key={idx}
                className="pattern-dots-md gray-light mb-[3rem] w-full md:w-[24rem]"
              >
                <div className="rounded bg-gray-800 p-4 transform translate-x-6 -translate-y-6  ">
                  <div
                    className={`w-10 h-10 inline-flex items-center justify-center rounded-full ${
                      n?.color
                        ? `bg-${n.color}-100 text-${n.color}-500`
                        : "bg-green-100 text-green-500"
                    } mb-5 flex-shrink-0 p-2`}
                  >
                    {n.icon}
                  </div>
                  <div className="flex-grow ">
                    <h2 className=" text-xl title-font font-medium mb-3">
                      {n.skill}
                    </h2>
                    <p className="leading-relaxed text-sm text-justify">
                      {n.msg}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillComponent;
