import { Link } from "react-router-dom";


const Brand = ({brand}) => {

    return (
        <Link to={`/products/${brand.brand}`}>
            <div className="card w-64 glass">
                <figure><img className="h-40" src={brand.photo} alt="car!"/></figure>
                <div className="card-body ">
                    <h2 className="card-title ">{brand.brand}</h2>
                </div>
            </div>
        </Link>
    );
};

export default Brand;