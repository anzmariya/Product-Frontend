import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div>
        <div className='sidebar' style={{backgroundColor:"green",height:"90vh"}}>
          <div className='ps-5 pt-5'>
            <Link to="/" className='text-decoration-none text-light'><h3><i class="fa-solid fa-bars"></i>  DashBoard</h3></Link>
            <Link to="/productdetails" className='text-decoration-none text-light mt-5'><h3><i class="fa-solid fa-square-parking"></i>  All Products</h3></Link>
          </div>
        </div>
    </div>
  )
}

export default Sidebar