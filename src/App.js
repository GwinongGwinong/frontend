import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import HolidayPackage from "./pages/HolidayPackage";
import Layout from "./components/Layout";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/holidaypackage",
    element: <HolidayPackage />,
  },
]);


function App() {
  return (
    <React.StrictMode>
      <Layout>
        <RouterProvider router={router}></RouterProvider>
      </Layout>
    </React.StrictMode>
  );
}

export default App;
