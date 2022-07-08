// Local dependencies
import React from "react";
import Image from "next/image";

interface Props {
  hit: any;
}

const Hit = ({ hit }: Props) => {
  console.log("hit", hit);
  console.log("wadha");
  // return (
  //   <div className="bg-gray-50 border">
  //     <Image src={hit.picture} height={148} width={96} alt={hit.name} />
  //     <h3 className="truncate">{hit.title}</h3>
  //   </div>
  // );
  return (
    <div className="flex flex-col space-y-3 m-5 border p-3">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className="w-32 h-40 self-center" src={hit.picture} alt={hit.name} />
      <div>
        <h1 className="text-lg font-bold">{hit.title}</h1>
      </div>
      <div className="flex flex-wrap space-x-4 truncate">
        {hit.sources.map((item: any, index: number) => {
          return (
            <a href={item} key={index}>
              Link {index}
            </a>
          );
        })}
      </div>
      <div className="flex flex-row space-x-2 items-baseline">
        <h1 className="text-lg font-bold">Episodes: </h1>
        <p>{hit.episodes}</p>
      </div>
      <div>
        <div className="truncate">
          {hit.tags.map((tag: string, index: number) => {
            return (
              <div
                className="ml-4 text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-blue-200 text-blue-700 rounded-full"
                key={index}
              >
                {tag}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Hit;
