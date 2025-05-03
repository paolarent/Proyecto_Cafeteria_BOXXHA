import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/sistRouter';
import { MenuProvider } from './contexts/ScrollContexto';
import './index.css';
import { PedidoProvider } from '../src/contexts/PedidoContext';
import { CategoriaProvider } from '../src/contexts/CategoriaContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuProvider>
      <PedidoProvider>
        <CategoriaProvider>
          <AppRouter />
        </CategoriaProvider>
      </PedidoProvider>
    </MenuProvider>
  </React.StrictMode>,
);