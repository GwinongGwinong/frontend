import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Myslider from "./components/Myslider";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/myslider",
    element: <Myslider />,
  },
]);


function App() {
  return (
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  );
}

export default App;
