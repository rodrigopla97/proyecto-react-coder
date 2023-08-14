import React from "react";
import CardItem from "./CardItem";

const CardContainer = (props) => {
  const products = props.product;
  const pathProp = props.pathProp;
  const addToCart = props.addToCart;

  return (
    <div className="flex justify-center flex-wrap mx-4 ">
      {products.map(
        (product) =>
          (pathProp === "destacado"
            ? product.gender === "Male"
            : product.gender !== "Male") &&
          (pathProp === "oferta" ? (product.status = "Dead") : true) && (
            <CardItem
              key={product.id}
              product={product}
              addToCart={addToCart}
            />
          )
      )}

      {products.map((product) =>
        (pathProp === "destacado" && product.gender === "Male") ||
        (pathProp === "oferta" && product.status === "Dead") ? (
          <CardItem key={product.id} product={product} addToCart={addToCart} />
        ) : (
          <CardItem key={product.id} product={product} addToCart={addToCart} />
        )
      )}
    </div>
  );
};

export default CardContainer;
