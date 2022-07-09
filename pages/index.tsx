import type { NextPage } from "next";
import {
  InstantSearch,
  Configure,
  Hits,
  Pagination,
  RefinementList,
} from "react-instantsearch-dom";
import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";
import CustomClearRefinements from "../components/CustomClearRefinements";

// Local dependencies
import CustomSearchBox from "../components/CustomSearchBox";
import Hit from "../components/Hit";

const typesenseInstantSearchAdapter = new TypesenseInstantsearchAdapter({
  server: {
    apiKey: "xyz",
    nodes: [
      {
        host: "localhost",
        port: 8108,
        protocol: "http",
      },
    ],
  },
  additionalSearchParameters: {
    query_by: "title",
  },
});

const Home: NextPage = () => {
  return (
    <div className="py-5 pb-8">
      <InstantSearch
        indexName="animes"
        searchClient={typesenseInstantSearchAdapter.searchClient}
      >
        <Configure hitsPerPage={9} />
        <CustomSearchBox />
        <div className="flex px-5 justify-between">
          <div className="w64">
            <div className="flex justify-between py-8">
              <p className="text-base font-bold">Filters</p>{" "}
              <CustomClearRefinements />
            </div>

            <div className="py-5">
              <p className="font-serif text-4xl font-medium">Tags</p>
              <RefinementList className="drop-shadow-2xl" attribute="tags" />
            </div>
            <div className="py-8">
              <p className="font-serif text-4xl font-medium">Type</p>
              <RefinementList attribute="type" className="drop-shadow-2xl" />
            </div>
          </div>
          <div>
            <Hits hitComponent={Hit} />
            <Pagination />
          </div>
        </div>
      </InstantSearch>
    </div>
  );
};
export default Home;
