import type { NextPage } from "next";
import {
  InstantSearch,
  Configure,
  SearchBox,
  Hits,
  Pagination,
  RefinementList,
  SortBy,
  ClearRefinements,
} from "react-instantsearch-dom";
import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";

// Local dependencies
import CustomClearRefinements from "../components/CustomClearRefinements";
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
    <div className="bg-white dark:bg-slate-900">
      <div className="text-center">
        <p className="text-amber-200">Typesense anime-search demo</p>
      </div>
      <InstantSearch
        indexName="animes"
        searchClient={typesenseInstantSearchAdapter.searchClient}
      >
        <Configure hitsPerPage={9} />
        <div className="flex">
          <aside className="hidden fixed inset-0 z-20 flex-none w-80 h-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-48 lg:block">
            <CustomClearRefinements />
            <div className="py-8">
              <h2>Tags</h2>
              <RefinementList
                className="border border-solid border-orange-400 rounded drop-shadow-2xl"
                attribute="tags"
              />
            </div>

            <div className="py-8">
              <h2>Type</h2>
              <RefinementList
                attribute="type"
                className="border border-black rounded drop-shadow-2xl"
              />
            </div>
            <div className="py-8">
              <h2>Status</h2>
              <RefinementList
                attribute="status"
                className="border border-black rounded drop-shadow-2xl"
              />
            </div>
          </aside>
          <main className="flex-auto w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
            <CustomSearchBox />
            <Hits hitComponent={Hit} />
          </main>
        </div>
        <Pagination />
      </InstantSearch>
    </div>
  );
};
export default Home;
