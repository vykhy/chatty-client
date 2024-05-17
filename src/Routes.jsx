import React from "react";
import {
  BrowserRouter,
  Routes as RoutesWrapper,
  Route,
} from "react-router-dom";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Error404 from "./pages/Error404";
import { useSelector } from "react-redux";
import Home from "./pages/Home";
import Users from "./pages/Users";
import Layout from "./components/Layout";

function Routes() {
  const authUser = useSelector((state) => state.authUser.value);
  return (
    <BrowserRouter>
      <Layout>
        <RoutesWrapper>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:id" element={<Home />} />
          <Route path="/users" element={<Users />} />
          <Route path="/profile/:userId" element={<Users />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </RoutesWrapper>
      </Layout>
    </BrowserRouter>
  );
}

export default Routes;
