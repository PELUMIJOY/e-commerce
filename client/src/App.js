import { Children } from "react";
import {createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Component/Footer/Footer";
import Products from "./pages/Products/Products";
import Home from "./pages/Home/Home";
import Product from "./pages/Product/Product";
import "./app.scss"

const Layout = () =>{
  return(
    <div className="app">
      <Navbar/>
      <Outlet/>
      <Footer/>
     </div>
  )
}

const router = createBrowserRouter([
  { 
    path:'/', element:<Layout/>,
    children:[
      { 
        path:'/', element:<Home/>
     },
     { 
       path:'/products/:id', element:<Products/>
     },
     { 
       path:'/product/:id', element:<Product/>
     },
    ],
 },

]);

function App() {
  return (
    <div>
    <RouterProvider router={router}/>
    </div>
  );
}

export default App;
