import React from 'react'
import { BrowserRouter as Link } from 'react-router-dom'

export default function Navbar () {
return (

    <div className="Navbar"
    >
    

        <div className="link-container">
        <Link to='/' className='nav-link'><h4>Main    </h4></Link>
        <h4> How to Prepare    </h4>
        <h4> CDA Interview Questions     </h4>
        <Link to='/Contact' className='nav-link'><h4>Contact</h4></Link>
 
        </div>

    </div>
)



}