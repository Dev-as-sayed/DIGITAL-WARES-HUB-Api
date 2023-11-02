import { useContext } from "react";
import swal from 'sweetalert';
import { Link } from "react-router-dom";
import { AuthContaxt } from "../../AuthProvider/AuthProvider";

const Login = () => {

    const {logIn} = useContext(AuthContaxt);

    const handelLogin = e =>{
        e.preventDefault();

        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        const logedUserData = {email, password}
        console.log(logedUserData);

        logIn(email, password)
            .then((result => {
                console.log(result.user)
                swal({
                    title: "Login success!!",
                    icon: "success",
                    button: "Close",
                  })
            }))
            .catch(error => console.error(error.message))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center mt-4 font-bold">Login now!</h1>
                    <form className="card-body" onSubmit={handelLogin}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <p className="text-center my-3">if you new..! <Link className="text-blue-600 underline" to="/regiter">registar</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;