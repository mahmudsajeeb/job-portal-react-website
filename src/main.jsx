import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import About from './components/About';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home';
  
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      // {
      //   path: "shop",
      //   element: <Shop />,
      //   loader: () => fetch('products.json')
      // },
       
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);