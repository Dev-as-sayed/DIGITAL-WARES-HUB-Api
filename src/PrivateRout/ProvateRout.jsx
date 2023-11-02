import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContaxt } from "../AuthProvider/AuthProvider";

const PrivateRout = ({ children }) => {

    const {user, loading} = useContext(AuthContaxt);
    const location = useLocation();
    console.log(loading);

    if(loading){
        return <span className="loading loading-infinity loading-lg"></span> ;
    }
    if(user){
        return children;
    }
    return <Navigate state={location.pathname} to='/login'></Navigate>;
};

export default PrivateRout;