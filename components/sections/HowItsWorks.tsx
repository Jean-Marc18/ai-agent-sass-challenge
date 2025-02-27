import { steps } from "@/constants";
import { FileQuestion } from "lucide-react";

const HowItsWorks = () => {
  return (
    <section className="pt-14 pb-24 container mx-auto">
      <div className="flex flex-col justify-center gap-6 mb-16">
        <div className="flex items-center gap-2 text-base text-neutral-500/50 font-normal">
          <FileQuestion className="h-4 w-4" /> <span>How it Works</span>
        </div>
        <h2 className="text-md md:text-2xl lg:text-5xl font-bold ">
          Meet Your AI Agent in 3 <br /> Simple Steps
        </h2>
        <p className="text-neutral-500/50"></p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={index} className="p-6 text-balance">
              <div
                className={`w-16 h-16 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl flex items-center justify-center mb-7`}
              >
                <Icon className={`w-6 h-6 text-white`} />
              </div>

              <h3 className={`text-xl font-semibold mb-2`}>{step.title}</h3>
              <p className="text-gray-600/70">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItsWorks;
