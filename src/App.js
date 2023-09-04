import React, { useEffect, useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import HolidayPackage from "./pages/HolidayPackage";
import Layout from "./components/Layout";
import DetailPackage from "./pages/DetailPackage";
import DetailBuilding from "./pages/DetailBuilding";
import DetailMoment from "./pages/DetailMoment";
import DetailHost from "./pages/DetailHost";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/holidaypackage",
    element: <HolidayPackage />,
  },
  {
    path: "/detailpackage",
    element: <DetailPackage />,
  },
  {
    path: "/detailbuilding",
    element: <DetailBuilding />,
  },
  {
    path: "/detailmoment",
    element: <DetailMoment />,
  },
  {
    path: "/detailhost",
    element: <DetailHost />,
  },
  {
    path: "/signup",
    element: <SignUp />,
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
