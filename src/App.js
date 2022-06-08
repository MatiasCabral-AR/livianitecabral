import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar'
import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState()
  
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/' element={<ItemListContainer title='Livianite Lenceria'/>}/>
          <Route path='/category/:category' element={<ItemListContainer/>} />
          <Route path='/product/:id' element={<ItemDetailContainer/>}/>
          <Route path='/quienes-somos' element={<h1 className='text-center text-success'>Quienes Somos</h1>}/>
          <Route path='*' element={<h1 className='text-center text-warning'>Pagina no encontrada</h1>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;