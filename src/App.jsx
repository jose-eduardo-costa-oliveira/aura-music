import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/homePage';
import Comandos from './pages/comandos/comandosPage';
import Status from './pages/status/statusPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home/> } />
        <Route path='/comandos' element={ <Comandos/> } />
        <Route path='/status' element={ <Status/> } />
        
        {/* Fazer a página "NotFound" */}
        <Route path='*' element={ 'NotFound' } />
      </Routes>
    </Router>
  );
}

export default App;
