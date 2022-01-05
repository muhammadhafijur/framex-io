import React, { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }: { children: JSX.Element }) => {
  const [admin, setAdmin] = useState<boolean>(true);
  let location = useLocation();

  let sessionUser = sessionStorage.getItem("user");

  useEffect(() => {
    if (sessionUser) {
      let parsedUser = JSON.parse(sessionUser);
      if (parsedUser.role === "admin") {
        setAdmin(true);
      }
    }
  }, [sessionUser]);

  if (admin) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} />;
};

export default AdminRoute;
