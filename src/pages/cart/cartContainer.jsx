import React, { useContext } from "react";
import { cartContext } from "../../context/CartProvider";
import 'materialize-css/dist/css/materialize.min.css'
import Cart from "../../components/cart/Cart";
import EmptyCart from "../../components/cart/EmptyCart";


const CartContainer = () => {

    const { getAll, removeItem, cartSize } = useContext(cartContext);
    const items = getAll();


    return (cartSize > 0 ? <Cart items={items} removeFromCart={ removeItem }/> : <EmptyCart></EmptyCart>);
}


export default CartContainer;