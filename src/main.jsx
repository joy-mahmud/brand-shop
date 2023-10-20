import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
//setting up react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AuthProvider from './AuthProvider/AuthProvider.jsx';
import Root from './components/Root.jsx';
import Home from './pages/Home/Home.jsx';
import AddProduct from './pages/AddProduct/AddProduct';
import ErrorPage from './pages/errorPage/ErrorPage';
import AddToCart from './pages/AddToCart/AddToCart';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/addproduct',
        element:<AddProduct></AddProduct>
      },
      {
        path:'/addtocart',
        element:<AddToCart></AddToCart>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>

  </React.StrictMode>,
)
