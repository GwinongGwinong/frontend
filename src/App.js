import React from "react";
import { RouterProvider, createBrowserRouter, BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import HolidayPackage from "./pages/HolidayPackage";
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
    path: "/signin",
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
