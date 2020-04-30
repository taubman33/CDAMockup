import React from 'react'


function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

export default function Hamburger () {
    return (
<div className="hamburger-container">
<div class="topnav">
                        <a href="#home" class="active">Logo</a>
                        <div id="myLinks">


            <div className="hamburger"><a href="#news">Main</a></div>
            <div className="hamburger"><a href="#contact">Contact</a></div>
 
                            
                        </div>
                        <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                            <i class="fa fa-bars"></i>
                        </a>
                        </div>

</div>
        


    )
}