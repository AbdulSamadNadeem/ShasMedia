import React from "react";
import { Route, Routes } from "react-router";
import Main from "./Pages/Main";
import Loader from "./Context/Loader";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <Loader>
      <Toaster  position="top-center" reverseOrder={false} />
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Loader>
  );
};

export default App;
