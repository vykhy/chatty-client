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
import AuthProtected from "./components/AuthProtected";

function Routes() {
  const authUser = useSelector((state) => state.authUser);
  return (
    <BrowserRouter>
      <Layout style={{ minWidth: "100%" }}>
        <RoutesWrapper>
          <Route
            path="/"
            element={
              <AuthProtected>
                <Home />
              </AuthProtected>
            }
          />
          <Route
            path="/chat/:id"
            element={
              <AuthProtected>
                <Home />
              </AuthProtected>
            }
          />
          <Route
            path="/users"
            element={
              <AuthProtected>
                <Users />
              </AuthProtected>
            }
          />
          <Route
            path="/profile/:userId"
            element={
              <AuthProtected>
                <Users />
              </AuthProtected>
            }
          />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<Error404 />} />
        </RoutesWrapper>
      </Layout>
    </BrowserRouter>
  );
}

export default Routes;
