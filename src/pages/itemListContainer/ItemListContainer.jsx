import React, { useEffect, useState } from "react";
import productos from '../../data/productos.json'
import ItemList from "../../components/itemList/ItemList";
import { useParams } from 'react-router-dom'
import Spinner from "../../components/spinner/spinner";


function ItemListContainer() {
  const [loading, setLoading] = useState();
  const [data, setData] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProductos(categoryId).then((respuesta) => setData(respuesta));
  }, [categoryId]);

  const getProductos= (categoryId) => {
    setLoading(true);
    setData([]);
    let productosByCaterory = categoryId ? productos.filter(producto => producto.category === categoryId) : productos;
  
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(productosByCaterory);
        setLoading(false);
      }, 2000);
    });
  }

  return (
    <div>
      {loading ? <Spinner></Spinner> : <ItemList items={data}></ItemList>}
    </div>
  );
}



export default ItemListContainer;
