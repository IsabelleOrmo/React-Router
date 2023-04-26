import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// 1 configurando router
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import Contact from './pages/Contact.jsx';
import Home from './pages/Home.jsx';
import ErroPage from './pages/ErroPage.jsx';
import ContactDetails from './pages/ContactDetails.jsx';

/*const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "contact",
    element: <Contact />,
  },
]);*/

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErroPage/>,
    children: [
      {
        path: "home",
        element: <Home/>,
      },
    
      {
        path: "contact",
        element: <Contact />,
      },
      //5 - nested routes - identificador unico que termina uma pagina especifica (utilizado em banco de dados)
      {
        path: "/contact/:id",
        element: <ContactDetails/>,
      },
      // navigate para paginas nao existentes
      {
        path: "oldcontact",
        element: <Navigate to="/contact"/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
