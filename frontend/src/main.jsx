import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Offer from './Offer.jsx';
import Help from './Help.jsx';
import Signin from './Signin.jsx';
import Body from './components/Body.jsx';
import Cart from './components/Cart.jsx';
import Error from './components/Error.jsx';
import RestaurantDetails from './components/RestaurantDetails.jsx';

const appRouter=createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement:<Error/>,
    children: [
      {
        path:'/',
        element: <Body />

      },
      {
        path: '/offer',
        element: <Offer />
      },
      { path: '/help',
        element: <Help />
      },
      {     path: '/signin',        
        element: <Signin />
      },
      {     path: '/cart',
        element: <Cart />
      },

     { path:'/restaurant/:id',
      element:<RestaurantDetails/>
     },
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appRouter}/>
)
