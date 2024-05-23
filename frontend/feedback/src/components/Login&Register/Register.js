// Registration page 

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';

function Register() {
  // show or hide button function
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
// both required and show hide btn 
  const handlePasswordChange =(prop) => (event) => {
    setPassword(event.target.value);
    setValues({
      ...values,
      [prop]: event.target.value,
    });
  };
  // Required functions and formalities

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');         
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const navigate = useNavigate();
  

  const handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.username.value);
    if (!e.target.username.value) {
      alert("Please enter a username");
    }else if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (!e.target.confirmPassword.value){
        alert("Please confirm password")
    } else if (e.target.password.value !== e.target.confirmPassword.value){
      alert("Passwords do not match!");
    } else if (!checked){
      alert("Please tick the checkbox")
    } else if (
     e.target.username.value === "Someone123" &&
     e.target.email.value === "me@example.com" &&
     e.target.password.value === "123456" &&
     e.target.confirmPassword.value === e.target.password.value 
    ){
      alert("Successfully registered");
      // Redirect to dashboard page
      navigate('/Dashboard');
    }else {
      console.log('Form submitted:', { username, email, password, confirmPassword });
    }
  };

    return (
      <div className="container1">
        <h1>Registration
        <hr/>
        </h1>
       {/* registeration form */}
       <form onSubmit={handleSubmit} className="register-form">
          <input className="input-grp" name='username' type="text" placeholder="Enter your username" value={username} onChange={(event) => setUsername(event.target.value)} />
                  
          <input className="input-grp" name='email' type="email" placeholder="Enter your email" value={email} onChange={(event) => setEmail(event.target.value)} />
    
          <input className="input-grp" name='password' type= {values.showPassword ? "text" : "password"} placeholder="Create password" value={values.password} 
          onChange={handlePasswordChange("password")} />
          <p onClick={ handleClickShowPassword} onMouseDown={handleMouseDownPassword}>  
                 {values.showPassword ? "Hide" : "Show"}
          </p>
 
          <input className="input-grp" name='confirmPassword' type="password" placeholder="Confirm password"  value={confirmPassword} onChange={(event) => setConfirmPassword(event.target.value)}  />
         <br/>
         {/* formalities and btns */}

          <input type="checkbox" name="agree" value={checked} className="checkbox" checked={checked} onChange={(event) => setChecked(!checked)} />
          <label className='termsLine'> I accept all <Link to="/MainForm" className='link'>  terms & conditions</Link></label>
        
          <button className="submit_btn" type="submit">Register Now</button>
        
        </form>
        <div className='login_link'>Already have an account? <Link to="/" className='link'> Login now</Link></div>
      </div>
    )
}

export default Register;




