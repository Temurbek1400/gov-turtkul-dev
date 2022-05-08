import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getActiveLanguageName } from "store/reducer-and-action/language/language";
import { getSearchResult } from "store/reducer-and-action/news/newsSlice";


// "id": 6,
// "filter": "capital-improvements",
// "title": "Shaharda yangi park ochilishi kutilmoqda",
// "body": "Laodbdhdks dhdhdj dhdjdj hdjsjsjsbs hxjmsbs jsmdvtjk",
// "date": "2022-05-05T16:02:39.934117+05:00",
// "imagesown": "/media/files/IMG_20220428_185701_861.jpg"


const SearchResult = () => {
  const activeLang = useSelector(getActiveLanguageName);
  const [searchResult, pending] = useSelector(getSearchResult);
  useEffect(() => {}, [searchResult, pending]);

  console.log(`----------------${pending}--------------`);
  return (
    <div>
      {pending
        ? "Loading"
        : searchResult?.[activeLang]?.map((item) => item.title)}
    </div>
  );
};

export default SearchResult;
