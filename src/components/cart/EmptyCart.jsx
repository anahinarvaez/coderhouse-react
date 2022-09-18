import React from "react";
import { NavLink } from "react-router-dom";

function EmptyCart() {
  return (
    <div NavLink>
      <p>Oh no, parece que no hay nada en su carrito. </p>
      <p>
        No se preocupe puede seguir comprando haciendo click aqui o
        seleccionando una de nuestras categorias.
      </p>
      <NavLink to={`/`}>
        <a class="waves-effect waves-light btn-large">
          <i class="material-icons left">restaurant_menu</i>
          <i class="material-icons left">restaurant</i>
          <i class="material-icons left">restaurant_menu</i>
        </a>
      </NavLink>
    </div>
  );
}

export default EmptyCart;
