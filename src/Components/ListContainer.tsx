import React, { useEffect, useState } from "react";
import CardContainer from "./cardContainer";

export type Product = {
  id: number;
  name: string;
  image: string;
  status: string;
  gender: string;
  species: string;
};

type ItemListContainerProps = {
  addToCart: (item: Product, quantity: number) => void;
  namePath?: string;
  titlePath?: string;
};

const ItemListContainer = ({ addToCart, namePath, titlePath }: ItemListContainerProps) => {
  const [listApi, setListApi] = useState<Product[]>([]);

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((res) => res.json())
      .then((json) => setListApi(json.results));
  }, []);

  return (
    <>
      <div className="item-list-container text-center my-8">
        <h2>{titlePath}</h2>
      </div>
      <CardContainer
        product={listApi}
        pathProp={namePath}
        addToCart={addToCart}
      />
    </>
  );
};

export default ItemListContainer;
