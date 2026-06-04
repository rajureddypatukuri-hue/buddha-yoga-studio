import './contactpage.css'
import emailjs from "@emailjs/browser";
import React, { useRef, useState } from "react";

const ContactPage = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

const sendEmail = (e) => {
  e.preventDefault();

emailjs.sendForm(
  "service_x5h4pj6",
  "template_85bgqkc",
  form.current,
  "N3vmnEb-hL0sqbSWM"
)
.then(() => {
    setSuccess(true);
    form.current.reset();
      setTimeout(() => {
    setSuccess(false);
  }, 2000);
  })


  .catch((error) => {
    console.log(error);
    setErrorMsg("Failed to send message");
  });

};
  return (
    <div className='contactpage'>
        <div className='contacthead'><p>Contact Vanasthalipuram Center</p></div>
        <p className='contactpara'>For more information about the programs</p>
        <form ref={form} onSubmit={sendEmail} className='contactform'>

    <input
      type="text"
      name="name"
      placeholder="Your Full Name"
      required
    />

    <input
      type="email"
      name="email"
      placeholder="Your e-mail address"
      required
    />

    <input
      type="tel"
      name="phone"
      placeholder="Telephone number"
    />

    <textarea
      name="message"
      placeholder="Write your Message here"
      required
    ></textarea>

    <button type="submit">
      CONTACT US
    </button>
 {success && (
  <p className="success-msg">
    Message sent successfully!
  </p>

)}
{errorMsg && (
  <p className="error-msg">{errorMsg}</p>
)}

</form>
        
        </div>
        
    
  )
}

export default ContactPage;