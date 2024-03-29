import "./App.css";
import NavBar from "./components/navbar/navbar";
import ItemListContainer from "./pages/itemListContainer/ItemListContainer";
import ItemDetailContainer from "./pages/itemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CartProvider } from "./context/CartProvider";
import CartContainer from "./pages/cart/CartContainer";

function App() {
  return (
    <div>
      <BrowserRouter>
        <CartProvider>
          <NavBar></NavBar>
          <Routes>
            <Route
              path="/"
              element={<ItemListContainer></ItemListContainer>}
            ></Route>
            <Route
              path="/cart"
              element={<CartContainer></CartContainer>}
            ></Route>
            <Route
              path="/categories/:categoryId"
              element={<ItemListContainer></ItemListContainer>}
            ></Route>
            <Route
              path="/items/:itemId"
              element={<ItemDetailContainer></ItemDetailContainer>}
            ></Route>
            <Route
              path="/items/notFound"
              element={
                <div>
                  <h1>Ups. No tenemos la hamburguesa que busca.</h1>
                  <h2>
                    Pruebe seleccionando una de las hamburguesas de nuestras
                    espectaculares categorias.
                  </h2>
                </div>
              }
            ></Route>
            <Route
              path="*"
              element={<ItemListContainer></ItemListContainer>}
            ></Route>
          </Routes>
        </CartProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
