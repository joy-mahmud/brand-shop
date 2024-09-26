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
// import AddToCart from './pages/AddToCart/AddToCart';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Brand from './pages/Brand/Brand';
import AdDetails from './pages/Brand/AdDetails';
import Update from './pages/Brand/Update';
import ViewDetails from './pages/Brand/ViewDetails';
import MyCart from './pages/MyCart/MyCart';
import UpdateProfile from './pages/updateProfile/UpdateProfile.jsx';
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
      },
      {
        path:'/details/:id',
        element:<ViewDetails></ViewDetails>,
        loader:({params})=>fetch(`http://localhost:5000/details/${params.id}`)
      },
      {
        path:'/update/:id',
        element:<PrivateRoute><Update></Update></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
        path:'/mycart/:uid',
        element:<PrivateRoute><MyCart></MyCart></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/usersCart/${params.uid}`)
      },
      {
        path:'updateProfile',
        element:<UpdateProfile></UpdateProfile>
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
