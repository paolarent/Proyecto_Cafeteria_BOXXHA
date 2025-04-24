import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './routes/sistRouter'
import { MenuProvider } from '../src/contexts/PedirContexto'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MenuProvider>
      <AppRouter />
    </MenuProvider>
  </React.StrictMode>,
);