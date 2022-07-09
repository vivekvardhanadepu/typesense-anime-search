// Local dependencies
import React from "react";
import Image from "next/image";

interface Props {
  hit: any;
}

const Hit = ({ hit }: Props) => {
  return (
    <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 dark:bg-slate-800 h-52">
      <div className="relative w-24 md:w-48 md:rounded-none rounded-full">
        <Image src={hit.picture} alt={hit.title} layout="fill" />
      </div>

      <div className="flex-col pt-6 md:p-8 text-center md:text-left space-y-4">
        <blockquote>
          <p className="text-base font-medium text-stone-800 dark:text-blue-600">
            {hit.title}
          </p>
        </blockquote>
        <figcaption className="font-medium">
          <div>
            <div className="text-sm text-cyan-500 dark:text-cyan-700">
              Links:{" "}
              {hit.sources.map((url: string, index: number) => {
                return (
                  <a
                    className="text-sm text-sky-500 dark:text-sky-400"
                    href={url}
                    key={index}
                  >
                    <u>{index}</u>{" "}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="text-sm text-slate-700 dark:text-slate-500">
            Episodes: {hit.episodes}
          </div>
        </figcaption>
      </div>
    </figure>
  );
};

export default Hit;
