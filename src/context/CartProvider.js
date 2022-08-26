import React, { createContext, useState } from "react"



export const cartContext = createContext();

export const CartProvider = ({ defaultValue = [], children }) => {
    
    const [pedido, setPedido] = useState(defaultValue);

    const isInCart = (producto) => {
        return pedido.some(itemInCart => itemInCart.id === producto.id);
    }

    const addItem = (producto, quantity) => {
        if (isInCart(producto)) {
            console.log("Item actualizado en el carrito", producto, quantity)
            
            setPedido((pedido) => 
                pedido.map(item => { 
                    if(item.id === producto.id){
                        item.quantity = item.quantity + quantity;
                    }
                    return item;
                })
            )
        } else {
            console.log("producto agregado al carrito", producto, quantity)
            producto.quantity = quantity;
            setPedido([...pedido, producto]);
        }
        
        producto.stock = producto.stock - quantity;
    }

    const removeItem = (productoId) => {
        
        var producto = pedido.find(producto => producto.id === productoId);
        setPedido(pedido.filter(itemInCart => itemInCart.id !== productoId));
        //restauro stock
        producto.stock = producto.stock + producto.quantity;
        //seteo en 0 la cantidad solicitada
        producto.quantity = 0
    }

    const clearItems = () => {
        setPedido([]);
    }

    return (<cartContext.Provider value={{ addItem, removeItem, clearItems, items: pedido }}>
        {children}
    </cartContext.Provider>);

}