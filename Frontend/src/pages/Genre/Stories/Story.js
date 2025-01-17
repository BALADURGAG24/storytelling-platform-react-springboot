    import React, { useState, useEffect } from 'react';
    import './Stories.css';
    import { Link, useParams } from 'react-router-dom';
    import axios from 'axios';
    import StarRating from './StarRating';
    import { convertFromRaw, EditorState } from 'draft-js';
    import { Editor } from 'draft-js';
    import base from '../../../redux/store';

    function Story() {
      const [hisStories, setHisStories] = useState([]);
      const [userRating, setUserRating] = useState(0);
      const token = localStorage.getItem('token');
      const {id} = useParams();
      useEffect(() => {

        const axiosInstance = axios.create({
          baseURL: 'http://localhost:8080/api',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        });

        axiosInstance
          .get(`/story/byGenre/${id}`)
          .then((response) => {
            setHisStories(
              response.data.map((story) => ({
                ...story,
                likeCount: 0,
                dislikeCount: 0,
                isReading: false,
              }))
            );
          })
          .catch((error) => {
            console.error('Error Fetching Stories:', error);
          });
      }, [token,id]);
      
      const handleReadStory = (story) => {
        setHisStories((prevStories) => {
          const updatedStories = prevStories.map((s) => {
            if (s.storyid === story.storyid) {
              const newIsReading = !s.isReading;
              if (newIsReading) {
                const contentState = convertFromRaw(JSON.parse(s.content));
                const plainText = contentState.getPlainText();
                const speech = new SpeechSynthesisUtterance(plainText);
                window.speechSynthesis.speak(speech);
              } else {
                window.speechSynthesis.cancel();
              }
              return { ...s, isReading: newIsReading };
            }
            return { ...s, isReading: false };
          });
          return updatedStories;
        });
      };

      const handleLike = (story) => {
        setHisStories((prevStories) => {
          const updatedStories = prevStories.map((s) => {
            if (s.storyid === story.storyid) {
              return { ...s, likeCount: s.likeCount + 1 };
            }
            return s;
          });
          return updatedStories;
        });
      };

      const handleDislike = (story) => {
        setHisStories((prevStories) => {
          const updatedStories = prevStories.map((s) => {
            if (s.storyid === story.storyid) {
              return { ...s, dislikeCount: s.dislikeCount + 1 };
            }
            return s;
          });
          return updatedStories;
        });
      };

      const handleRatingChange = (newRating) => {
        setUserRating(newRating);
      };

      useEffect(() => {
        return () => {
          window.speechSynthesis.cancel();
        };
      }, []);

      const renderEditorContent = (content) => {
        try {
          const contentState = convertFromRaw(JSON.parse(content));
          const editorState = EditorState.createWithContent(contentState);
          return (
            <Editor editorState={editorState} readOnly={true} />
          );
        } catch (error) {
          console.error('Error parsing content:', error);
          return <div>Error rendering content.</div>;
        }
      };
      return (
        <div>
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
      <div className="rr">
        <div className="cr">
          <img className="logo" src="https://cdn-icons-png.flaticon.com/512/7153/7153150.png" alt="Logo" />
          <p>{base.getState().email.email}</p>
        </div>
      </div>
    </div>
    <div className="story-container">
      <br />
      <h1 className="story-title">{id}</h1>
      {hisStories.map((story) => ( 
        <div key={story.storyid}>
          <h2 className="story-title">{story.storytitle}</h2>
          <h4 className="story-author">{story.author}</h4>
          <img src={story.storyphoto} alt="Story" className="story-image" />
          <h5 className="story-content">{renderEditorContent(story.content)}</h5>
          <div>
            <button onClick={() => handleLike(story)} className="like-button">
              Like
            </button>
            <span className="like-count">{story.likeCount} Likes</span>
            <button onClick={() => handleDislike(story)} className="dislike-button">
              Dislike
            </button>
            <span className="dislike-count">{story.dislikeCount} Dislikes</span>
          </div>
          <div className="rating-container">
            <span className='t7'>Rating</span>
            <StarRating
              initialRating={userRating}
              onRatingChange={handleRatingChange}
            />
            <br /><br />
          </div>
          <button onClick={() => handleReadStory(story)}>
            {story.isReading ? 'Stop Reading' : 'Read Story'}
          </button>
          <br /><br />
          <hr></hr>
        </div>
      ))}
      <div>
      </div>
    </div>
    <div className="footer">
      <Link to="/terms">
        <div className="hlo">Terms & conditions</div>
      </Link>
      <Link to="/policies">
        <div className="bro">Privacy Policy</div>
      </Link>
      <a href="https://www.legalzoom.com/articles/the-term-all-rights-reserved-explained">
        <div className="cry">Copyright © 2023. All rights reserved</div>
      </a>
    </div>
    </div>
      );
    }

    export default Story;
