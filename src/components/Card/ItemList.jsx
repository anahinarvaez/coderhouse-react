import React from "react";
import Item  from "./Item";


const ItemList = ({items}) => {
  return (<div>
    {
        items.map((item) => (
            <Item key={item.id} title={item.title} stock={item.stock} price={item.price} pictureUrl={item.pictureUrl} description={item.description}></Item>
        ))
    }
  </div>)
};

export default ItemList;
