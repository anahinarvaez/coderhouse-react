import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './pages/itemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/itemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>

      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/categories/:categoryId' element={<ItemListContainer></ItemListContainer>}></Route>
          <Route path='/items/:itemId' element={<ItemDetailContainer></ItemDetailContainer>}></Route>
          <Route path='*' element={<ItemListContainer></ItemListContainer>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );


}




export default App;
