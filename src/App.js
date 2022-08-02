import './App.css';
import NavBar from './components/navbar/navbar';
import ItemListContainer from './components/Card/ItemListContainer';

function App() {
  return (
    <div>
      <NavBar></NavBar>
      <ItemListContainer greeting="Elegi tu hamburguesa"/>
    </div>
    
  );
}




export default App;
