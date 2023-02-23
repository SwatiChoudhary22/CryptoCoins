import { FC, memo } from "react";

type SearchProps = {
  search: string;
  setSearch: (event: any) => void;
};

const Search: FC<SearchProps> = ({ setSearch, search }) => {
  return (
    <>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        placeholder="Search"
        className="fixed top-0 z-50 w-full p-3 mx-auto border-red-700 rounded-lg placeholder:text-blue-700 bg-red-50"
      ></input>
    </>
  );
};

Search.defaultProps = {};

export default memo(Search);
