import React from 'react'
function Cart({items, removeFromCart}) {

    const precioTotal = items.map(item => item.price).reduce((a,b) => a + b, 0);

    return(
        <div>
        <h1>Pedido</h1>


        <table border="1" cellpadding="5" cellspacing="5">
            <tr>
                <th>Producto</th>
                <th>Descripcion</th>
                <th>Cantidad</th>
                <th>Precio</th>
                <th>Total</th>
            </tr>
            {
                items.map(item =>
                    <tr>
                        <td>{item.producto.title}</td>
                        <td>{item.producto.description}</td>
                        <td>{item.quantity}</td>
                        <td>{item.producto.price}</td>
                        <td><b>{item.price}</b></td>
                        <td>
                            <button className="waves-effect waves-light btn-large red darken-4" onClick={() => removeFromCart(item.producto.id)}>
                                <i class="material-icons">remove_shopping_cart</i>
                            </button>
                        </td>
                    </tr>
                )}
        </table>

        <div>
            Precio Total: ${ precioTotal }
        </div>

    </div>
    )
}

export default Cart

