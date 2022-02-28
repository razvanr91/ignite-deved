import React from "react";
import { BrowserRouter, Route, Routes, useRoutes } from "react-router-dom";
import GlobalStyles from "./components/GlobalStyles";
import Home from "./pages/Home";

// Router



const App = () => useRoutes([
  {path: "/games/:id", element: <Home />},
  {path: "/", element: <Home />},
]);

const  AppWrapper = () => (
  <div>
    <GlobalStyles />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </div>
);

export default AppWrapper;
