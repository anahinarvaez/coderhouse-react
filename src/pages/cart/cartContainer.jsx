import React, { useContext } from "react";
import { cartContext } from "../../context/CartProvider";
import 'materialize-css/dist/css/materialize.min.css'
import Cart from "../../components/cart/Cart";
import EmptyCart from "../../components/cart/EmptyCart";


const CartContainer = () => {

    const { removeItem, items } = useContext(cartContext);

    return (items.length > 0 ? <Cart items={ items } removeFromCart={ removeItem }/> : <EmptyCart></EmptyCart>);
}


export default CartContainer;