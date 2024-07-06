import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function AuthProtected({ children }) {
  const authUser = useSelector((state) => state.authUser);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authUser?.user_id) navigate("/login");
  }, []);
  return <>{authUser?.user_id ? children : "Forbidden Jutsu"}</>;
}

export default AuthProtected;
