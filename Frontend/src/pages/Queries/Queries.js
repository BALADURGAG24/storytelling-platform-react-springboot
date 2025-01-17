import React, { forwardRef, useState ,useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Queries.css';
import base from '../../redux/store'
import axios from 'axios';

const Queries = forwardRef(() => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState("");
  const [stories, setStories] = useState([]);
  const token = localStorage.getItem('token');
  useEffect(() => {
   
    fetchStories();
  }, []);

  const fetchStories = () => {
    axios
      .get("http://localhost:8080/api/feed/get", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setStories(response.data))
      .catch((error) => console.error(error));
  };

  function onSubmit(event) {
    event.preventDefault();
    const fname = event.target[0].value;
    const sname = event.target[1].value;
    const pno = event.target[2].value;
    const eid = event.target[3].value;
    const que = event.target[4].value;
    const token = localStorage.getItem('token');
    const userData = {
      firstname:fname,
      secondname:sname,
      phoneNo:pno,
      emailId:eid,
      query:que
    };
    
    axios
      .post('http://localhost:8080/api/feed/createfeedback', userData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log('Success');
        localStorage.setItem('token',`fid`);
        navigate('/Queries');
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        setErrorMessage('Registration failed. Please try again.');
      });

  }

  return (
    <div className="cbg">
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
        <div className="form1">
        <form onSubmit={onSubmit}>
            <br></br>
            <div className="heado">
              <b>Enter your Details</b>
            </div>
            <br></br>
            <br></br>
            <div className="f1">FirstName:</div>
            <input
              className="h1"
              type="text"
              placeholder="Enter FirstName"
              name="firstName"
              
            ></input>
            <br></br>
            <br></br>

            <div className="f2">SecondName:</div>
            <input
              className="h2"
              type="text"
              placeholder="Enter SecondName"
              name="secondName"
              
            ></input>
            <br></br>
            <br></br>

            <div className="f3">PhoneNo:</div>
            <input
              className="h3"
              type="text"
              placeholder="Enter PhoneNo"
              name="phoneNo"
              
            ></input>
            <br></br>
            <br></br>

            <div className="f4">EmailId:</div>
            <input
              className="h4"
              type="text"
              placeholder="Enter EmailId"
              name="emailId"
             
            ></input>
            <br></br>
            <br></br>

            <div className="f5">Query:</div>

            <div className="h5">
              <textarea
                name="query"
                placeholder="Enter Query"
               
              ></textarea>
            </div>
            <br></br>
            <br></br>
            <button type="submit"  className="btr">
              <div className="dfg">Submit response</div>
            </button>
          </form>

          </div>
          <div className="container">
  {stories.map((s) => (
    <div key={s.fid} className="super">
      <span>{s.firstname}</span>
      <span>{s.secondname}</span>
      <div>{s.phoneNo}</div>
      <div>{s.emailId}</div>
      <div>{s.query}</div>
    </div>
  ))}
</div>

        
        <br></br>  <br></br>  <br></br>
      
        <div className="footer">
        <Link to="/terms">
          <div className="hlo">Terms & conditions</div>
        </Link>
        <Link to="/policies">
          <div className="bro">Privacy Policy</div>
        </Link>
        <Link to="https://www.legalzoom.com/articles/the-term-all-rights-reserved-explained">
          <div className="cry">Copyright © 2023. All rights reserved</div>
        </Link>
      </div>
    </div>
  );
});
export default Queries;
