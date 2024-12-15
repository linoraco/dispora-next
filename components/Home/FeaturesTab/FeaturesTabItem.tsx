import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const FeaturesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, imageDark } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5">{desc1}</p>
          <p className="w-11/12">{desc2}</p>
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
          <div className="relative mx-auto h-[172px] max-w-[301px] rounded-t-xl border-[8px] border-gray-800 bg-gray-800 dark:border-gray-800 md:h-[294px] md:max-w-[512px]">
            <div className="h-[156px] overflow-hidden rounded-lg bg-white dark:bg-gray-800 md:h-[278px]">
              <img
                src={image}
                className="h-[156px] w-full rounded-lg dark:hidden md:h-[278px]"
                alt={title}
              />
              <img
                src={imageDark}
                className="hidden h-[156px] w-full rounded-lg dark:block md:h-[278px]"
                alt={title}
              />
            </div>
          </div>
          <div className="relative mx-auto h-[17px] max-w-[351px] rounded-b-xl rounded-t-sm bg-gray-900 dark:bg-gray-700 md:h-[21px] md:max-w-[597px]">
            <div className="absolute left-1/2 top-0 h-[5px] w-[56px] -translate-x-1/2 rounded-b-xl bg-gray-800 md:h-[8px] md:w-[96px]"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturesTabItem;
