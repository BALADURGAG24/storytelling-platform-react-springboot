import React,{useState,useEffect} from 'react'
import axios from 'axios';
import './dboverview.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faBook, faUser, faQuestionCircle, faFile } from '@fortawesome/free-solid-svg-icons';



function Dboverview() {
    const [stories, setStories] = useState([]);
    const [feedbacks, setFeedbacks] = useState([]);
    const [users, setUsers] = useState([]);
    const [shortstories, setShortStories] = useState([]);
    const token = localStorage.getItem('token');
    useEffect(() => {
     
        fetchStories();
      }, []);

      useEffect(() => {
       
        fetchfeedbacks();
      }, []);

      useEffect(() => {
      
        fetchUsers();
      }, []);

      useEffect(() => {
       
        fetchshortstories();
      }, []);

    const fetchStories = () => {
        axios
          .get("http://localhost:8080/api/story", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => setStories(response.data))
          .catch((error) => console.error(error));
      };
const [chartData, setChartData] = useState({
  labels: ['Category A', 'Category B', 'Category C'],
  datasets: [
    {
      data: [30, 40, 30],
      backgroundColor: ['#FF5733', '#33FF57', '#3357FF'],
    },
  ],
});

      const fetchfeedbacks = () => {
        axios
          .get("http://localhost:8080/api/feed/get", {
            headers: {
              Authorization:`Bearer ${token}`,
            },
          })
          .then((response) => setFeedbacks(response.data))
          .catch((error) => console.error(error));
      };

  const fetchshortstories = () => {
  axios
    .get('http://localhost:8080/api/shortstories', {
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
};

      
      const fetchUsers = () => {
        axios
          .get("http://localhost:8080/api/getall", {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
          .then((response) => setUsers(response.data))
          .catch((error) => console.error(error));
      };
    return (

        <div className='dbobg'>
         <div className='dbmainc'>
            <div className='code'>
            <br></br><br></br>
            <div className='cpr2' ><br></br><div className='nu'>Number of Users</div>{users.length}</div>
                <div className='cpr'><br></br><div className='ns'>Number of Stories</div> {stories.length}</div>
                <div className='cpr3' ><br></br><div className='nu'>Number of Shortstories</div>{shortstories.length}</div>
                <div className='cpr1'><br></br><div className='nf'> Number of Feedbacks </div>{feedbacks.length}</div>
                <img className='what' src="analytics.webp"></img>
            </div>
            
         </div>
  <div className ="dbside">
<Link to="/Home"><FontAwesomeIcon icon={faHome} className="icon" /><b>Home</b></Link>
<Link to="/usercrud"><FontAwesomeIcon icon={faUser} className="icon" /><b>User info</b></Link>
<Link to="/storycrud"><FontAwesomeIcon icon={faBook} className="icon" /><b>Stories</b></Link>
<Link to="/shortstorycrud"><FontAwesomeIcon icon={faFile} className="icon" /><b>Short Story info</b></Link>
<Link to="/feedcrud"><FontAwesomeIcon icon={faQuestionCircle} className="icon" /><b>Queries info</b></Link></div>
</div>   
            
    )
}

export default Dboverview