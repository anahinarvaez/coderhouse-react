import React, { useEffect, useState } from "react";
import {productoDetail} from "../data/data";
import ItemDetail from "./ItemDetail";


function ItemDetailContainer(props) {
  const [data, setData] = useState();
  useEffect(() => {
    getProductoDetail().then((respuesta) => setData(respuesta));
  }, []);

  return (
    <div>
      {data && <ItemDetail producto={data}></ItemDetail>}
    </div>
  );
}

function getProductoDetail() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(productoDetail), 2000);
  });
}

export default ItemDetailContainer;
