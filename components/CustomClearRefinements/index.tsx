import React from "react";
import { connectCurrentRefinements } from "react-instantsearch-dom";

interface Props {
  items: any[];
  refine: Function;
}
const ClearRefinements = ({ items, refine }: Props) => (
  <button
    onClick={() => refine(items)}
    disabled={!items.length}
    className="border border-solid border-slate-100 text-sm bg-slate-300 rounded font-serif px-2 py-0"
  >
    clear
  </button>
);

export default connectCurrentRefinements(ClearRefinements);
