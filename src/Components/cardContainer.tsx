import { CardItem } from "./CardItem";
import { CardContainerProps } from "../entities/entities";

export function CardContainer({ product, pathProp }: CardContainerProps) {
  return (
    <div className="flex justify-center flex-wrap mx-4">
      {product.map((item) =>
        (pathProp === "destacado" && item.gender === "Male") ||
        (pathProp === "oferta" && item.status === "Dead") ||
        !pathProp ? (
          <CardItem key={item.id} product={item} />
        ) : null
      )}
    </div>
  );
}
