import React from "react";
import CardItem from "./CardItem";

const CardContainer = (props) => {
  const products = props.product;
  const pathProp = props.pathProp;

  console.log(pathProp, "pathProp");
  return (
    <div className="flex justify-center flex-wrap mx-4 ">
      {products.map(
        (product) =>
          (pathProp === "destacado"
            ? product.category === "electronics"
            : product.category !== "electronics") &&
          (pathProp === "oferta" ? product.price < 50 : true) && (
            <CardItem key={product.id} product={product} />
          )
      )}
    </div>
  );
};

export default CardContainer;
