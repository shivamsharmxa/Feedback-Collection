//  Login page

import React from 'react';
import  './Login.css';
import mail_img from './assest/purp_icon.png';
import pass_img from './assest/password_icon.png';
import main_img from './assest/main_img.jpg';
import show_icon from './assest/show-icon.png';
import hide_icon from './assest/hide-icon.png';
import { Link } from 'react-router-dom';

function Login() {

  // show or hide icon functions
  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleClickShowPassword = () => {
    setValues({
        ...values,
        showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handlePasswordChange = (prop) => (event) => {
    setValues({
        ...values,
        [prop]: event.target.value,
    });
  };

  // required functions
  
  const handleSubmit = e => {
      e.preventDefault();
      console.log(e.target.email.value);
  
      if (!e.target.email.value) {
        alert("Email is required");
      } else if (!e.target.email.value) {
        alert("Valid email is required");
      } else if (!e.target.password.value) {
        alert("Password is required");
      } else if (
        e.target.email.value === "me@example.com" &&
        e.target.password.value === "123456"
      ) {
        alert("Successfully logged in");
        e.target.email.value = "";
        e.target.password.value = "";
      } else {
        alert("Wrong email or password combination");
      }
  };
  
    return (
        <div className='container'>
          <div className="form_page">
             <h2>Login
             <hr/>
             </h2>
             {/* form */}
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="input-group">
                  <img src={mail_img} alt='email'/>
                  <input type="email" name="email" placeholder="Enter your email"/> 
                  <hr/>
              </div>
              <div className="input-group">
                <img src={pass_img} alt='password'/>
                <input type= {values.showPassword ? "text" : "password"} name="password" value={values.password} 
                 onChange=  {handlePasswordChange("password")} placeholder='Enter your password' />
                <hr/> 
                <label onClick={ handleClickShowPassword} onMouseDown={handleMouseDownPassword}>  
                 {values.showPassword ? (<img src={show_icon} alt='show'/>) : (<img src={hide_icon} alt='hide'/>)}
                </label>
                <h5><Link to="/ForgotPassword" className="link" >Forgot password?</Link></h5>
              </div>
                <button className="primary" type='submit'><Link to="/Dashboard" className="link" > Login
                </Link></button>
            </form>   
            <div className='sign_link'>Don't have an account? <Link to="/Register" className="link" > 
             Signup now</Link>
            </div>
          </div>

          <div className='sideimg'>
              <img src={main_img} alt='main_img'/>
              <span className="title">Bill Gates</span>
              <span className="description">
               "We all need people who will give us feedback. That’s how we improve." 
              </span>
          </div>
        </div>
    )
}
  
export default Login;