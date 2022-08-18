import React, { useState } from "react";
import ItemCount from "../counter/itemCount";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";

const ItemDetail = ({ producto }) => {
  const [counterData, setCounterData] = useState(0);

  const onAdd = (quantityToAdd) => {
        setCounterData(quantityToAdd);
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: `fue agregado al carrito ${quantityToAdd} ${quantityToAdd > 1 ? 'items' : 'item'}`,
            showConfirmButton: false,
            timer: 1500
        })
  }


  return (
<div class="row">
<h3>items agregados al carrito: {counterData}</h3>
<div class="col s12 m6 l2">
  <div class="card">
    <div class="card-image">
      <img heigh={400} src={ producto.img}></img>
      <span class="card-title pink accent-3">{producto.title}</span>
      <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">shopping_cart</i></a>
    </div>
    <div class="card-content">
      <p>{producto.description}</p>
      <p><b>${producto.price}</b></p>
    </div>
  </div>
</div>
<ItemCount stock={30} initial={1} onAdd={onAdd}></ItemCount>
<button><NavLink to={"/cart"}>Comprar Ahora</NavLink></button>
</div>
  );
};

export default ItemDetail;