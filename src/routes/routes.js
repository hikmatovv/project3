import React from 'react';
import { Navigate } from 'react-router-dom';
import SignIn from '../components/SignIn/Index';
import Navbar from '../components/umumiy/Navbar';
import Shop from '../components/Shop'
import Login from '../components/Login in'
// import Blog from '../components/Uzokboy'
import About from '../components/umumiy/index'
import Account from '../components/myAcount'
import Shirt from '../components/smartTshirt'
import Aboutt from '../components/Page1'
import Wishlist from '../components/Page3'
import Cart from '../components/Page2'
import Contact from '../components/contact'
import Home from '../components/home1'

export const routes = [
  {
    // element: <Home />,
    children: [
      { index: true, element: <Home /> },
        // { path: '/contactus', element: <Navbar />  },
        // { path: '/blog', element: <Blog />  },
        { path: '/sign', element: <SignIn />  },
        { path:'/shop',element:<Shop/>},
        { path:'/home',element:<Home/>},
        { path:'/login',element:<Login/>},
        { path:'/account',element:<Account/>},
        { path:'/shirt',element:<Shirt/>},
        { path:'/about',element:<Aboutt/>},
        { path:'/wishlist',element:<Wishlist/>},
        { path:'/cart',element:<Cart/>},
        { path:'/contact',element:<Contact/>},
        


      { path: '*', element: <Navigate to='/' /> },
    ],
  },
];
