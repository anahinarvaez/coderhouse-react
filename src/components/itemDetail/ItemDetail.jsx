import React, { useContext, useState } from "react";
import ItemCount from "../counter/itemCount";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import { cartContext } from "../../context/CartProvider";

const ItemDetail = ({ producto }) => {
  const [counterData, setCounterData] = useState(0);
  const { addItem, cartSize } = useContext(cartContext);

  const onAdd = (quantityToAdd) => {
    setCounterData(quantityToAdd);
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `fue agregado al carrito ${quantityToAdd} ${quantityToAdd > 1 ? 'items' : 'item'}`,
      showConfirmButton: false,
      timer: 1500
    })

    addItem(producto, quantityToAdd)
  }


  return (
    <div class="row">
      <div class="col s12 m6 l2">
        <div class="card">
          <div class="card-image">
            <img heigh={400} src={producto.img}></img>
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


      {cartSize > 0 && <NavLink to={"/cart"}><button className="waves-effect waves-light btn-large blue darken-5">Finalizar Compra</button></NavLink>}

    </div>
  );
};

export default ItemDetail;