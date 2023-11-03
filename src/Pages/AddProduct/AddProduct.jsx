import { Link } from "react-router-dom";
import swal from 'sweetalert';

const AddProduct = () => {

    const handelAddProduct = e =>{
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const category = form.category.value;
        const product = form.product.value;
        const price = form.price.value;
        const shortDescription = form.shortDescription.value;
        const photo = form.photo.value;
        const rating = form.rating.value;


        // console.log(name, brandName, category, product, price, shortDescription, photo, rating);

        const newProduct ={name, brandName, category, product, price, shortDescription, photo, rating}
        console.log(newProduct);

        fetch( 'https://digital-wares-hub-server.vercel.app/addProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(result => {
                result.json()
                swal({
                    title: "add successfully!!",
                    icon: "success",
                    button: "Close",
                  });
            })
            .then(data => console.log(data))
        form.reset()
    }
    return (
        <div className=" p-24">
        <div className="flex justify-between">           
            <h2 className="text-3xl font-extrabold">Add new product</h2>
            <Link to='/addBrand'> <input type="submit" value="Add Brand" className="btn btn-primary" /> </Link>
        </div>
        <form onSubmit={handelAddProduct}>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name" placeholder="Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Brand Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="brandName" placeholder="Brand Name" className="input input-bordered w-full" required />
                    </label>
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" placeholder="Category" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Product</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="product" placeholder="Product" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Price</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="price" placeholder="Price" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control md:w-1/2 ml-4">
                    <label className="label">
                        <span className="label-text">Shord description</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="shortDescription" placeholder="Short description" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="md:flex mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text">Rating</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="rating" placeholder="Ration" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Add" className="btn btn-primary w-full" />

        </form>
    </div>
    );
};

export default AddProduct;