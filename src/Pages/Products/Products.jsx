import {  useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Product from "./Product/Product";

const Products = () => {

    const [products, setProducts] = useState([]);
    const {brand} = useParams();

    console.log(products);

    useEffect( () => {
        fetch(`https://digital-wares-hub-server-nopiejy7j-sayeds-projects.vercel.app/products/${brand}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [brand]);
    return (
        <div className="flex py-12 w-fit mx-auto gap-6 ">
            <div className=" w-96 items-center text-center max-h-screen sticky top-16">
                <div className="h-96 carousel carousel-vertical rounded-box">
                    <div className="carousel-item h-full">
                        <img src={'https://i.ibb.co/26TCT1g/Blue-white-creative-marketing-agency-facebook-post.jpg'} />
                    </div> 
                    <div className="carousel-item h-full">
                        <img src={'https://i.ibb.co/KzfmpdF/Illustrative-We-re-Hiring-FB-Post-Announcement.jpg'} />
                    </div> 
                    <div className="carousel-item h-full">
                        <img src={'https://i.ibb.co/26TCT1g/Blue-white-creative-marketing-agency-facebook-post.jpg'} />
                    </div> 
                </div>
            </div>
            <div className="">
                <div className="w-fit pt-10 lg:grid grid-cols-2 gap-8 ">
                    {
                        products?.map( productData => <Product
                            key={productData._id}
                            productData={productData}
                        ></Product>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Products;