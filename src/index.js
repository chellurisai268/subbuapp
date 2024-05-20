import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,

  RouterProvider,
} from "react-router-dom";

import Honda from './honda';
import Kajal from './kajal';

import Counteries from './counteries';
import CountryDetails from './counterDetails';




const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[
      {
        path: "/kaju",
        element:<Kajal></Kajal>
      },
      {
        path: "/hon",
        element:<Honda></Honda>
      },
      {
        path: "/Counteries",
        element:<Counteries></Counteries>
      },
      {        path:"/countryDetails/:cname",
        element:<CountryDetails></CountryDetails>

      }
      
    ]
  },

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <RouterProvider router={router}></RouterProvider>
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
