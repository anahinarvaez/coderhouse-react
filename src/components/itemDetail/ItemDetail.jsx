import React, { useContext, useState } from "react";
import ItemCount from "../counter/itemCount";
import Swal from "sweetalert2";
import { NavLink } from "react-router-dom";
import './itemDetail.css';
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
    <div className="container">
      <div className="row">

        <div className="col l12" style={{ height: "100px" }}></div>
        <div className="col l7" style={{ height: "900px" }}>
          <div class="card">
            <div class="card-image">
              <img height={500} src={producto.img}></img>
              <span class="card-title pink accent-3">{producto.title}</span>
            </div>
          </div>
          <div className="row center">
            <img src={producto.img} height={100}></img>
            <img src={producto.img} height={100}></img>
            <img src={producto.img} height={100}></img>
            <img src={producto.img} height={100}></img>
            <img src={producto.img} height={100}></img>
          </div>
        </div>
        <div className="col l4 offset-l1" style={{ height: "1500px" }}>
          <p>Vendidos en la ultima hora 2000</p>
          <div class="divider"></div>
          <div class="section">
            <h4><b>{producto.title}</b></h4>
          </div>
          <div class="divider"></div>
          <div class="section">
            <p>{producto.description}</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unch</p>
          </div>
          <div class="divider"></div>
          <div class="section">
            <h5><b>${producto.price}</b></h5>
          </div>
          <div class="divider"></div>
          <div class="section">
            <ItemCount stock={30} initial={1} onAdd={onAdd}></ItemCount>
          </div>

          <div class="section">
            {cartSize > 0 && <NavLink to={"/cart"}><a className="waves-effect waves-light btn-large blue darken-5">Terminar mi compra</a></NavLink>}
          </div>
        </div>
      </div>
    </div>

  );
};

export default ItemDetail;