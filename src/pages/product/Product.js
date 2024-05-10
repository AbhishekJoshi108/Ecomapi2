import React, { useEffect, useState } from 'react';
import { Fakestoreapi } from '../../services/fakestoreapi'
import { Link, useParams } from 'react-router-dom';
import './Product.css'
import { useCart } from '../../context/cart';

const Product = () => {
    // const [loading, setloading] = useState(true)
    const [product, setproduct] = useState({});
    const { productId } = useParams();
    const {addtocart}=useCart()
    useEffect(() => {
        const fetchproduct = async () => {
            // setloading(true);
            const product = await Fakestoreapi.fetchproductbyId(productId);
            setproduct(product);
            // setloading(false)
        }
        fetchproduct().catch(console.error)
    }, [productId])

    // if (!loading && !product) {
    //     return (
    //         <div className='container'>
    //             <div className='row'>
    //                 <p>product wwas not foumd please visit{""}
    //                     <Link to="/" replace>
    //                         home
    //                     </Link>
    //                     to see all avaliable products
    //                 </p>

    //             </div>

    //         </div>
    //     )
    // }





    return (
        <>

            {/* {loading ? (
                <div className={"loader"}>loading...</div>
            ) : */}



            <div className='container'>
                <div className='row'>
                    <div className='col-md-5 shadow mt-5 leftside d-flex'>
                        <img src={product.image} className='img-fluid' />


                    </div>
                    <div className='col-md-7 mt-5'>
                        <h3 className='ms-3'>{product.title}</h3>
                        <p className='fs-5'>{product.description}</p>

                        <p className='fs-5'> category: {product.category}</p>
                        <h3 className='text-success'>$ {product.price}</h3>
                        <button className='btn btn-warning' onClick={()=>addtocart(product)}>AddToCart &#x1F6D2;</button>







                    </div>

                </div>


            </div>








        </>




    )
}


export default Product
