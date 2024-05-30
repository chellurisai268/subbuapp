import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import { store } from './app/store';

import {
    createBrowserRouter,
    RouterProvider,
} from 'react-router-dom';
import Counter from './features/counters/counter';
import Posts from './features/posts/posts';
import Todolist from './features/todolist/todolist';
import Countries from './features/countries/countries';
import Products from './features/products/products';
import Addpost from './features/posts/addpost';
import Editpost from './features/posts/Editpostform';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element:<App></App>,
        children:[
            {
                path: '/counter',
                element:<Counter></Counter>,
            },
            {
                path: '/posts',
                element:<Posts></Posts>,
            },
            {
                path: '/todolist',
                element:<Todolist></Todolist>
            },
            {
                path: '/countries',
                element:<Countries></Countries>
            },
            {
                path: '/products',
                element:<Products></Products>
            },
            {
                path: '/addpost',
                element:<Addpost></Addpost>
            },
            {
                path: '/editpost',
                element:<Editpost></Editpost>
            }

        ]
    },
])
root.render(
    <Provider store={store}>
<RouterProvider router={router}></RouterProvider>
</Provider>

    
 
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
