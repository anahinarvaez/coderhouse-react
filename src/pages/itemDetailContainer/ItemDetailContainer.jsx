import React, { useEffect, useState } from "react";
import  productos from '../../data/productos.json'
import ItemDetail from "../../components/itemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import Spinner from "../../components/spinner/spinner";


function ItemDetailContainer() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({});
  const {itemId} = useParams();

  useEffect(() => {
    getProductoDetail(itemId).then((respuesta) => setData(respuesta));
  }, [itemId]);

  const getProductoDetail = (itemId) => {

    setLoading(true);
    setData();

    return new Promise((resolve) => {
      let item = productos.find(item => item.id === itemId)
      setTimeout(() => {
        resolve(item);
        setLoading(false);
      } , 2000);
    });
  }

  return (
    <div>
      {loading? <Spinner></Spinner> : <ItemDetail producto={data}></ItemDetail>}
    </div>
  );
}



export default ItemDetailContainer;
