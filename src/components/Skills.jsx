import { CheckBadgeIcon, CpuChipIcon } from "@heroicons/react/24/outline";
import { skills } from "../data";
export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto mb-20">
        <div className="text-center mb-20">
          <CpuChipIcon className="w-10 inline-block mb-4" />
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Skills & Technologies
          </h1>
          {/* <p className="mb-8 leading-relaxed mx-auto">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum, nihil
            veniam dolor sequi omnis soluta magni? Dolore, unde nihil distinctio
            obcaecati nam, molestiae expedita porro magnam ducimus quo assumenda
            quas.
          </p> */}
        </div>

        <div className="flex flex-wrap mx-auto lg:w-4/5 sm:w-auto">
          {skills.map((skill) => {
            return (
              <div key={skill} className=" p-2 sm:w-1/2 w-full">
                <div className="mx-10 flex rounded bg-gray-800 p-4 h-full items-center">
                  <CheckBadgeIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                  <span className="text-white title-font font-medium">
                    {skill}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
