import React, { useState } from "react";
import Swal from "sweetalert2";

function ItemCount({ stock, initial}) {
  

  const [clicks, setClicks] = useState(initial);

  const handlerIncrement = () => {
    if (clicks < stock){setClicks(clicks + 1);}
    
  }
  const handlerDecrement = () => {
    if (clicks > initial){setClicks(clicks - 1);}
  }

  const onAdd = () => {
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: `fue agregado al carrito ${clicks} ${clicks > 1 ? 'items' : 'item'}`,
      showConfirmButton: false,
      timer: 1500
    })
  }
  return (
    <div> 
      <h3>Item Counter</h3>
      <button onClick={handlerDecrement}>Restar</button>
      <h3>Clicks: {clicks}</h3>
      <button onClick={handlerIncrement}>Sumar</button>
      <br/>
      <button onClick={onAdd}>Agregar al carrito</button>
    </div>
  );
}

export default ItemCount;



