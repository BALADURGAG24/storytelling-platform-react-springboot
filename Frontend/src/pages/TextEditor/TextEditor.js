import React, { useState } from "react";
import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, ContentState } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import axios from "axios";
import './TextEditor.css';
import base from '../../redux/store'
import { Link, useNavigate } from "react-router-dom";

function TextEditor() {
  const navigate = useNavigate();

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [storyImageURL, setStoryImageURL] = useState("");
  const [storytitle, setStoryTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [genre, setGenre] = useState("");
  const [errorMessage, setErrorMessage] = useState("");


  const [customGenre, setCustomGenre] = useState(""); // New state variable for custom genre

  const onEditorStateChange = (editorState) => {
    setEditorState(editorState);
  };


  const handleImageURLChange = (e) => {
    setStoryImageURL(e.target.value);
  };

  const onSaveContent = () => {
    const contentState = editorState.getCurrentContent();
    const content = JSON.stringify(convertToRaw(contentState));

    const token = localStorage.getItem('token');

    const postData = {
      storytitle,
      content,
      storyphoto: storyImageURL,
      author,
      genre,
    };

    axios
      .post(
        "http://localhost:8080/api/story/createstory",
        postData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);

        setEditorState(EditorState.createEmpty());
        setStoryImageURL("");
        setStoryTitle("");
        setAuthor("");
        setGenre("");

        if (genre.toLowerCase() === "horror") {
          navigate('/genre/horror');
        } else if (genre.toLowerCase() === "crime") {
          navigate("/genre/crime");
        } else if (genre.toLowerCase() === "love") {
          navigate("/genre/love");
        } else if (genre.toLowerCase() === "lifestyle") {
          navigate("/genre/lifestyle");
        } else if (genre.toLowerCase() === "comedy") {
          navigate("/genre/comedy");
        } else if (genre.toLowerCase() === "sports") {
          navigate("/genre/sports");
        } else if (genre.toLowerCase() === "kids") {
          navigate("/genre/kids");
        } else if (genre.toLowerCase() === "history") {
          navigate("/genre/history");
        } else if (genre.toLowerCase() === "mythology") {
          navigate("/genre/mythology");
        }
      })
      .catch((error) => {
        console.error("Error saving content:", error);
        setErrorMessage("Error saving content. Please try again.");
      });
  };

  return (
    <div>
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
        <div className="dropdown-content">
        </div>
        </div>
        <div className='cr'> <img className='logo' src="ic2.png"></img>
        <p>{base.getState().email.email}</p>
          </div>
        </div>
      </div>
      <br></br> <br></br><br></br> <br></br>
      <div className="form-container">
  <form>
    <div className="ck">
      <input
        className="ck11"
        type="text"
        name="storytitle"
        value={storytitle}
        onChange={(e) => setStoryTitle(e.target.value)}
        placeholder="Story Title"
      /><br></br><br></br>
      <input
        className="ck1"
        type text
        name="author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        placeholder="Author"
      /><br></br><br></br>
      <input
        className="ck1"
        type="text"
        name="genre"
        value={genre}
        onChange={(e) => setGenre(e.target.value)}
        placeholder="Genre"
      />
    </div>
  </form>
</div>
      <div className="editor">
        <div>
          <Editor
            editorState={editorState}
            onEditorStateChange={onEditorStateChange}
          />
        </div>
        <div>
          <input
            className="rdw-image-modal-url-input"
            name="storyImageURL"
            value={storyImageURL}
            onChange={handleImageURLChange}
            placeholder="Enter Image URL"
          />
          <button className="bts" onClick={onSaveContent}>Save Content</button>
        </div>
        {errorMessage && <div className="error-message">{errorMessage}</div>}
        <br></br><br></br><br></br><br></br>
      </div>
      <div>
      </div>
      <div className="footer">
        <Link to="/terms">
          <div className="hlo">Terms & Conditions</div>
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
}

export default TextEditor;