import React, { useState } from 'react';
import './Login.css';
import mail_img from './assest/purp_icon.png';
import pass_img from './assest/password_icon.png';
import main_img from './assest/main_img.jpg';
import show_icon from './assest/show-icon.png';
import hide_icon from './assest/hide-icon.png';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    showPassword: false,
  });

  const handleInputChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = values;

    if (!email) {
      alert("Email is required");
    } else if (!password) {
      alert("Password is required");
    } else if (email === "me@example.com" && password === "123456") {
      alert("Successfully logged in");
      setValues({ email: '', password: '' });
      navigate('/Dashboard');
    } else {
      alert("Wrong email or password combination");
    }
  };

  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="form_page">
        <h2>Login
        <hr/>
        </h2>
        
        {/* form */}
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="input-group">
            <img src={mail_img} alt="email" />
            <input
              type="email"
              name="email"
              value={values.email}
              onChange={handleInputChange('email')}
              placeholder="Enter your email"
            />
            <hr />
          </div>
          <div className="input-group">
            <img src={pass_img} alt="password" />
            <input
              type={values.showPassword ? "text" : "password"}
              name="password"
              value={values.password}
              onChange={handleInputChange('password')}
              placeholder="Enter your password"
            />
            <hr />
            <label onClick={handleClickShowPassword} onMouseDown={handleMouseDownPassword}>
              {values.showPassword ? (
                <img src={show_icon} alt="show" />
              ) : (
                <img src={hide_icon} alt="hide" />
              )}
            </label>
            <h5>
              <Link to="/ForgotPassword" className="link">
                Forgot password?
              </Link>
            </h5>
          </div>
          <button className="primary" type="submit">
            Login
          </button>
        </form>
        <div className="sign_link">
          Don't have an account?{' '}
          <Link to="/Register" className="link">
            Signup now
          </Link>
        </div>
      </div>

      <div className="sideimg">
        <img src={main_img} alt="main_img" />
        <span className="title">Bill Gates</span>
        <span className="description">
          "We all need people who will give us feedback. That’s how we improve."
        </span>
      </div>
    </div>
  );
}

export default Login;