import React from "react";
import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";

function Routes() {
  return (
    <BrowserRouter>
      <RoutesWrapper>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Error404 />} />
      </RoutesWrapper>
    </BrowserRouter>
  );
}

export default Routes;
