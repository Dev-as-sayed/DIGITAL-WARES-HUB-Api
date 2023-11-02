import swal from 'sweetalert';

const AddBrand = () => {

    const handelAddBrand = e => {
        e.preventDefault();

        const form = e.target;
        const photo = form.photo.value;
        const brand = form.brand.value;

        const newBrand = {photo, brand};

        console.log(newBrand);
        
        fetch('https://digital-wares-hub-server-nopiejy7j-sayeds-projects.vercel.app/addBrand', {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBrand)
        })
            .then(res => {
                res.json()
                swal({
                    title: "add successfully!!",
                    icon: "success",
                    button: "Close",
                  });
            })
            .catch(error => console.log(error.message))
        form.reset()

    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <h1 className="text-5xl text-center mt-4 font-bold">Add new brand</h1>
                    <form className="card-body" onSubmit={handelAddBrand}>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Brand Name</span>
                            </label>
                            <input type="text" name="brand" placeholder="Brand Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo Url</span>
                            </label>
                            <input type="text" name="photo" placeholder="Photo Url" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-3">
                            <button className="btn btn-primary">ADD</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddBrand;