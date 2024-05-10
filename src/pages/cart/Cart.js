import React from 'react'
import { useCart } from '../../context/cart';

const shippingcharge = 25;
const Cart = () => {
  const { cart, removefromcart, addtocart, increasequantity, decreasequantity } = useCart();
  console.log(cart)

  const carttotal = () => {
    return cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
  }

  const round = (value, decimal) => {
    return Number(Math.round(value + "e" + decimal) + "e-" + decimal)
  }
  return (
    <>
      {/* <section className="vh-100">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <p><span className="h2">Shopping Cart </span><span className="h4">(1 item in your cart)</span></p>

              <div className="card mb-4">
                {
                  cart.length >= 1 ? (
                    <div className="card-body p-4">

                      <div className="row align-items-center">
                        {
                          cart.map((item) => (
                            <>
                              <div className="col-md-2" key={item.product.id}>

                                <img src={item.product.image}
                                  className="img-fluid border" alt="" />
                              </div>
                              <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                  <p className="small text-muted mb-4 pb-2">Name</p>
                                  <p className="lead fw-normal mb-0">{item.product.title}</p>
                                </div>
                              </div>
                              <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                 
                                </div>
                              </div>
                              <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                  <p className="small text-muted mb-4 pb-2">{item.product.quantity}</p>
                                  <p className="lead fw-normal mb-0">1</p>
                                </div>
                              </div>
                              <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                  <p className="small text-muted mb-4 pb-2">Price</p>
                                  <p className="lead fw-normal mb-0">$799</p>
                                </div>
                              </div>
                              <div className="col-md-2 d-flex justify-content-center">
                                <div>
                                  <p className="small text-muted mb-4 pb-2">Total</p>
                                  <p className="lead fw-normal mb-0">$799</p>
                                </div>
                              </div>

                            </>


                          ))
                        }

                      </div>

                    </div>

                  ) : (
                    <div>not found</div>
                  )
                }

              </div>

              <div className="card mb-5">
                <div className="card-body p-4">

                  <div className="float-end">
                    <p className="mb-0 me-5 d-flex align-items-center">
                      <span className="small text-muted me-2">Order total:</span> <span
                        className="lead fw-normal">$799</span>
                    </p>
                  </div>

                </div>
              </div>

              <div className="d-flex justify-content-end">
                <button type="button" className="btn btn-light btn-lg me-2">Continue shopping</button>
                <button type="button" className="btn btn-primary btn-lg">Add to cart</button>
              </div>

            </div>
          </div>
        </div>
      </section> */}


      <section class="h-100">
        <div class="container h-100 py-5">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-10">

              <div class="d-flex justify-content-between align-items-center mb-4">
                <h3 class="fw-normal mb-0 text-black">Shopping Cart</h3>
                <div>
                  <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!" class="text-body">price <i
                    class="fas fa-angle-down mt-1"></i></a></p>
                </div>
              </div>

              <div class="card rounded-3 mb-4">
                <div class="card-body p-4">
                  {
                    cart.map((item)=>(
                      <div class="row d-flex justify-content-between align-items-center">
                      <div class="col-md-2 col-lg-2 col-xl-2">
                        <img
                          src={item.product.image}
                          class="img-fluid rounded-3" alt="Cotton T-shirt"/>
                      </div>
                      <div class="col-md-3 col-lg-3 col-xl-3">
                        <p class="lead fw-normal mb-2">{item.product.title}</p>
                        <p><span class="text-muted">Size: </span>M <span class="text-muted">Color: </span>Grey</p>
                      </div>
                      <div class="col-md-3 col-lg-3 col-xl-2 d-flex">
                        <button class="btn btn-link px-2"
                        onClick={()=>decreasequantity(item.product.id)}>
                          <i class="fas fa-minus">dec</i>
                        </button>
  
                        <input id="form1"  name="quantity" value={item.quantity} type="number"
                          class="form-control form-control-sm" />
  
                        <button class="btn btn-link px-2"
                          onClick={()=>increasequantity(item.product.id)}>
                          <i class="fas fa-plus">inc</i>
                        </button>
                      </div>
                      <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
                        <h5 class="mb-0">$ {round(item.product.price*item.quantity,2)}</h5>
                      </div>
                      <div class="col-md-1 col-lg-1 col-xl-1 text-end">
                        <a href="#!" class="text-danger"><i class="fas fa-trash fa-lg"></i></a>
                      </div>
                    </div>


                    ))

                  }

                </div>
              </div>

              
            </div>
          </div>
          </div>
      </section>


    </>
  )
}

export default Cart;
