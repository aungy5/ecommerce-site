import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';
//import { ApolloProvider } from '@apollo/client'

const titleStyle = {
    backgroundColor: '#66ccff',
    padding: '20px'
  }
  
  const linkStyle = {
    color: '#66ccff',
  }
  
  const padding = {
    padding: '10px'
  }
  
  const errorStyle = {
    backgroundColor: 'black',
    color: '#66ccff'
  }

function Login(props) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);
  
    const handleSubmit = async (event) => {
      event.preventDefault();
      try {
        const mutationResponse = await login({
          variables: { email: formState.email, password: formState.password },
        });
        const token = mutationResponse.data.login.token;
        Auth.login(token);
      } catch (e) {
        console.log(e);
      }
    };
  
    const handleChange = (event) => {
      const { name, value } = event.target;
      setFormState({
        ...formState,
        [name]: value,
      });
    };

    return (
        <div className="login" style={padding}>
            <h1 style={titleStyle}>Login</h1>
            <br/>
            <Link to="/signup">
            <button className="btn btn-dark" style={linkStyle} onSubmit={handleSubmit}>Go to Signup Page</button>
            </Link>
        <form>
          <div className="form-group" style={padding}>
            <label htmlFor="email">EMAIL</label>
            <textarea name="email" id="email" placeholder="Enter your email here..." className="form-control" onChange={handleChange}></textarea>
          </div>
          <div className="form-group" style={padding}>
            <label htmlFor="password">PASSWORD</label>
            <textarea name="password" id="password" placeholder="Enter your password here..." className="form-control" onChange={handleChange}></textarea>
          </div>

          {error ? (
            <div style={errorStyle}>
              <h3>Form Errors:</h3>
              <p className="error">The user credentials provided are incorrect, please try again.</p>
            </div>
          ) : null}

          <button className="btn btn-dark" style={linkStyle} onSubmit={handleSubmit}>Login</button>
        </form>
        </div>
    )
}

export default Login;