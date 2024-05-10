import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./Nav.css"
const Nav = ({onSearch,cartItemcount}) => {

    const[searchquery,setsearchquery]=useState('')

    const handlesubmit=()=>{
        if (searchquery.trim().length) {
            onSearch(searchquery.trim())
            
        }
        setsearchquery('')
    }
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/">Ecommerce-pro</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <a className="nav-link active" href="#">About</a>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link active cart-sym" to="/cart">Cart&#x1F6D2; {
            cartItemcount>0 && (
                <div className='cart-wrap'>{cartItemcount}</div>
            )
          } 
         
          
          </Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={searchquery} onChange={e=> setsearchquery(e.target.value)}/>
        <button className="btn btn-outline-success" onClick={handlesubmit} type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
   </>
  )
}

export default Nav
