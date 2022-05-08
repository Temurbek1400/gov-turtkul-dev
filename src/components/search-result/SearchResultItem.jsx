import React from "react";
import styled from "styled-components";
// "id": 6,
// "filter": "capital-improvements",
// "title": "Shaharda yangi park ochilishi kutilmoqda",
// "body": "Laodbdhdks dhdhdj dhdjdj hdjsjsjsbs hxjmsbs jsmdvtjk",
// "date": "2022-05-05T16:02:39.934117+05:00",
// "imagesown": "/media/files/IMG_20220428_185701_861.jpg"
   
const SearchResultItem = ({ item }) => {
  return <div>
    <div>{item.title}</div>
    <div>{item.body}</div>
    <img src={item.imagesown} alt="someImage" />
    {/* performance */}
  </div>;
};

export default SearchResultItem;

const SearchResultItemWrapper = styled.div`

`;
