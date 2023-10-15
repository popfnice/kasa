import React from 'react';
import { Outlet, createBrowserRouter } from "react-router-dom";
import Footer from "../layout/Footer.jsx";
import Navbar from "../layout/NavBar.jsx";
import Appartementpage from "../pages/Appartementpage.jsx";
import Homepage from '../pages/Homepage.jsx';
import Error from '../pages/Error.jsx';
import About from '../pages/About.jsx';

const HeaderFooterLayout = () => {
    return (
       <>
           <Navbar />
           <Outlet />
           <Footer />
       </>
    );
}

export const router = createBrowserRouter([
    {
        element: <HeaderFooterLayout />,
        errorElement: <h1>404 not found</h1>,
        children: [
            {
                path: "/",
                element: <Homepage />
            },
            
            {
                path: "/flat",
                element: <Appartementpage />
            },

            {
                path: "/about",
                element: <About />
                
            },

            {
                path: "/contact",
                element: (
                  <h1>A propos</h1>
                )
            },

            {
                path: "*" ,
                element : <Error />
            }
           
            
        ]
    },
]);
