import React, { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
    const [clicks, setClicks] = useState(initial);


    const handlerIncrement = () => {
        if (clicks < stock) { setClicks(clicks + 1); }

    }
    const handlerDecrement = () => {
        if (clicks > initial) { setClicks(clicks - 1); }
    }

    return (
        <div>
            <h3>Item Counter</h3>
            <button onClick={handlerDecrement}>Restar</button>
            <h3>Clicks: {clicks}</h3>
            <button onClick={handlerIncrement}>Sumar</button>
            <br />
            <button onClick={() => onAdd(clicks)}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;