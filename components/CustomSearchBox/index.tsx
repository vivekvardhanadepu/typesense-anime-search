import Link from "next/link";
import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";

interface Props {
  currentRefinement: any;
  refine: Function;
}

const SearchBox = ({ currentRefinement, refine }: Props) => (
  <div className="flex items-center justify-between px-5 pb-5 bg-orange-300">
    <div className="flex">
      <h1 className="font-serif text-5xl">Typesense anime-search demo</h1>

      <Link
        className="self-end"
        href="https://github.com/vivekvardhanadepu/typesense-anime-search"
      >
        <p className="text-blue-300">[s]</p>
      </Link>
    </div>

    <input
      className="px-4 py-2 border-2 border-gray-200 rounded"
      type="search"
      placeholder="Search"
      value={currentRefinement}
      onChange={(event) => refine(event.currentTarget.value)}
    />
  </div>
);

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
