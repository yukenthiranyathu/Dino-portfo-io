import React, { useState } from 'react'
import './Connect.css'
import mail_icon from '../../assets/mail_icon.svg'
import location_icon from '../../assets/location_icon.svg'
import call_icon from '../../assets/call_icon.svg'

function Connect() {

    const [result, setResult] = useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
    
        formData.append("access_key", "114cf70c-b512-4057-b5ba-b68caca85a55");
    
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });
    
        const data = await response.json();
    
        if (data.success) {
          alert(data.message)
        } else {
          console.log("Error", data);
          setResult(data.message);
        }
      };

  return (
    <div id='contact' className='connect'>
        <div className="connect-title">
            <h1>Get In Touch</h1>
        </div>
        <div className="connect-section">
            <div className="connect-left">
                <h1>I Look Forward To Connecting With You!</h1>
                <p>I'm currently available to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                <div className="connect-details">
                    <div className="connect-detail">
                        <img src={mail_icon} alt="" /><p>dinogitha2000@gmail.com</p>
                    </div>
                    <div className="connect-detail">
                        <img src={location_icon} alt="" /><p>Ward No04, Puthukkudiyiruppu, Mullitivu</p>
                    </div>
                    <div className="connect-detail">
                        <img src={call_icon} alt="" /><p>074-0431396</p>
                    </div>
                    <div className="connect-detail">
                        
                    </div>
                </div>
            </div>
            <form onSubmit={onSubmit} className='connect-right'>
                <label htmlFor="">Your Name</label>
                <input type="text" placeholder='Enter Your Name' name='name' />
                <label htmlFor="">Your Email</label>
                <input type="text" placeholder='Enter Your Emsil' name='email' />
                <label htmlFor="">Write Your Message Here</label>
                <textarea name="message" raws="8" placeholder='Enter Your Message'></textarea>
                <button type='submit' className="connect-submit">Submit Now</button>
            </form>
        </div>
    </div>
  )
}

export default Connect