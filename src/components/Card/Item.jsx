import React from "react";

const item = ({ id, title, description, price, stock, pictureUrl }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>{description}</h2>
      <p>{price}</p>
      <p>{stock}</p>
      <img src={ pictureUrl }></img>
    </div>
  );
};

export default item;