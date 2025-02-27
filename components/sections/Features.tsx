import { features } from "@/constants";
import { SquareMousePointerIcon } from "lucide-react";

const Features = () => {
  return (
    <section className="py-20 container mx-auto">
      <div className="flex flex-col justify-center gap-6 mb-20">
        <div className="flex items-center gap-2 text-base text-neutral-500/50 font-normal">
          <SquareMousePointerIcon className="h-4 w-4" /> <span>Features</span>
        </div>
        <h2 className="text-md md:text-2xl lg:text-4xl font-bold ">
          Powerfull Features for Content Creators
        </h2>
        <p className="text-neutral-500/50">
          AyoshinAi&apos;s exceptional flexibility can handle any type of video.
          And we never stop innovating.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div
              key={index}
              className=" p-6 rounded-xl border border-gray-200 hover:border-blue-500 transition-all duration-300"
            >
              <div
                className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${feature.iconBg}`}
              >
                <Icon className={`w-6 h-6 ${feature.iconColor}`} />
              </div>

              <h3 className={`text-xl font-semibold mb-2`}>{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;
