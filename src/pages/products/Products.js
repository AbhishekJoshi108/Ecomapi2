import React, { useEffect, useState } from 'react'

import { Fakestoreapi } from '../../services/fakestoreapi'
import Item from '../../component/Item/Item'
import { useSearchParams } from 'react-router-dom'
import { useCart } from '../../context/cart'

const Products = () => {
    const [loading, setloading] = useState(true);
    const [products, setproducts] = useState([]);
    const [query, setquery] = useSearchParams();

    const searchquery = query.get('q');

    useEffect(() => {
        const fetchproducts = async () => {
            setloading(true);
            const products = searchquery ? await Fakestoreapi.fetchproductbysearch(searchquery) : await Fakestoreapi.fetchallproducts();
            setproducts(products)
            setloading(false)
        }
        fetchproducts().catch(console.error)
    }, [searchquery])


    if (!loading && searchquery && !products.length) {
        return (
            <div className='container'>
                <div className='row'>
                    <div>
                        <p>no pro</p>
                    </div>

                </div>

            </div>
        )
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    {/* <div className='col-md-4'> */}
                        {/* <div className='card'> */}
                            {
                               
                                    products.map((product)=>(
                                        <Item key={product.id} data={product} addtocart={()=>{}}/>
                                    ))
                                
                            }

                        {/* </div> */}



                    {/* </div> */}

                </div>

            </div>
        </>
    )
}

export default Products
