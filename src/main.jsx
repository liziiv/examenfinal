import React from 'react'; // Importa React
import { StrictMode } from 'react'; // Importa StrictMode para mejores prácticas
import { createRoot } from 'react-dom/client'; // Importa createRoot para React 18
import App from './App'; // Asegúrate de importar el componente App
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa Bootstrap para estilos

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App /> {/* Renderiza el componente principal */}
  </StrictMode>
);
