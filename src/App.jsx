import './App.css';
import {Route, Routes} from 'react-router-dom'
import Usuario from './components/listaUsuarios.js';
import Navbar from './components/Navbar';
import CreateUser from './pages/CreateUser';
import UserSavings from './pages/UserSavings'

function App() {
  return(
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Usuario/> } />
      <Route path="/nuevo-usuario" element={ <CreateUser/> } />
      <Route path="/ahorro-usuario" element={ <UserSavings/> } />
    </Routes>
    
    </>
  )
}

export default App;
