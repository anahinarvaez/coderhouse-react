import React, { useState } from "react";
import "./itemCounter.css"

function ItemCount({ stock, initial, onAdd }) {
    const [clicks, setClicks] = useState(initial);
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);




    const handlerIncrement = () => {
        if (clicks < stock) { setClicks(clicks + 1); }

    }
    const handlerDecrement = () => {
        if (clicks > initial) { setClicks(clicks - 1); }
    }

    return (

        <div className="col center counter">

                <div className="row">
                    <div className="col l3">
                        <a class="btn-floating btn-large waves-effect waves-light red" onClick={handlerDecrement}><i class="material-icons">remove</i></a>
                    </div>
                    <div className="col l3">

                        <a class="btn-floating btn-large waves-effect blue darken-5 disabled" >{clicks}</a>
                    </div>

                    <div className="col l3">
                        <a class="btn-floating btn-large waves-effect waves-light red" onClick={handlerIncrement}><i class="material-icons">add</i></a>
                    </div>

                    <div className="col l3">
                        <a class="waves-effect waves-light btn-large blue darken-5" style={{ width: "100px" }} onClick={() => { onAdd(clicks); setClicks(1); }}><i class="material-icons">add_shopping_cart</i></a>
                    </div>
                </div>
            </div>
       
    );
}

export default ItemCount;