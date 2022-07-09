import React from "react";
import { connectSearchBox } from "react-instantsearch-dom";

interface Props {
  currentRefinement: any;
  refine: Function;
}

const SearchBox = ({ currentRefinement, refine }: Props) => (
  <div className="flex items-center justify-center">
    <div className="flex border-2 border-gray-200 rounded">
      <input
        className="px-4 py-2 w-80"
        type="search"
        placeholder="Search"
        value={currentRefinement}
        onChange={(event) => refine(event.currentTarget.value)}
      />
    </div>
  </div>
);

const CustomSearchBox = connectSearchBox(SearchBox);

export default CustomSearchBox;
