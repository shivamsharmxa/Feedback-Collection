import React from 'react';
import Popup from 'reactjs-popup';
import './ProfileCard.css';
import user_icon from './all icons/user_icon.png';

const ProfileCard = () => {
  return (
    <div>

        <Popup trigger={
                         
            <div className="nav-option option5"> 
                <img src={user_icon} className="nav-img" alt="blog"/> 
                <h3> Profile</h3> 
            </div>
   
        } 
        modal nested>
        {
            close => (
                <div className='modal'>
                  
                    <div className="card">
                            <div>
                              
                               <h2>Profile
                                <hr/>
                               </h2>
                               <br/>
                               <div className="user_image"><img src={user_icon} alt='img'/></div>    
                               <br/>            
                               <button className="close_btn" onClick={() => close()}>
                                 Close Profile
                               </button>
                            
                            </div>    
   
                            <div className="user_details">
                              <div className="details">
                                     <label>Userame: </label>
                                     <h3>Lovely Singh</h3>
                              </div>

                              <div className="details">
                                     <label>Email: </label>
                                     <h3></h3>
                              </div>

                              <div className="details">     
                                     <label>Total Feedback : </label>
                                     <h3></h3>
                              </div>

                              <div className="details">       
                                     <label>Suggestions : </label>
                                     <h3></h3>
                              </div>

                              <div className="details">
                                     <label>Comments : </label>
                                     <h3></h3>
                              </div>

                              <div className="details">
                                     <label>Compliments : </label>
                                     <h3></h3>
                              </div>

                            </div>         
                   
                    </div>	
                           
                </div>
            )
        }
        </Popup>   
      
    </div>
  )
}

export default ProfileCard
