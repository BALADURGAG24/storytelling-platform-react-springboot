import React, { forwardRef,useState } from 'react';
import './Create.css';
import { Link,useNavigate} from 'react-router-dom';
import store from '../../redux/store';
import { setEmail } from '../../redux/reducer';
import axios from 'axios';

const Create = forwardRef(() => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState('');

  function onSubmit(event) {
    event.preventDefault();
    const username = event.target[0].value;
    const email = event.target[1].value;
    const password = event.target[2].value;

    // Basic form validation
    if (!username || !email || !password) {
      setErrorMessage('Please fill in all fields.');
      return;
    }

    // Password validation: Password must contain at least 8 characters
    if (password.length < 8) {
      setErrorMessage('Password must contain at least 8 characters.');
      return;
    }

    // Email validation: Email must contain '@'
    if (!email.includes('@')) {
      setErrorMessage('Email must contain the "@" symbol.');
      return;
    }

    const userData = {
      name: username,
      email: email,
      password: password,
      role: 'READER',
    };

    axios
      .post('http://localhost:8080/api/v1/auth/register', userData)
      .then((response) => {
        console.log('Success');
        store.dispatch(setEmail(email));
        navigate('/');
      })
      .catch((error) => {
        console.error('Error registering user:', error);
        setErrorMessage('Registration failed. Please try again.');
      });
  }

  return (
    <div className="bg2">
      <div className="container1">
        <form onSubmit={onSubmit}>
          <div className="head">
            <label>Sign up</label>
          </div>

          <p1>
            Already have an account?<Link to="/">Sign In</Link>{' '}
          </p1>
          <br></br>
          <br></br>
          <br></br>
          <div className="field11">Username</div>
          <input className="input-field11" type="text" placeholder="Enter User name"></input>
          <br></br>
          <br></br>

          <div className="field31">Email:</div>
          <input className="input-field31" type="text" placeholder="Enter Mail Id"></input>
          <br></br>
          <br></br>
          <div className="field41">Password:</div>
          <input className="input-field41" type="password" placeholder="Enter password"></input>
          <br></br>
          <br></br>

          {errorMessage && <p className="error-message">{errorMessage}</p>}

          <button className="bt1">
            <div className="bb">Sign up</div>
          </button>
          <br />
          <br />
        </form>
      </div>
    </div>
  );
});

export default Create;
