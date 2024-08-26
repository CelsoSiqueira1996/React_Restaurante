import Cardapio from 'pages/Cardapio';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Inicio from 'pages/Inicio';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sobre from 'pages/Sobre';
import NaoEncontrada from 'pages/NaoEncontrada';
import Footer from 'components/Footer';
import Prato from 'pages/Prato';

export function AppRouter() {
  return (
    <main className='container'>
      <BrowserRouter>      
        <Menu />
        <Routes>
          <Route path='/' element={<PaginaPadrao />}>
            <Route index element={<Inicio />} />
            <Route path='cardapio' element={<Cardapio />} />
            <Route path='sobre' element={<Sobre />} />
          </Route>
          <Route path='prato/:id' element={<Prato />} />
          <Route path='*' element={<NaoEncontrada />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </main>
  );
}