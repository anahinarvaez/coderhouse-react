import React from "react";

const ItemDetail = ({ producto }) => {
  return (
<div class="row">
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
</div>
  );
};

export default ItemDetail;