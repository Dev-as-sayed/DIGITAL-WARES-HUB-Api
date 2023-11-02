import { useEffect, useState } from "react";
import swal from 'sweetalert';
import { useParams } from "react-router-dom";

const MyCart = () => {

    const {_id} = useParams();
    const [silactedProduct, setSilactedProduct ] = useState([]);
    const [cartData, setCartData] = useState([]);
    console.log(cartData);

    useEffect( ()=>{
        fetch('https://digital-wares-hub-server-nopiejy7j-sayeds-projects.vercel.app/silactedProduc')
            .then(res => res.json())
            .then(data => setCartData(data))
    }, [])
    
    useEffect(() => {
        fetch(`https://digital-wares-hub-server-nopiejy7j-sayeds-projects.vercel.app/product/${_id}`)
            .then(res => res.json())
            .then(data => setSilactedProduct(data))
    }, [_id])

    const { brandName, category, name, photo, price, product, shortDescription, rating } = silactedProduct;

    const handelAddtoCard = silactedProduct =>{

        const silactedProductsName =  silactedProduct.name
        const silactedProductPrice = silactedProduct.price;
        const silactedProductId = silactedProduct._id;
        
        const lockProduct = {silactedProductsName, silactedProductPrice, silactedProductId}
        console.log(lockProduct);

        fetch( 'https://digital-wares-hub-server-nopiejy7j-sayeds-projects.vercel.app/silactedProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(lockProduct)
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
    }

    const handelDeletPorductInCart = _id =>{

        swal({
            title: "Are you sure?",
            text: "Once deleted, you will not be able to recover this imaginary file!",
            icon: "warning",
            buttons: true,
            dangerMode: false,
          })
          .then((willDelete) => {
            if (willDelete) {
              swal("Poof! Your imaginary file has been deleted!", {
                icon: "success",
              });
            } else {
              swal("Your imaginary file is safe!");
            }
            fetch(`https://digital-wares-hub-server-nopiejy7j-sayeds-projects.vercel.app/deletCard/${_id}`, {
                method: 'DELETE'
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    alert('deleted successfully')
                    const remaning = cartData.filter(cardId => cardId._id !== _id);
                    setCartData(remaning);
                }
            })
          });
    }

    return (
        
        <div className={`flex justify-around py-12 mx-auto gap-6`}>
            <div className={` ${silactedProduct ? '' : 'hidden' } `}>
                <div className="card w-[35rem] bg-base-100 shadow-xl">
                    <figure><img className="h-96 w-full" src={photo} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                        {name}
                        </h2>
                        <div className="flex gap-2">
                            <div className="badge badge-secondary">PRICE: {price}</div>
                            <div className="badge badge-secondary">RATING: {rating}</div>
                        </div>
                        <p>{shortDescription}</p>
                        <div className="flex h-fit justify-between">
                            <div className="card-actions justify-start my-auto">
                                <div className="badge badge-outline">{brandName}</div> 
                                <div className="badge badge-outline">{category}</div> 
                                <div className="badge badge-outline">{product}</div>
                            </div>
                            <div >
                                <button onClick={ () => handelAddtoCard(silactedProduct)} className="btn btn-primary">ADD TO CARD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`w-96 ${silactedProduct === 'flex' ? 'flex justify-center items-center' : ''} h-fit sticky top-0`}>
                <h1 className="card-title text-center justify-center py-5">Confirm products</h1>
                {
                    cartData.map( (cardProuct, idx) => <>
                        <div key={idx}>
                            <ul className="">
                                <li className="flex justify-between my-3"><span>{cardProuct.silactedProductsName}:</span> <span>{cardProuct.silactedProductPrice}$ <span onClick={() => handelDeletPorductInCart(cardProuct._id)} className="btn h-5 w-5 rounded p-1 bg-slate-600">X</span></span></li>
                            </ul>
                        </div>
                    </>)
                }
                <div className="justify-center text-center"> <button className="btn btn-primary ">Bye Naw</button></div>
            </div>
        </div>
    );
};

export default MyCart;