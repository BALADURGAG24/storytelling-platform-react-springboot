import React, { useState } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import './Genre.css';
import { Link } from 'react-router-dom';
import base from '../../redux/store'
export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const contentData = [
    { title: 'Lifestyle', img: 'lifestyle.jpg', link: '/genre/lifestyle' },
    { title: 'Love', img: 'lovi.jpg', link: '/genre/love' },
    { title: 'Crime', img: 'crimy.jpg', link: '/genre/crime' },
    { title: 'Mythology', img: 'MYTHY.jpg', link: '/genre/mythology' },
    { title: 'Sports', img: ' gamy.jpg', link: '/genre/sports' },
    { title: 'Comedy', img: 'comdy.jpg', link: '/genre/comedy' },
    { title: 'Horror', img: 'hory.jpg', link: '/genre/horror' },
    { title: 'History', img: 'history.jpg', link: '/genre/history' },
    { title: 'Kids', img: 'KIDY.jpg', link: '/genre/kids' },
];
  const filteredContent = contentData.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  return (
    < div className='hbg'>
  <div className="navbar">
  <Link to="/home">Home</Link>
  <div className="dropdown">
    <Link to="/genre" className="dropbtn">Genre</Link>
  </div>
  <Link to="/shortstory">ShortStory</Link>
  <Link to="/contact">Contact Us</Link>
  <Link to="/add">Add Story</Link>
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
    <div className="search-bar">
    <input
      type="text"
      placeholder="Search..."
      value={searchQuery}
      onChange={handleSearchChange}
    />
  </div>
  {contentData.map((item, index) => (
  <Link key={index} to={item.link}>
    <div className={`con${index + 1}`}>
      <img className={`img${index + 1}`} src={item.img} alt={item.title} />
      <div className='ol3'>{item.title}</div>
    </div>
  </Link>
))}
     <div className="footer"> 
     <Link to="/terms"><div className="hlo">Terms&conditions</div></Link>
     <Link to="/policies"><div className="bro">Privacy Policy</div></Link>
     <Link to="https://www.legalzoom.com/articles/the-term-all-rights-reserved-explained"><div className="cry">Copyright © 2023.All rights reserved</div></Link>
  </div>
  </div>
  );
}
