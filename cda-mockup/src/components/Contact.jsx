import React from 'react'

export default function Contact () {
    return (

        <div className="contact-container">

                            <div className="contact-image">
                            <img id="featureImg" src="http://cdainterview.com/resources/contact-us.png" style={{width:"100%"}}></img>
                    
                            </div>



       <div className="contact-text">
       <h2>BeMo Academic Consulting Inc.</h2>

       <br />
       Toll Free: 1-855-900-BeMo (2366)
       <br />

       Email: info@bemoacademicconsulting.com
       <br />
       </div>
       
       <div className = "contact-page">

          <div className="title-container">          
            <h1> Contact Me</h1>
            </div>
        <div className="form-container"
                    style={{width: "90vw", 
                    display: "flex", 
                    justifyContent: "center", 
                    paddingTop: "1vh"}}>


         

        <form id="fs-frm" 
              name="simple-contact-form" 
              accept-charset="utf-8" 
              action="https://formspree.io/xdodpqwb" 
              method="post">

            <fieldset id="fs-frm-inputs">
                <label for="full-name"><h2>NAME:</h2></label>
                <input type="text" 
                       name="name" 
                       id="full-name"
                       placeholder="" 
                       required=""/>

                    <label for="email-address"><h2>EMAIL ADDRESS</h2></label>

                    
                    <input type="email" name="_replyto" id="email-address" placeholder=" " required=""/>
                        <label for="message"><h2>HOW CAN WE HELP YOU?</h2></label>
                        <textarea rows="8" name="message" id="message" placeholder=" " required=""></textarea>
                        <input type="hidden" name="_subject" id="email-subject" value="Contact Form Submission"/>
        </fieldset>
                        <input type="submit" value="Submit" style={{backgroundColor: "grey", color: "#000066"}}/>
                        <input type="reset" value="Reset" style={{backgroundColor: "grey", color: "#000066"}}/>
        </form>
        </div>
       
       
       
       
    </div>
    </div>



    )
}