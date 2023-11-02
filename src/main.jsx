import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root';
import Home from './Pages/Home/Home';
import AddProduct from './Pages/AddProduct/AddProduct';
import MyCart from './Pages/MyCart/MyCart';
import Login from './Pages/Login/Login';
import Register from './Pages/Login/Register';
import AuthProvider from './AuthProvider/AuthProvider';
import PrivateRout from './PrivateRout/ProvateRout';
import AddBrand from './Pages/AddProduct/AddBrand';
import Products from './Pages/Products/Products';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/products",
        element: <PrivateRout><AddProduct></AddProduct></PrivateRout>
      },
      {
        path: "/products/:brand",
        element: <Products></Products>
      },
      {
        path: "/addBrand",
        element: <AddBrand></AddBrand>
      },
      {
        path: "/myCart",
        element: <PrivateRout><MyCart></MyCart></PrivateRout>
      },
      {
        path: "/myCart/:_id",
        element: <PrivateRout><MyCart></MyCart></PrivateRout>
      },
      {
        path: "/regiter",
        element: <Register></Register>
      },
      {
        path:"/login",
        element: <Login></Login>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
