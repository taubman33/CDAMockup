import React from 'react'
import FB from './assets/fbicon.png'


export default function Footer () {
return (
 <div className="Footer">

<h5>©2013-2016 BeMo Academic Consulting Inc. All rights reserved.      
<a href="http://www.cdainterview.com/disclaimer-privacy-policy.html" target="_blank"><span style={{textDecoration:"underline"}}>Disclaimer &amp; Privacy Policy</span></a>
<a href="mailto:info@bemoacademicconsulting.com" id="rw_email_contact"><span style={{textDecoration:"underline"}}>Contact Us</span></a>

</h5>



<div className="social">

<a class="social" href="https://www.facebook.com/bemoacademicconsulting" style={{color:"White", fontSize:"18px", fontWeight:"500"}}><h5>F</h5></a> 

<a class="social" href="https://twitter.com/BeMo_AC"><img src='https://svgshare.com/i/6w3.svg' title='twitter' style={{width:"20%"}} /></a>

</div>


 </div>
)

}