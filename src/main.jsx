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
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Brand from './pages/Brand/Brand';
import AdDetails from './pages/Brand/AdDetails';
const router = createBrowserRouter([
  {
    path: "/",
    errorElement:<ErrorPage></ErrorPage>,
    element:<Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=>fetch('http://localhost:5000/brand')
      },
      {
        path:'/addproduct',
        element:<PrivateRoute><AddProduct></AddProduct></PrivateRoute>
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
      },
      {
        path:"/brand/:name",
        element:<Brand></Brand>,
        loader:({params}) =>fetch(`http://localhost:5000/brand/${params.name}`)
      },
      {
      path:'/adddetails',
      element:<AdDetails></AdDetails>
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
