import React, { useEffect, useState } from "react";
import CardContainer from "./cardContainer";

const ItemListContainer = (props) => {
  const [listApi, setListApi] = useState([]);

  const pathProp = props.namePath;
  const titlePath = props.titlePath;
  const addToCart = props.addToCart;

  // useEffect(() => {
  //   fetch("https://fakestoreapi.com/products/")
  //     .then((res) => res.json())
  //     .then((json) => setListApi(json));
  // }, []);
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((json) => setListApi(json.results));
  }, []);

  console.log("listApi ->", listApi);

  return (
    <>
      <div className="item-list-container text-center my-8">
        <h2>{titlePath}</h2>
      </div>
      <CardContainer
        product={listApi}
        pathProp={pathProp}
        addToCart={addToCart}
      />
    </>
  );
};

export default ItemListContainer;
