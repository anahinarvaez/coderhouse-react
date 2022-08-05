import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/Card/ItemListContainer';
import ItemCount from './components/Card/ItemCount';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting="Elegi tu hamburguesa"/>
      <ItemCount initial={1} stock={3}/>
    </div>

    
  );

  
}




export default App;
