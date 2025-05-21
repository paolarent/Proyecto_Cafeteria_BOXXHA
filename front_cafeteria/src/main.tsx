import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from './routes/sistRouter';
import { MenuProvider } from './contexts/ScrollContexto';
import './index.css';
import { PedidoProvider } from '../src/contexts/PedidoContext';
import { CatalagosProvider } from '../src/contexts/CatalagosContext';
import { NotificacionProvider

 } from './contexts/NotificacionContext';
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuProvider>
      <CatalagosProvider>
        <PedidoProvider>
          <NotificacionProvider>
            <AppRouter />
          </NotificacionProvider>
        </PedidoProvider>
      </CatalagosProvider>
    </MenuProvider>
  </React.StrictMode>,
);