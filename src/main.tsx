import React from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import './index.css'
import App from './App.tsx'
import ErrorPage from './pages/error/error.tsx'
import Home from './pages/home/home.tsx'
import Cart from './pages/cart/cart.tsx'
import SingleProduct from './pages/single-product/singleProduct.tsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <ErrorPage/>,
    children:[
      {
        path:"/",
        element: <Home/>
      },
      {
        path: "/product/:productId",
        element: <SingleProduct/>
      },
      {
        path: "/cart",
        element: <Cart/>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)