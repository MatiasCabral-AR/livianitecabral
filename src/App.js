import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer title='Livianite Lenceria'/>
      <ItemDetailContainer title='Detalle del producto'/>
    </div>
  );
}

export default App;