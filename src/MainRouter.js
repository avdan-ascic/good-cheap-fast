import React from "react";
import { Route,Routes } from "react-router-dom";
import { Home, FastCheap, GoodCheap, GoodFast } from "./components";


const MaintRouter = () => {
  return (
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/good-cheap" element={<GoodCheap/>} />
      <Route exact path="/good-fast" element={<GoodFast/>} />
      <Route exact path="/fast-cheap" element={<FastCheap/>} />
    </Routes>
  );
};

export default MaintRouter;