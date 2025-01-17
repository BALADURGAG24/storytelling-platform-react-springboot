import React, { forwardRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import './adminlogin.css';
import store from '../../redux/store';
import { setEmail } from '../../redux/reducer';

const Admin = forwardRef(({}, ref) => {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);

  function onSubmit(event) {
    event.preventDefault();
    const email = event.target[0].value;
    const password = event.target[1].value;
  

    const buttonClicked = event.nativeEvent.submitter;

    if (buttonClicked.name === 'signIn') {
      // Check if fields are empty for regular sign-in
      if (!email || !password) {
        setErrorMessage('Please enter both email and password.');
        return;
      }

      const userData = {
        email: email,
        password: password,
        
      };

      axios
        .post('http://localhost:8080/api/v1/auth/login', userData)
        .then((response) => {
          const role=response.data.role;

          if (role !== 'ADMIN') {
            setErrorMessage('Only ADMINs are allowed to log in.'); // Display an error message
            return;
          }

          console.log('Login success');
          const token = response.data.token;
          localStorage.setItem('token', token);
          console.log(token);

          // Handle successful login, e.g., store user data in Redux
          store.dispatch(setEmail(email));
          navigate('/dbover');
        })
        .catch((error) => {
          console.error('Error logging in:', error);
          setErrorMessage('Incorrect email or password. Please try again.');
        });
    }
  }

  return (
    <div className='bg1a'>
      <div className='containera'>
        <form onSubmit={onSubmit}>
          <div className='heada'>
            <label>Sign In</label>
          </div>
          <br></br>
         
          <br></br>
        
          <div className='field1a'>Email:</div>
          <input
            className='input-fielda'
            type='text'
            placeholder='Enter Email'
          ></input>
          <br></br>
          <br></br>
          <div className='field2a'>Password:</div>
          <input
            className='input-field2a'
            type='password'
            placeholder='Enter password'
          ></input>
          <br></br>
          <br></br>
          <button type='submit'  className='bt' name='signIn'>
            <div className='bb'>Sign in</div>
          </button>
          <br></br>
        
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
});

export default Admin;