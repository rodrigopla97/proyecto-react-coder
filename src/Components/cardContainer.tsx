import React from "react";
import CardItem from "./CardItem";
import { Product } from "./ListContainer";

type CardContainerProps = {
  product: Product[];
  pathProp?: string;
  addToCart: (item: Product, quantity: number) => void;
};

const CardContainer = ({ product, pathProp, addToCart }: CardContainerProps) => {
  return (
    <div className="flex justify-center flex-wrap mx-4">
      {product.map((item) =>
        (pathProp === "destacado" && item.gender === "Male") ||
        (pathProp === "oferta" && item.status === "Dead") ||
        (!pathProp) ? (
          <CardItem key={item.id} product={item} addToCart={addToCart} />
        ) : null
      )}
    </div>
  );
};

export default CardContainer;
