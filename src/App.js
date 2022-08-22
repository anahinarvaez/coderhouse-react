import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './pages/itemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './pages/cart/cartContainer';
import {CartProvider} from './context/CartProvider';

function App() {
  return (
    <div>

      <BrowserRouter>
      <CartProvider>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/cart' element={<Cart></Cart>}></Route>
          <Route path='/categories/:categoryId' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/items/:itemId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path='*' element={<ItemListContainer></ItemListContainer>}></Route>
        </Routes>
        </CartProvider>
      </BrowserRouter>
   
    </div>
  );


}




export default App;
