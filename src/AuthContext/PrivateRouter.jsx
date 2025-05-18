import React, { use } from "react";
import { AuthContext } from "./AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRouter = ({ children }) => {
  const { user, loading } = use(AuthContext);
  //   ja page teke login korte chay sei page niye jaoyar jonno
  const location = useLocation();
  console.log(location);
  if (loading) {
    return <span className="loading loading-ring loading-xl"></span>;
  }
  if (!user) {
    return (
      <Navigate state={loading?.pathname} to={"/login"}>
        {" "}
      </Navigate>
    );
  }
  return children;
};

export default PrivateRouter;
