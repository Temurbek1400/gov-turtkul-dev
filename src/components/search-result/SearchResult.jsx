import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getActiveLanguageName } from "store/reducer-and-action/language/language";
import { getSearchResult } from "store/reducer-and-action/news/newsSlice";
import SearchResultItem from "./SearchResultItem";

const SearchResult = () => {
  const activeLang = useSelector(getActiveLanguageName);
  const [searchResult, pending] = useSelector(getSearchResult);
  useEffect(() => {}, [searchResult, pending]);

  console.log(`----------------${pending}--------------`);
  return (
    <div>
      {pending
        ? "Loading"
        : searchResult?.[activeLang]?.map((item) => (
            <SearchResultItem item={item} />
          ))}
    </div>
  );
};

export default SearchResult;
