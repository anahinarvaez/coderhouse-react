import React, { createContext, useState } from "react"



export const cartContext = createContext();

export const CartProvider = ({ defaultValue = [], children }) => {
    
    const [pedido, setPedido] = useState(defaultValue);

    const isInCart = (producto) => {
        return pedido.some(itemInCart => itemInCart.id === producto.id);
    }

    const addItem = (producto, quantity) => {
        if (isInCart(producto)) {
            setPedido((pedido) => 
                pedido.map(item => { 
                    if(item.id === producto.id){
                        item.quantity = item.quantity + quantity;
                    }
                    return item;
                })
            )
        } else {
            producto.quantity = quantity;
            setPedido([...pedido, producto]);
        }
        
        producto.stock = producto.stock - quantity;
    }

    const removeItem = (productoId) => {
        
        var producto = pedido.find(producto => producto.id === productoId);
        setPedido(pedido.filter(itemInCart => itemInCart.id !== productoId));
        producto.stock = producto.stock + producto.quantity;
        producto.quantity = 0
    }

    const clearItems = () => {
        setPedido([]);
    }

    return (<cartContext.Provider value={{ addItem, removeItem, clearItems, items: pedido }}>
        {children}
    </cartContext.Provider>);

}