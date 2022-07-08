import type { NextPage } from "next";
import {
  InstantSearch,
  Configure,
  SearchBox,
  Hits,
  Pagination,
  RefinementList,
  SortBy,
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
    <div>
      <InstantSearch
        indexName="animes"
        searchClient={typesenseInstantSearchAdapter.searchClient}
      >
        <Configure hitsPerPage={12} />
        <div className="flex">
          <aside className="w-1/4 bg-gray-58 h-screen p-8">
            <RefinementList attribute="tags" />
          </aside>
          <main>
            {/* <SearchBox /> */}
            <CustomSearchBox />
            <SortBy
              defaultRefinement="animes"
              items={[
                { label: "Default", value: "animes" },
                { label: "Episodes", value: "animes/sort/episodes:asc" },
              ]}
            />
            <Hits hitComponent={Hit} />
            <Pagination />
          </main>
        </div>
      </InstantSearch>
    </div>
  );
};
export default Home;
