// Route file

import React from 'react';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './components/Login&Register/Login';
import Register from './components/Login&Register/Register';
import MainForm from './components/feedbackForm/MainFeedback';
import Dashboard from './components/Dashboard/Dashboard';
import ForgotPassword from './components/Login&Register/forgotPassword';


function RoutesComp(){

  return (
      <div className='Route-Container'>
        <Router>
          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route path="/Register" element={<Register/>}></Route>
            <Route path="/MainForm" element={<MainForm/>}></Route>
            <Route path="/Dashboard" element={<Dashboard/>}></Route>
            <Route path="/ForgotPassword" element={<ForgotPassword/>}></Route> 
          </Routes>
        </Router>
       
      </div>
  )
}

export default RoutesComp