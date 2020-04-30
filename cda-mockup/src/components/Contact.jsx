import React from 'react'

export default function Contact () {
    return (

        <div className="contact-container">

                            <div className="contact-image">
                            <img id="featureImg" src="http://cdainterview.com/resources/contact-us.png" style={{width:"100%"}}></img>
                    
                            </div>





    <div className="contact-form" >

            <div className="contact-info" style={{marginLeft:"3rem", letterSpacing:"2px"}}>
            <form action="./contact-us_files/mailer.php" method="post" enctype="multipart/form-data">
                <div class="message-text"><span style={{fontSize:"17px", fontWeight:"bold"}}>
                BeMo Academic Consulting Inc. </span>
                <br /> <br />
                 <span><span style={{fontSize:"13px", fontWeight:"bold"}}><u>Toll Free</u></span><span style={{fonSize:"13px"}}>: 
            
                </span><span style={{fontSize:"14px"}}>1-855-900-BeMo (2366)</span><span style={{fontSize:"13px"}}><br/>
                <br />
                </span><span style={{fontSize:"13px", fontWeight:"bold"}}><u>Email</u></span><span style={{fontSize:"13px"}}>: </span>
            
                <span style={{fontSize:"14px"}}>info@bemoacademicconsulting.com</span></span>
            </div>
   

        <div className="form" style={{textAlign:"center", marginTop:"4rem"}}>
		<label>NAME:</label> *
        <br />
		<input class="form-input-field" type="text" value="" name="form[element0]" size="40" style={{backgroundColor:"#CBCBCB"}}/><br/><br/>

		<label>EMAIL ADDRESS:</label> *<br/>
		<input class="form-input-field" type="text" value="" name="form[element1]" size="40" style={{backgroundColor:"#CBCBCB"}}/><br/><br/>

		<label>HOW CAN WE HELP YOU?</label> *<br/>
		<textarea class="form-input-field" name="form[element2]" rows="8" cols="38" style={{backgroundColor:"#CBCBCB"}}></textarea><br/><br/>
       <div className="buttons">
        <input type="reset" value="RESET" style={{backgroundColor: "grey", color: "#000066", padding:"15px"}}/>
        <input type="submit" value="SUBMIT" style={{backgroundColor: "grey", color: "#000066", padding:"15px"}}/>
        </div>
            <br/>

        <span style={{fontSize:"13px", fontWeight:"bold"}}><u>Note</u></span><span style={{fonSize:"13px"}}>:</span>
                
                <span style={{fontSize:"14px", marginBottom:"4rem"}}>If you are having difficulties with our contact us form above, 
        send us an email to info@bemoacademicconsulting.com (copy & paste the email address)</span>
                <br /><br /> <br />

		</div>


	
</form>

</div>
</div> 
</div>

    )
}