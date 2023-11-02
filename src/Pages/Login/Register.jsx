import { useContext } from "react";
import swal from 'sweetalert';
import { Link } from "react-router-dom";
import { AuthContaxt } from "../../AuthProvider/AuthProvider";

const Register = () => {

    const {createNewUser} = useContext(AuthContaxt);

    const handelRegistar = e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        const newUserData = {name, email, password}
        console.log(newUserData);

        createNewUser(email, password)
            .then( (result => {
                console.log(result.user)

                fetch('https://digital-wares-hub-server-nopiejy7j-sayeds-projects.vercel.app/regiter', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(result.user)
                })
                    .then(result => result.json())
                    .then(data => console.log(data))
                    swal({
                        title: "Registar success!!",
                        icon: "success",
                        button: "Close",
                      });
                form.reset()
            }))
            .catch(error => {console.log(error.message)})

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <h1 className="text-5xl text-center mt-4 font-bold">Registar now!</h1>
                <form className="card-body" onSubmit={handelRegistar}>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="name" name="name" placeholder="Name" className="input input-bordered" required />
                    </div>
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
                        <button className="btn btn-primary">Registar</button>
                    </div>
                    <p className="text-center my-3">already have an account..! <Link className="text-blue-600 underline" to="/login">login</Link></p>
                </form>
            </div>
        </div>
);
};

export default Register;