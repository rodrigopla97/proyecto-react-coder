import React, { useEffect, useState } from "react";

type ItemDetailContainerProps = {
  load: boolean;
  count?: number;
};

type MockItem = {
  id: number;
  name: string;
  description: string;
};

const ItemDetailContainer = ({ load }: ItemDetailContainerProps) => {
  const [item, setItem] = useState<MockItem | null>(null);

  useEffect(() => {
    const fetchItem = (): Promise<MockItem> => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            id: 1,
            name: "Nombre del item que se muestra",
            description:
              "Esto es una descripcion en la que iría el detalle del producto seleccionado. Se seguirá trabajando en avanzarlo. (⌐■_■)",
          });
        }, 2000);
      });
    };

    fetchItem().then((item) => setItem(item));
  }, []);

  return (
    <div>
      {item && !load ? (
        <>
          <h2>{item.name}</h2>
          <p>{item.description}</p>
        </>
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
