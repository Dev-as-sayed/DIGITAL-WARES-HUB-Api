import { Link } from "react-router-dom";

const Product = ({productData}) => {
    const {_id, name, photo, price,  rating } = productData;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img className="h-44 w-full" src={photo} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                {name}
                </h2>
                <div className="flex h-fit justify-between">
                    <div className="card-actions justify-start my-auto">
                        <div className="badge badge-secondary">PRICE: {price}</div>
                        <div className="badge badge-secondary">RATING: {rating}</div>
                    </div>
                    <div >
                        <Link to={`/myCart/${_id}`}><button className="btn btn-primary">DETAILS</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Product;