import React, { useEffect, useState } from "react";

const ItemDetailContainer = ({ load, count }) => {
  const [item, setItem] = useState(null);

  const loading = load;

  useEffect(() => {
    const fetchItem = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          const detailMockItem = {
            id: 1,
            name: "Nombre del item que se muestra",
            description:
              "Esto es una descripcion en la que iría el detalle del producto seleccionado. Se seguirá trabajando en avanzarlo. (⌐■_■)",
          };
          resolve(detailMockItem);
        }, 2000);
      });
    };

    fetchItem().then((item) => setItem(item));
  }, []);

  return (
    <div>
      {item && !loading ? (
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
