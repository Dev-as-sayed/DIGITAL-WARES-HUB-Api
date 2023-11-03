import { useEffect, useState } from "react";
import Brand from "./Brand";

const Brands = () => {

    const [brands, setBrands] = useState([]);
    
    useEffect( () => {
        fetch('https://digital-wares-hub-server.vercel.app/addBrand')
            .then(res => res.json())
            .then(data => setBrands(data))
    }, [])


    return (
        <div className="p-16 bg-stone-50">
            <div>
                <div className="max-w-[30rem] mx-auto mb-16 text-center text-neutral-content">
                    <h1 className="mb-3 text-3xl font-bold">Explore Our Portfolio</h1>
                    <p className="mb-5">Our portfolio is a testament to quality, innovation, and excellence. Click on any brand to discover their unique range of products.</p>
                </div>
                <div className="grid grid-cols-3 gap-10 w-fit mx-auto">
                    {
                        brands.map( (brand, idx) => <Brand 
                            key={idx}
                            brand={brand}
                        ></Brand>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Brands;