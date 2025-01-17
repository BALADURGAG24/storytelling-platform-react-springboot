import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './storyPage.css';

function ShortStoryPage() {
  const [stories, setStories] = useState([]);
  const [story, setStory] = useState({
    shortstoryid: null,
    shortstorytitle: '',
    shortstorycontent: '',
    shortstoryphoto: '',
  });
  const [imagePreview, setImagePreview] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [token] = useState(localStorage.getItem('token'));
  const [errors, setErrors] = useState({
    shortstorytitle: '',
    shortstorycontent: '',
    shortstoryphoto: '',
  });

  useEffect(() => {
    fetchStories();
  }, []);

  const fetchStories = () => {
    axios
      .get("http://localhost:8080/api/shortstories", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setStories(response.data))
      .catch((error) => console.error(error));
  };

  const handleCreate = () => {
    // Reset error messages
    setErrors({
      shortstorytitle: '',
      shortstorycontent: '',
      shortstoryphoto: '',
    });

    // Check for empty fields
    if (!story.shortstorytitle || !story.shortstorycontent || !story.shortstoryphoto) {
      if (!story.shortstorytitle) {
        setErrors({ ...errors, shortstorytitle: 'Title is required' });
      }
      if (!story.shortstorycontent) {
        setErrors({ ...errors, shortstorycontent: 'Content is required' });
      }
      if (!story.shortstoryphoto) {
        setErrors({ ...errors, shortstoryphoto: 'Photo URL is required' });
      }
      return;
    }

    // Create a new short story
    axios
      .post('http://localhost:8080/api/shortstories', story, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        fetchStories(); // Refresh the list of short stories
        clearForm();
      })
      .catch((error) => console.error(error));
  };

  const handleEdit = (selectedStory) => {
    // Set the form for editing
    setStory(selectedStory);
    setIsEditing(true);
  };

  const handleUpdate = () => {
    // Update the selected short story
    axios
      .put(`http://localhost:8080/api/shortstories/${story.shortstoryid}`, story, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        fetchStories(); // Refresh the list of short stories
        clearForm();
        setIsEditing(false);
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (shortstoryid) => {
    // Delete a short story
    axios
      .delete(`http://localhost:8080/api/shortstories/${shortstoryid}`, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        fetchStories();
      })
      .catch((error) => console.error(error));
  };

  const clearForm = () => {
    setStory({
      shortstoryid: null,
      shortstorytitle: '',
      shortstorycontent: '',
      shortstoryphoto: '',
    });
    setImagePreview(''); // Clear the image preview
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setStory({ ...story, [name]: value });

    // Update the image preview when the shortstoryphoto input changes
    if (name === 'shortstoryphoto') {
      setImagePreview(value);
    }
  };

  return (
    <div className="story-container1">
      <div className="story-list">
        <h2>Short Story List</h2>
        <table>
          <thead>
            <tr>
              <th>Story Title</th>
              <th>Content</th>
              <th>Story Photo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stories.map((s) => (
              <tr key={s.shortstoryid}>
                <td>
                  {isEditing && story.shortstoryid === s.shortstoryid ? (
                    <input
                      type="text"
                      name="shortstorytitle"
                      value={story.shortstorytitle}
                      onChange={handleFieldChange}
                    />
                  ) : (
                    s.shortstorytitle
                  )}
                </td>
                <td>
                  {isEditing && story.shortstoryid === s.shortstoryid ? (
                    <textarea
                      name="shortstorycontent"
                      value={story.shortstorycontent}
                      style={{ width: '300px', height: '500px' }}
                      onChange={handleFieldChange}
                    ></textarea>
                  ) : (
                    s.shortstorycontent
                  )}
                </td>
                <td>
                  {isEditing && story.shortstoryid === s.shortstoryid ? (
                    <>
                      <input
                        type="text"
                        name="shortstoryphoto"
                        placeholder="Story Photo URL"
                        value={story.shortstoryphoto}
                        onChange={handleFieldChange}
                      />
                      {story.shortstoryphoto && (
                        <img
                          src={story.shortstoryphoto}
                          alt="Story Photo"
                          width="100"
                          height="100"
                        />
                      )}
                    </>
                  ) : (
                    <img
                      src={s.shortstoryphoto}
                      alt="Story Photo"
                      width="200"
                      height="150"
                    />
                  )}
                </td>
                <td>
                  {isEditing && story.shortstoryid === s.shortstoryid ? (
                    <>
                      <div className="yei">
                        <button className="edbb" onClick={handleUpdate}>Update</button>
                        <button className="ddb" onClick={() => setIsEditing(false)}>Cancel</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="yei">
                        <button className="edb" onClick={() => handleEdit(s)}>Edit</button>
                        <button className="ddb" onClick={() => handleDelete(s.shortstoryid)}>Delete</button>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="create-story">
        <h2>Create Short Story</h2>
        <input
          type="text"
          name="shortstorytitle"
          placeholder="Title"
          value={story.shortstorytitle}
          onChange={handleFieldChange}
        />
        {errors.shortstorytitle && (
          <div className="error-message">{errors.shortstorytitle}</div>
        )}

        <textarea
          name="shortstorycontent"
          placeholder="Content"
          value={story.shortstorycontent}
          onChange={handleFieldChange}
        />
        {errors.shortstorycontent && (
          <div className="error-message">{errors.shortstorycontent}</div>
        )}

        <input
          type="text"
          name="shortstoryphoto"
          placeholder="Story Photo URL"
          value={story.shortstoryphoto}
          onChange={handleFieldChange}
        />
        {errors.shortstoryphoto && (
          <div className="error-message">{errors.shortstoryphoto}</div>
        )}

        {imagePreview && (
          <img
            src={imagePreview}
            alt="Story Photo Preview"
            width="100"
            height="100"
          />
        )}
        <button onClick={handleCreate}>Create</button>
      </div>
    </div>
  );
}

export default ShortStoryPage;
