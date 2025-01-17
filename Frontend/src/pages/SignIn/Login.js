import React, { forwardRef,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import store from '../../redux/store';
import { setEmail } from '../../redux/reducer';

const Login = forwardRef(({}, ref) => {
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
          console.log('Login success');
          const token =window.localStorage.setItem('token',response.data.token);
         const t= window.localStorage.getItem('token')
          console.log(t);
          localStorage.setItem('token',response.data.token);
        
       
          store.dispatch(setEmail(email)); 
          navigate('/Home');
        })
        .catch((error) => {
          console.error('Error logging in:', error);
          setErrorMessage('Incorrect email or password. Please try again.');
        });
    } else if (buttonClicked.name === 'admin') {
     
      navigate('/admin');
    }
  }

  return (
    <div className="bg1">
      <div className="container66">
        <form onSubmit={onSubmit}>
          <div className="head">
            <label>Sign In</label>
          </div>

          <p1>
            Don't have an account? <Link to="/Create"> Signup</Link>
          </p1>
          <br></br>
          <br></br>
          <br></br>
          <div className="field1">Email:</div>
          <input className="input-field" type="text" placeholder="Enter Email"></input>
          <br></br>
          <br></br>
          <div className="field2">Password:</div>
          <input className="input-field2" type="password" placeholder="Enter password"></input>
          <br></br>
          <br></br>
          <button type="submit" name="signIn" className="bt">
            <div className="bb">Sign in</div>
          </button>
          <br></br>
          <div className="wt">
            <button type="submit" name="admin" className="bt">
              <div className="bb2">Admin</div>
            </button>
          </div>
          <br></br>
          {errorMessage && <div className="error-message">{errorMessage}</div>}
        </form>
      </div>
    </div>
  );
});

export default Login;
