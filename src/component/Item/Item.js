import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'
const Item = ({data ,addtocart}) => {
    const{id,image,title,price}=data
  return (
  <>
   {/* <div className='container'>
    <div className='row'> */}
        <div className='col-md-4'>
            <div className='card shadow mt-4'>
                <img src={image} className='img-fluid p-4'/>
                <div className='title'>
                    <Link to={`/product/${id}`}>
                        {title}
                    </Link>
                    <h3>${price}</h3>

                </div>

            </div>

        </div>

    {/* </div>

   </div> */}
  </>
  )
}

export default Item
