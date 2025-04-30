import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/sistRouter';
import { MenuProvider } from './contexts/ScrollContexto';
import './index.css';
import { PedidoProvider } from '../src/contexts/PedidoContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuProvider>
      <PedidoProvider>
        <AppRouter />
      </PedidoProvider>
    </MenuProvider>
  </React.StrictMode>,
);