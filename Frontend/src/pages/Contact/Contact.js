import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import './Contact.css'
import { Link } from 'react-router-dom';
import base from '../../redux/store'
const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const sendEmail =  (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_m5qxhrm",
        "template_felenr6",
        form.current,
        "39XIv3BAEqfhMIzdo"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true); // Set messageSent to true when the message is sent
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  const openContactApp = () => {
    window.location.href = "+918778432272";
  };
  return (
    <div className="contactt">
      <div>
        <div>
     <div className="navbar">
  <Link to="/home">Home</Link>
  <div className="dropdown">
    <button className="dropbtn">Genre</button>
    <div className="dropdown-content">
            <Link to={'/genre/lifestyle'}>Lifestyle</Link>
            <Link to={'/genre/love'}>Love</Link>
            <Link to={'/genre/crime'}>Crime</Link>
            <Link to={'/genre/mythology'}>Mythology</Link>
            <Link to={'/genre/sports'}>Sports</Link>
            <Link to={'/genre/comedy'}>Comedy</Link>
            <Link to={'/genre/horror'}>Horror</Link>
            <Link to={'/genre/history'}>History</Link>
            <Link to={'/genre/kids'}>Kids</Link>
          </div>
  </div>
  <Link to="/shortstory">ShortStory</Link>
  <Link to="/contact">Contact Us</Link>
  <Link to="/add">Add Story</Link>
  {/* <Link to="/FAQ">FAQ</Link>
  <Link to="/queries">Queries</Link> */}
  <Link to="/">Sign In</Link>
  <div className='rr'>
  <div className="dropdown">
    <div className="dropdown-content">
  </div>
    </div>
   <div className='cr'> <img className='logo' src="ic2.png"></img>
    <p>{base.getState().email.email}</p>
    </div>
    </div>
</div>
        </div>
      </div>
      <div className="contact-container">
        <form ref={form} onSubmit={sendEmail}>
          <div className="fullname">Contact Us</div>
          <label>Name</label>
          <input type="text" name="fullName" />
          <label>Phone Number</label>
          <input type="text" name="phone" />
          <label>Email</label>
          <input type="email" name="email" />
          <label>Message</label>
          <textarea name="message" />
          <input type="submit" value="Send" />
        </form>
      </div>
      {messageSent && (
        <div className="centered-message">
          Message sent successfully!
        </div>
      )}
      <br></br>
      <div className="image-containers">
        <a href="#" id="https://maps.app.goo.gl/wiEhA8RHaMuhECfo8" className="addresss">
          <img src="address.png" alt="address" />
        </a>
        <a href="#" id="+918778432272" className="phone" onClick={openContactApp}>
          <img src="phonenumber.png" alt="" />
        </a>
        <a href="mailto:independent24hs@gmail.com" id="independent24hs@gmail.com" className="mail">
          <img src="email.png" alt="email" />
        </a>
        <a href="#" id="faxLink" className="faxx">
          <img src="fax.png" alt="fax" />
        </a>
      </div>
      <br></br>
      <div className="image-containers">
        <div className="image-container1">
          <a href="https://www.facebook.com/profile.php?id=61552136852469" target="_blank" rel="noopener noreferrer">
            <img className="facebook2" src="facebook.png" alt="Facebook" />
          </a>
        </div>
        <div className="image-container2">
          <a href="https://www.instagram.com/readout58/" target="_blank" rel="noopener noreferrer">
            <img className="insta2" src="instagram.png" alt="Instagram" />
          </a>
        </div>
        <div className="image-container3">
          <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
            <img className="twitter2" src="twitter.png" alt="Twitter" />
          </a>
        </div>
        <div className="image-container4">
          <a href="https://www.youtube.com/channel/UCz7uhQwB4L1OrYA0ONwO9HA" target="_blank" rel="noopener noreferrer">
            <img className="youtube2" src="youtube.png" alt="YouTube" />
          </a>
        </div>
      </div>
      <div className="footer">
        <Link to="/terms"><div className="hlo">Terms & Conditions</div></Link>
        <Link to="/policies"><div className="bro">Privacy Policy</div></Link>
        <Link to="/FAQ"><div className="hlo1">Faq</div></Link>
        <Link to="/queries"><div className="bro1">Feedback review</div></Link>
        <a href="https://www.legalzoom.com/articles/the-term-all-rights-reserved-explained"><div className="cry">Copyright © 2023. All rights reserved</div></a>
      </div>
    </div>
  );
};
export default Contact;
