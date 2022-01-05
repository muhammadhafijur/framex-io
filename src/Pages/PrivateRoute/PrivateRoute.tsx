import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  const [user, setUser] = useState({
    email: "",
    name: "",
  });
  let location = useLocation();

  useEffect(() => {
    let sessionUser = sessionStorage.getItem("user");
    if (sessionUser) {
      let parsedUser = JSON.parse(sessionUser);
      setUser(parsedUser);
    }
  }, []);

  if (user?.email) {
    return children;
  }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
