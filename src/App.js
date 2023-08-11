import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  // {
  //   path: "/profile",
  //   element: <Profile />,
  // },
]);


function App() {
  return (
    <React.StrictMode>
        <RouterProvider router={router}></RouterProvider>
    </React.StrictMode>
  );
}

export default App;
