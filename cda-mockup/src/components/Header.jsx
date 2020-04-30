import React from 'react';
import Logo from './assets/logo.png'
import Navbar from './Navbar'

export default function Header () {
return (

<div className="header-container">

        <div className="header-box">
                <div className="Header">
                <img src={Logo}
                     style={{width:"13%"}} />
 
                        <div className="Navbar"
                        style={{marginLeft:"0rem"}}>
                        <Navbar />
                        </div>


                </div>
        </div>
</div>


)
}