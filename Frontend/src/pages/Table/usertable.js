import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './storyPage.css';

function UserPage() {
  const [stories, setStories] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Fetch the list of stories when the component mounts
    fetchStories();
  }, []);

  const fetchStories = () => {
    axios
      .get("http://localhost:8080/api/getall", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setStories(response.data))
      .catch((error) => console.error(error));
  };

  const handleDelete = (uid) => {
    // Delete a story
    axios
      .delete(`http://localhost:8080/api/delete/${uid}`, {
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
        <h2>User List</h2>
        <table>
          <thead>
            <tr>
              <th>name</th>
              <th>email</th>
              <th>role</th>
              <th>createdAt</th>
              
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stories.map((s) => (
              <tr key={s.uid}>
                <td>{s.name}</td>
                <td>{s.email}</td>
                <td>{s.role}</td>
                <td>{s.createdAt}</td>
                
                <td>
              <div className='yei'><button className='ddb' onClick={() => handleDelete(s.uid)}>Delete</button></div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default UserPage;
