import { Highlight, connectRefinementList } from "react-instantsearch-dom";

interface Props {
  items: any[];
  currentRefinement: string[];
  refine: Function;
  isFromSearch: boolean;
  searchForItems: Function;
  createURL: Function;
}

const RefinementList = ({
  items,
  isFromSearch,
  refine,
  searchForItems,
}: Props) => (
  <ul>
    <li>
      <input
        type="search"
        onChange={(event) => searchForItems(event.currentTarget.value)}
      />
    </li>
    {items.map((item: any) => (
      <li key={item.label}>
        <a
          href="#"
          style={{ fontWeight: item.isRefined ? "bold" : "" }}
          onClick={(event) => {
            event.preventDefault();
            refine(item.value);
          }}
        >
          {isFromSearch ? (
            <Highlight attribute="label" hit={item} />
          ) : (
            item.label
          )}{" "}
          ({item.count})
        </a>
      </li>
    ))}
  </ul>
);

export default connectRefinementList(RefinementList);
