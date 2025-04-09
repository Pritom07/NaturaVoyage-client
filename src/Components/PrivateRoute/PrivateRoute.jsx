import { useContext } from "react";
import { ThemeContext } from "../Provider/Provider";
import { Navigate, useLocation } from "react-router-dom";
import Skeleton from "../Skeleton/Skeleton";
import PropTypes from "prop-types";

const PrivateRoute = ({ children }) => {
  const { User, loading } = useContext(ThemeContext);
  const location = useLocation();

  if (loading) {
    return <Skeleton />;
  }
  if (User) {
    return children;
  }

  return <Navigate to="/pages/signin" state={location.pathname}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
