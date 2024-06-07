import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import LoginPage from './LoginPage';
import Home from './Home';
import Book1 from './Components/Pages/Book1';
import PayCards from './Components/Cards/PayCards';



const router = createBrowserRouter([
  {
    path: '/',
    element: <LoginPage/>,
  },
  {
    path: '/Home',
    element: <Home/>,
  },
  {
    path: '/Home/Book',
    element: <Book1/>,
  },
  {
    path: '/Payment',
    element: <PayCards/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//{
  //path: '/',
  //element: <HomePage/>,
//},
