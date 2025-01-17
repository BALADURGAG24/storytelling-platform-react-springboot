import React from 'react';
import { Link , useNavigate} from 'react-router-dom';
import base from '../../redux/store';
import './Home.css';
export default function Home() {
  const navigate=useNavigate();
  const handleLogout = () => {
      localStorage.removeItem('token');
      navigate('/');
  };
  return (
    <div className='hbg12'>
      <div className="navbar">
        <Link to="/home">Home</Link>
        <div className="dropdown">
          <Link to="/genre" className="dropbtn">Genre</Link>
          <div className="dropdown-content"></div>
        </div>
        <Link to="/shortstory">ShortStory</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/add">Add Story</Link>
        <Link to="/">Sign In</Link>
        <div className='rr'>
          <div className="dropdown"></div>
          <div className='cr'>
            <img className='logo' src="ic2.png" alt="Logo" />
            <p>{base.getState().email.email}</p>
          </div>
        </div>
      </div>
      <div className='oc12'>
        <img className='imo12' src="background.jpeg" alt="Background" />
        <div className="wr12">Here you can unleash your Stories</div>
      </div>
      <div className="footer">
        <Link to="/terms"><div className="hlo">Terms&conditions</div></Link>
        <Link to="/policies"><div className="bro">Privacy Policy</div></Link>
        <Link to="https://www.legalzoom.com/articles/the-term-all-rights-reserved-explained"><div className="cry">Copyright © 2023. All rights reserved</div></Link>
      </div>
      <button className='onclick' onClick={handleLogout}>Logout</button>
    </div>
  );
}

