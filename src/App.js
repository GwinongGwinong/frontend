import React from "react";
import { RouterProvider, createBrowserRouter, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import HolidayPackage from "./pages/HolidayPackage";
import Layout from "./components/Layout";
import DetailPackage from "./pages/DetailPackage";
import DetailBuilding from "./pages/DetailBuilding";
import DetailMoment from "./pages/DetailMoment";
import DetailHost from "./pages/DetailHost";
import SignUp from "./pages/SignUp";
import SignIn from "./components/SignIn";

import { RecoilRoot } from "recoil";
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
  { 
    path: "/signin",
    element: <SignIn />,
  },
  {  path: "/signin",
    element: <SignIn/>,
  }
]);


function App() {
  return (        
        <RecoilRoot>
            <RouterProvider router={router}></RouterProvider>
        </RecoilRoot>

  );
}

export default App;
