import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "2add5787-27d4-43a0-8662-a62edf7529b8");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Success");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };


  return (
    <div className='contact'>
        
        <div className = "contact-col">
        <h3> Send us a message <img src={msg_icon} alt="" /></h3>
            <p>We're here to help you with any inquiries or concerns 
              you may have. Please don't 
              hesitate to reach out to us at:</p>
                <ul>
                    <li><img src={mail_icon} alt="" />info@valdezeventz.com</li>
                    <li><img src={phone_icon} alt="" />056---5656878</li>
                    <li><img src={location_icon} alt="" />PO BOX --- NAIROBI</li>
                </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit} >
                <label> Your Name</label>
                <input type="text" name='name'placeholder='Enter Your name' required />
                <label >Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter your mobile number' required/>
                <label> Write Your Message Here</label>
                <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>
                <button type='submit'className='btn dark-btn'> Submit <img src={white_arrow} alt="" /></button>
            </form>
            <span> {result}  </span>
        </div>
    </div>
  )
}

export default Contact