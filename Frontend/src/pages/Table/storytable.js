import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './storyPage.css';

function StoryPage() {
  const [stories, setStories] = useState([]);
  const [story, setStory] = useState({
    storyid: null,
    storytitle: '',
    content: '',
    author: '',
    genre: '',
    storyphoto: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showEmptyFieldPopup, setShowEmptyFieldPopup] = useState(false); // Added state for popup
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Fetch the list of stories when the component mounts
    fetchStories();
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

  const handleCreate = () => {
    // Validation: Check if required fields are not empty
    if (!story.storytitle || !story.content || !story.author || !story.genre) {
      setShowEmptyFieldPopup(true); // Show popup if fields are empty
      return;
    }

    // Create a new story
    axios
      .post('http://localhost:8080/api/story/createstory', story, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        fetchStories(); // Refresh the list of stories
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
    // Update the selected story
    axios
      .put(`http://localhost:8080/api/story/update/${story.storyid}`, story, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      })
      .then(() => {
        fetchStories(); // Refresh the list of stories
        clearForm();
        setIsEditing(false);
      })
      .catch((error) => console.error(error));
  };

  const handleDelete = (storyid) => {
    // Delete a story
    axios
      .delete(`http://localhost:8080/api/story/${storyid}`, {
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
      storyid: null,
      storytitle: '',
      content: '',
      author: '',
      genre: '',
      storyphoto: '',
    });
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setStory({ ...story, [name]: value });
  };

  const renderContentAsPlainText = (content) => {
    try {
      const contentObj = JSON.parse(content);
      let plainText = '';
      if (contentObj && contentObj.blocks) {
        plainText = contentObj.blocks.map((block) => block.text).join('\n');
      }
      return plainText;
    } catch (error) {
      console.error("Error parsing content:", error);
      return "Error rendering content.";
    }
  }

  const handleImagePreview = async () => {
    try {
      if (story.storyphoto) {
        const response = await axios.get(story.storyphoto, {
          responseType: 'blob',
        });

        if (response.data) {
          const blob = new Blob([response.data], { type: response.headers['content-type'] });
          const imageUrl = URL.createObjectURL(blob);

          // Set the storyphoto with the preview URL
          setStory({ ...story, storyphoto: imageUrl });
        }
      }
    } catch (error) {
      console.error("Error loading image:", error);
    }
  }

  return (
    <div className="story-container1">
      <div className="story-list">
        <h2>Story List</h2>
        <div className="create-story">
          <input
            type="text"
            placeholder="Story Title"
            name="storytitle"
            value={story.storytitle}
            onChange={handleFieldChange}
          />
          <input
            type="text"
            placeholder="Author"
            name="author"
            value={story.author}
            onChange={handleFieldChange}
          />
          <input
            type="text"
            placeholder="Genre"
            name="genre"
            value={story.genre}
            onChange={handleFieldChange}
          />
          <input
            type="text"
            placeholder="Story Photo URL"
            name="storyphoto"
            value={story.storyphoto}
            onChange={handleFieldChange}
          />
          {story.storyphoto && (
            <img
              src={story.storyphoto}
              alt="Story Preview"
              className="image-preview"
            />
          )}
          <button onClick={handleImagePreview}>Preview Image</button>
          <textarea
            placeholder="Content"
            name="content"
            value={story.content}
            style={{ width: '300px', height: '50px' }}
            onChange={handleFieldChange}
          />
          <button onClick={handleCreate}>Create</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Story Title</th>
              <th>Author</th>
              <th>Genre</th>
              <th>Content</th>
              <th>Story Photo</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {stories.map((s) => (
              <tr key={s.storyid}>
                <td>
                  {isEditing && story.storyid === s.storyid ? (
                    <input
                      type="text"
                      name="storytitle"
                      value={story.storytitle}
                      onChange={handleFieldChange}
                    />
                  ) : (
                    s.storytitle
                  )}
                </td>
                <td>
                  {isEditing && story.storyid === s.storyid ? (
                    <input
                      type="text"
                      name="author"
                      value={story.author}
                      onChange={handleFieldChange}
                    />
                  ) : (
                    s.author
                  )}
                </td>
                <td>
                  {isEditing && story.storyid === s.storyid ? (
                    <input
                      type="text"
                      name="genre"
                      value={story.genre}
                      onChange={handleFieldChange}
                    />
                  ) : (
                    s.genre
                  )}
                </td>
                <td>
                  {isEditing && story.storyid === s.storyid ? (
                    <textarea
                      name="content"
                      value={story.content}
                      style={{ width: '300px', height: '500px' }}
                      onChange={handleFieldChange}
                    ></textarea>
                  ) : (
                    renderContentAsPlainText(s.content)
                  )}
                </td>
                <td>
                  {isEditing && story.storyid === s.storyid ? (
                    <>
                      <input
                        type="text"
                        name="storyphoto"
                        placeholder="Story Photo URL"
                        value={story.storyphoto}
                        onChange={handleFieldChange}
                      />
                      {story.storyphoto && (
                        <img
                          src={story.storyphoto}
                          alt="Story Photo"
                          width="100"
                          height="100"
                        />
                      )}
                    </>
                  ) : (
                    <img
                      src={s.storyphoto}
                      alt="Story Photo"
                      width="200"
                      height="150"
                    />
                  )}
                </td>
                <td>
                  {isEditing && story.storyid === s.storyid ? (
                    <>
                      <div className='yei'>
                        <button className='edbb' onClick={handleUpdate}>Update</button>
                        <button className='ddb' onClick={() => setIsEditing(false)}>Cancel</button>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className='yei'>
                        <button className="edb" onClick={() => handleEdit(s)}>Edit</button>
                        <button className="ddb" onClick={() => handleDelete(s.storyid)}>Delete</button>
                      </div>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {showEmptyFieldPopup && (
          <div className="empty-field-popup">
            Please fill in all required fields.
          </div>
        )}
      </div>
    </div>
  );
}

export default StoryPage;
