import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import base from '../../redux/store';
import './ShortStory.css'

function ShortStory() {
  const [shortStories, setShortStories] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('http://localhost:8080/api/shortstories', {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        setShortStories(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching short stories:', error);
      });
  }, [token]);

  
  return (
    <div className="sbg">
      <div className="navbar">
        <Link to="/home">Home</Link>
        <div className="dropdown">
          <button className="dropbtn">Genre </button>
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
        <Link to="/">Sign In</Link>
        <div className="rr">
          <div className="dropdown">
            <div className="dropdown-content"></div>
          </div>
          <div className='cr'>
            <img className='logo' src="ic2.png" alt="Your Logo" />
            <p>{base.getState().email.email}</p>
          </div>
        </div>
      </div>
      <br></br><br></br><br></br><br></br><br></br>
      <div><h1>ShortStories</h1></div>
      <br></br>
      <div className="ImageGallery">
        {shortStories.map((story) => (
          <div className="image-container" key={story.shortstoryid}>
            <img className="imaged" src={story.shortstoryphoto} alt={story.shortstorytitle} />
            <div className='imdesc'>{story.shortstorytitle}</div>
            <br></br>
            <div className='imp'>{story.shortstorycontent}</div>
          </div>
        ))}
      </div>
      <br></br> <br></br> <br></br>
      <div className="footer">
        <Link to="/terms"><div className="hlo">Terms & Conditions</div></Link>
        <Link to="/policies"><div className="bro">Privacy Policy</div></Link>
        <a href="https://www.legalzoom.com/articles/the-term-all-rights-reserved-explained"><div className="cry">Copyright © 2023. All rights reserved</div></a>
      </div>
    </div>
  );
}

export default ShortStory;
