import React from "react"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import "./styles/main.scss"

import Header from "./components/header/Header";
import Homepage from "./components/pages/Homepage/Homepage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello world!</div>,
    },
    {
      path: "/home",
      element: <Homepage/>,
    },
  ]);

  return (
    <div className="App">
      <Header />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
