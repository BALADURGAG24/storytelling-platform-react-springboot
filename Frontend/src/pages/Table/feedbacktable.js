import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './storyPage.css';

function FeedPage() {
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

  const handleDelete = (fid) => {
   
    axios
      .delete(`http://localhost:8080/api/feed/delete/${fid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => {
        fetchStories(); // Refresh the list of stories after deletion
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="story-container1">
      <div className="story-list">
        <h2>Feedback List</h2>
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Second Name</th>
              <th>Phone No</th>
              <th>Email Id</th>
              <th>Query</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stories.map((s) => (
              <tr key={s.fid}>
                <td>{s.firstname}</td>
                <td>{s.secondname}</td>
                <td>{s.phoneNo}</td>
                <td>{s.emailId}</td>
                <td>{s.query}</td>
                <td>
                 <div className='yei'> <button className="ddb" onClick={() => handleDelete(s.fid)}>Delete</button></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FeedPage;
