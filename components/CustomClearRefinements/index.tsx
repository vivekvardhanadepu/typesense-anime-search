import React from "react";
import { connectCurrentRefinements } from "react-instantsearch-dom";

interface Props {
  items: any[];
  refine: Function;
}
const ClearRefinements = ({ items, refine }: Props) => (
  <button onClick={() => refine(items)} disabled={!items.length}>
    Clear all refinements
  </button>
);

export default connectCurrentRefinements(ClearRefinements);
