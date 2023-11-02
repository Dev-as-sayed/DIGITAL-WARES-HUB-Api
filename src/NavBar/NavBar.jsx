import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContaxt } from "../AuthProvider/AuthProvider";
import auth from "../Firebase/Firebase";

const NavBar = () => {
  
  const {user, logOut} = useContext(AuthContaxt);

  const handelLogOlut = () =>{
    logOut(auth)
      .then()
      .catch()
  }
  return (
    <nav className="p-4 bg-slate-200 text-black shadow-gray-800">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-yellow-500">DIGITAL WARES HUB</Link>
          <ul className="flex flex-col gap-x-4 md:flex-row space-y-2 md:space-y-0 md:space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/products">Add Product</Link></li>
            <li><Link to="/myCart">My Cart</Link></li>
          </ul>
          {
            user?
            <Link to="/login" onClick={handelLogOlut} className="btn btn-primary">LogOut</Link>
            :
            <Link to="/login" className="btn btn-primary">Login</Link>
          }
      </div>
    </nav>
  );
};

export default NavBar;


