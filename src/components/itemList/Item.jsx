import React from "react";
import { NavLink } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css";
import "./styles.css";

const item = ({ id, img }) => {
  return (
    <div class="card">
      <div class="card-image ">
        <NavLink to={`/items/${id}`}>
          <img height={400} src={img}></img>
        </NavLink>
      </div>
    </div>
  );
};

export default item;
