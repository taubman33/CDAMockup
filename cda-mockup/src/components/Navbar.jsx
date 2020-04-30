import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar () {
return (

    <div className="Navbar">
    

        <div className="link-container">

        <div className="Links">
        <Link to='/' className='nav-link'><h4>Main</h4></Link>
        </div>

        <div className="Links">
        <h4> How to Prepare</h4>
        </div>

        <div className="Links">
        <h4> CDA Interview Questions</h4>
        </div>


        <div className="Links">
        <Link to='/Contact' className='nav-link'><h4>Contact</h4></Link>
        </div>




        </div>

    </div>
)



}