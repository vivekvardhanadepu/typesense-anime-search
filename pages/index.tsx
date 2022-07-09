import type { NextPage } from "next";
import {
  InstantSearch,
  Configure,
  Hits,
  Pagination,
  RefinementList,
} from "react-instantsearch-dom";
import TypesenseInstantsearchAdapter from "typesense-instantsearch-adapter";

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
    <div className="bg-zinc-300 py-5">
      <InstantSearch
        indexName="animes"
        searchClient={typesenseInstantSearchAdapter.searchClient}
      >
        <Configure hitsPerPage={9} />
        <CustomSearchBox />
        <div className="flex px-5 justify-between">
          <aside className="hidden fixed inset-0 z-20 flex-none w-80 h-full lg:static lg:h-auto lg:overflow-y-visible lg:pt-0 lg:w-48 lg:block">
            <div className="py-5">
              <p className="font-serif text-4xl font-medium">Filter by tags</p>
              <RefinementList
                className="border border-solid border-orange-400 rounded drop-shadow-2xl"
                attribute="tags"
              />
            </div>

            <div className="py-5">
              <p className="font-serif text-4xl font-medium">Filter by Type</p>
              <RefinementList
                attribute="type"
                className="border border-black rounded drop-shadow-2xl"
              />
            </div>
          </aside>
          <main className="w-full min-w-0 lg:static lg:max-h-full lg:overflow-visible">
            <Hits hitComponent={Hit} />
            <Pagination />
          </main>
        </div>
      </InstantSearch>
    </div>
  );
};
export default Home;
