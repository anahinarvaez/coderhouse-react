import React, { createContext, useState } from "react"



export const cartContext = createContext();

export const CartProvider = ({ defaultValue = [], children }) => {
    
    const [pedido, setPedido] = useState(defaultValue);

    const isInCart = (producto) => {
        return pedido.some(itemInCart => itemInCart.producto.id === producto.id);
    }

    const addItem = (producto, quantity) => {
        if (isInCart(producto)) {
            setPedido(pedido.map(itemInCart => {
                if (itemInCart.producto.id === producto.id) {
                    itemInCart.quantity = itemInCart.quantity + quantity;
                    itemInCart.price = itemInCart.quantity * producto.price;
                }

                return itemInCart;
            }))
        } else {
            setPedido([...pedido, { producto: producto, quantity: quantity, price: quantity * producto.price }]);
        }
    }

    const removeItem = (productoId) => {
        setPedido(pedido.filter(itemInCart => itemInCart.producto.id !== productoId));
    }

    const clearItems = () => {
        setPedido([]);
    }

    const getAll = () => {
        return pedido;
    }

    return (<cartContext.Provider value={{ addItem, removeItem, clearItems, getAll, cartSize: pedido.length }}>
        {children}
    </cartContext.Provider>);

}