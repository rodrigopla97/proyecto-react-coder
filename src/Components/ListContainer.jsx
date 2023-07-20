import React, { useEffect } from "react";
import { useState } from "react";
import CardContainer from "./cardContainer";

const ItemListContainer = (props) => {
  const [listApi, setListApi] = useState([]);

  const pathProp = props.namePath;
  const titlePath = props.titlePath;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => res.json())
      .then((json) => setListApi(json));
  }, []);

  console.log("listApi ->", listApi);

  return (
    <>
      <div className="item-list-container text-center my-8">
        <h2>{titlePath}</h2>
      </div>

      <CardContainer product={listApi} pathProp={pathProp} />
    </>
  );
};

export default ItemListContainer;
