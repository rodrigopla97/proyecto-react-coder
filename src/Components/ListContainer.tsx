import { useEffect, useState } from "react";
import { CardContainer } from "./cardContainer";
import { Product, ItemListContainerProps } from "../entities/entities";

export function ItemListContainer({ namePath, titlePath }: ItemListContainerProps) {
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
      <CardContainer product={listApi} pathProp={namePath} />
    </>
  );
}
