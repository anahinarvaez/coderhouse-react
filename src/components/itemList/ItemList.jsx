import React from "react";
import Item from "./Item";
import 'materialize-css/dist/css/materialize.min.css'


const ItemList = ({ items }) => {
  return (<React.Fragment>
    <div class="row">
      <div class="col">
        {items.map((item) => (
          <Item key={item.id} id={item.id} img={item.img}></Item>))}
      </div>
    </div>
    </React.Fragment>)
};

export default ItemList;
