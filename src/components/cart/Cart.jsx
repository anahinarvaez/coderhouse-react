import React from 'react'
import { NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { addDoc, collection, getFirestore, Timestamp } from 'firebase/firestore';


function Cart({ items, removeFromCart, vaciarCarrito }) {

    const precioTotal = items.map(item => item.price * item.quantity).reduce((a, b) => a + b, 0);


    const finalizarCompra = () => {
        Swal.fire({
            title: 'Termine su orden',
            html: `<input type="text" id="nombre" class="swal2-input" placeholder="Nombre">
            <input type="text" id="telefono" class="swal2-input" placeholder="Telefono">
            <input type="email" id="email" class="swal2-input" placeholder="Email">`
            ,
            showCancelButton: true,
            confirmButtonText: 'Confirmar compra',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            focusConfirm: false,
            preConfirm: () => {
                const nombre = Swal.getPopup().querySelector('#nombre').value
                const telefono = Swal.getPopup().querySelector('#telefono').value
                const email = Swal.getPopup().querySelector('#email').value
                if (!nombre || !telefono || !email) {
                    Swal.showValidationMessage(`Por favor ingrese los datos solicitados`)
                }
                return { name: nombre, phone: telefono, email: email }
            }
        }).then((result) => {
            submitOrder({name: result.value.name, phone: result.value.phone, email: result.value.email});
        })
    }

    const limpiarCarrito = () => {

        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: 'waves-effect waves-light btn-large red darken-4',
                cancelButton: 'waves-effect waves-light btn-large blue lighten-2'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Esta seguro?',
            text: "Tendra que empezar de nuevo su pedido :(",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Vaciar',
            cancelButtonText: 'No, me arrepenti',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                vaciarCarrito();
            }
        })


    }

    const submitOrder = (comprador) => {
        const order = {
            buyer: comprador,
            items: items,
            date: new Date(),
            total: precioTotal
        };

        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then(({ id }) => Swal.fire(
            'Orden enviada :)',
            `Su orden es la ${id}`,
            'success'
        ));

        vaciarCarrito();
    }

    return (
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
                            <td><NavLink to={`/items/${item.id}`}>{item.title}</NavLink></td>
                            <td>{item.description}</td>
                            <td>{item.quantity}</td>
                            <td>{item.price}</td>
                            <td><b>{item.price * item.quantity}</b></td>
                            <td>
                                <button className="waves-effect waves-light btn-large red darken-4" onClick={() => removeFromCart(item.id)}>
                                    <i class="material-icons">remove_shopping_cart</i>
                                </button>
                            </td>
                        </tr>
                    )}
            </table>

            <div>
                Precio Total: ${precioTotal}
            </div>

            <div>
                <a class="waves-effect waves-light btn-large blue lighten-2" onClick={finalizarCompra}><i class="material-icons right">sentiment_very_satisfied</i>Finalizar compra</a>
                <a class="waves-effect waves-light btn-large red darken-4" onClick={limpiarCarrito}><i class="material-icons right">remove_shopping_cart</i>Vaciar Carrito</a>
            </div>



        </div>
    )
}

export default Cart

