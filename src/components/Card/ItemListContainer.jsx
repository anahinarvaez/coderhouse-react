import React, { useEffect, useState } from "react";
import {productos} from "../data/data";
import ItemList from "./ItemList";

function ItemListContainer(props) {
  const [data, setData] = useState([]);
  useEffect(() => {
    getProductos().then((respuesta) => setData(respuesta));
  }, []);

  return (
    <div>
      <ItemList items={ data }></ItemList>
    </div>
  );
}

function getProductos() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productos), 2000);
  });
}

export default ItemListContainer;
