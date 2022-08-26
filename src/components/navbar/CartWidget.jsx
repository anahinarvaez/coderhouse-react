import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';
import { cartContext } from '../../context/CartProvider'
function CartWidget(props) {

    const {items} = useContext(cartContext);
    const itemsTotal = items.map(item => item.quantity ).reduce((a, b) => a+b , 0)

    return(
        <React.Fragment>
            { items.length > 0 && <NavLink to="/cart"><ul><li><a href="#"><i class="material-icons">shopping_cart</i></a></li><li><span>({itemsTotal})</span></li></ul></NavLink>}
        </React.Fragment>
    )
}

export default CartWidget