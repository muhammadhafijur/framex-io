import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }: { children: JSX.Element }) => {
  // const {user} = useAuth();
  let location = useLocation();

  // if(user.email ){
  //     return Children;
  // }

  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
