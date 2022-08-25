import React, { useContext } from 'react'
import { cartContext } from '../../context/CartProvider'
function CartWidget(props) {

    const {cartSize} = useContext(cartContext);

    return(
        <React.Fragment>
            { cartSize > 0 && <ul><li><a href="#"><i class="material-icons">shopping_cart</i></a></li><li><span>({cartSize})</span></li></ul>}
        </React.Fragment>
    )
}

export default CartWidget