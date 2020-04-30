import React from 'react'

export default function Contact () {
    return (

        <div className="contact-container">

                            <div className="contact-image">
                            <img id="featureImg" src="http://cdainterview.com/resources/contact-us.png" style={{width:"100%"}}></img>
                    
                            </div>



       <div className="contact-text" style={{marginLeft:"3rem"}}>
       
        <h2>BeMo Academic Consulting Inc.</h2>

       <h6><b><u>Toll Free:</u></b> 1-855-900-BeMo (2366)
      
       <br />

       
       <b><u>Email: </u></b>info@bemoacademicconsulting.com
       <br />
       </h6> 
       </div>


    <div className="contact-form">
       <form action="./contact-us_files/mailer.php" method="post" enctype="multipart/form-data">
	   <div class="message-text"><span style={{fontSize:"17px", fontWeight:"bold"}}>BeMo Academic Consulting Inc. </span>
       <br />
       <span><span style={{fontSize:"13px", fontWeight:"bold"}}><u>Toll Free</u></span><span style={{fonSize:"13px"}}>: 
       </span><span style={{fontSize:"14px"}}>1-855-900-BeMo (2366)</span><span style={{fontSize:"13px"}}><br/>
       </span><span style={{fontSize:"13px", fontWeight:"bold"}}><u>Email</u></span><span style={{fontSize:"13px"}}>: </span>
       <span style={{fontSize:"14px"}}>info@bemoacademicconsulting.com</span></span></div>
		<label>Name:</label> *
        <br />
		<input class="form-input-field" type="text" value="" name="form[element0]" size="40"/><br/><br/>

		<label>Email Address:</label> *<br/>
		<input class="form-input-field" type="text" value="" name="form[element1]" size="40"/><br/><br/>

		<label>How can we help you?</label> *<br/>
		<textarea class="form-input-field" name="form[element2]" rows="8" cols="38"></textarea><br/><br/>

		<div className ="contact-form-sheet" style={{display: "none"}}><div class="message-text">
            <span style={{fontSize:"17px", fontWeight:"bold"}}/>
        BeMo Academic Consulting Inc. <span> <br/>
        <span><span style={{fontSize:"13px", fontWeight:"bold"}}><u>Toll Free</u></span>
        <span style= {{fontSize:"13px"}}>: </span><span style={{fontSize:"14px"}}>
            1-855-900-BeMo (2366)</span><span style={{fontSize:"13px"}}><br /></span>
            <span style={{fontSize:"13px", fontWeight:"bold"}}><u>Email</u></span>
            <span style={{fontSize:"13px"}}>: </span>
            <span style={{fontSize:"13px"}}>info@bemoacademicconsulting.com</span></span></span>
            
            </div>

			<label>Spam Protection: Please don't fill this in:</label>
			<textarea name="comment" rows="1" cols="1"></textarea>
		</div>
		<input type="hidden" name="form_token" value="16632360165eab2342c5651" />
		<input class="form-input-button" type="reset" name="resetButton" value="Reset" />
		<input class="form-input-button" type="submit" name="submitButton" value="Submit" />
	
</form>
</div>
</div> 

    )
}