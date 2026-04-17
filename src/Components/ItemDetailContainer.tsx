import { ItemDetailContainerProps } from "../entities/entities";

export function ItemDetailContainer({ load, product }: ItemDetailContainerProps) {
  if (load) return <p>Cargando...</p>;

  return (
    <div className="flex flex-col items-center gap-2">
      <img
        src={product.image}
        alt={product.name}
        className="w-32 h-32 object-cover rounded-lg"
      />
      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p><span className="font-medium">Precio:</span> ${product.id + 100}</p>
      <p><span className="font-medium">Estado:</span> {product.status}</p>
      <p><span className="font-medium">Género:</span> {product.gender}</p>
    </div>
  );
}
