import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Layout from "./component/Layout";
import Home from "./page/Home";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
