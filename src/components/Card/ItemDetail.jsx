import React from "react";

const ItemDetail = ({ producto }) => {
  return (
    <div>
      <h1>{producto.title}</h1>
      <h2>descripcion: {producto.description}</h2>
      <p>precio: {producto.price}</p>
      <p>stock: {producto.stock}</p>
      <img src={ producto.pictureUrl }></img>
    </div>
  );
};

export default ItemDetail;