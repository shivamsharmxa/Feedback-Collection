import React, {useState} from 'react';
import './Dashboard.css';
import ProfileCard from './ProfileCard';



// for logout function
import { useNavigate } from 'react-router-dom';

// for routing
import { Link } from 'react-router-dom';

// icons
import menu_icon from './all icons/menu_icon.png';
import search_icon from './all icons/search_icon.png';
import bell_icon from './all icons/bell_icon.svg';
import user_icon from './all icons/user_icon.png';
import view_icon from './all icons/view_icon.png';
import suggestion_icon from './all icons/suggestion_icon.png';
import comment_icon from './all icons/comment_icon.png';
import tick_icon from './all icons/tick_icon.png';
import dashboard_icon from './all icons/dashboard_icon.png';
import logout_icon from './all icons/logout_icon.png';

function Dashboard() {

    
    // for sidebar icon clickable

    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
       setIsNavOpen(!isNavOpen);
    }; 

    // for logout function
    const navigate = useNavigate();

    const handleLogout = () => {
      localStorage.removeItem('authToken');
      navigate('/');
    };
    
  return (
    <div className="Dashcontainer" >
        {/* head section */}
      <div className='Header'>
        <div className="logosec"> 
            <div className="logo">Dashboard
            <hr/>
            </div> 
            <img onClick={toggleNav} src= {menu_icon} className="icn baricn" alt="menu-icon"/> 
        </div> 
  
        <div className="searchbar"> 
            <input type="text" placeholder="Search"/> 
            <div className="searchbtn"> 
                <img src= {search_icon}  className="icn searchicn"  alt="search-icon"/> 
             </div> 
        </div> 
  
        <div className="message"> 
            <div className="circle"></div> 
            <img src=  {bell_icon} className="icn" alt=""/> 

            <div className="dp"> 
              <img src= {user_icon} className="dpicn" alt="dp"/> 
            </div> 
        </div> 
        
      </div>
    {/* body section */}
     <div className="main-container"> 
     {/* sidebar section */}
        <div className={`navcontainer ${isNavOpen ? 'navopen' : 'navclose'}`}> 
            <nav className="nav" > 
                <div className="nav-upper-options">

                    <Link to="/Dashboard" className="Link">
                    <div className="nav-option option1"> 
                        <img src= {dashboard_icon} className="nav-img"  alt="dashboard"/> 
                        <h3> Dashboard</h3> 
                    </div> 
                    </Link>
                     
                    <ProfileCard/>
  
                    <Link to="/MainForm" className="Link">
                    <div className="option2 nav-option"> 
                        <img src={comment_icon}  className="nav-img" alt="articles"/> 
                        <h3>Feedback </h3>                    
                    </div>
                    </Link> 
                    
                    <Link to="/MainForm" className="Link">
                    <div className="nav-option option3"> 
                        <img src={suggestion_icon} className="nav-img"  alt="report"/> 
                        <h3> Suggestions</h3> 
                    </div> 
                    </Link>

                    <div className="nav-option logout" > 
                      <img src= {bell_icon} className="nav-img"  alt="logout"/>  
                        <h3>Notifications</h3> 
                    </div>
                    
                    <div className="nav-option logout"  onClick={handleLogout} > 
                      <img src= {logout_icon} className="nav-img"  alt="logout"/>  
                        <h3>Logout</h3> 
                    </div>

                </div> 
            </nav> 
        </div> 
        {/* main section */}
        <div className="main"> 
  
            <div className="searchbar2"> 
                <input type="text" 
                       name="text" placeholder="Search"/> 
                <div className="searchbtn"> 
                  <img src= {search_icon} className="icn srchicn"  alt="search-button"/> 
                  </div> 
            </div> 
  
            <div className="box-container"> 
  
                <div className="box box1"> 
                    <div className="text"> 
                        <h2 className="topic-heading">60.5k</h2> 
                        <h2 className="topic">Feedback Views</h2> 
                    </div> 
  
                    <img src= {view_icon} alt="Views"/> 
                </div> 
  
                <div className="box box2"> 
                    <div className="text"> 
                        <h2 className="topic-heading">150</h2> 
                        <h2 className="topic">Suggestions</h2> 
                    </div> 
  
                    <img src={suggestion_icon}  alt="likes"/> 
                </div> 
  
                <div className="box box3"> 
                    <div className="text"> 
                        <h2 className="topic-heading">320</h2> 
                        <h2 className="topic">Comments</h2> 
                    </div> 
  
                    <img src= {comment_icon}  alt="comments"/> 
                </div> 
  
                <div className="box box4"> 
                    <div className="text"> 
                        <h2 className="topic-heading">70</h2> 
                        <h2 className="topic">Subscriber</h2> 
                    </div> 
  
                    <img src= {tick_icon} alt="published"/> 
                </div> 
            </div> 
  
            {/*  Data Container */}
            <div className="report-container"> 
                <div className="report-header"> 
                    <h1 className="recent-Articles">Recent Feedbacks</h1> 
                    <button className="view">View All</button> 
                </div> 
  
                <div className="report-body"> 
                    <div className="report-topic-heading"> 
                        <h3 className="t-op">Username</h3> 
                        <h3 className="t-op">Email</h3> 
                        <h3 className="t-op">Rating</h3> 
                        <h3 className="t-op">Profile</h3> 
                    </div> 
  
                    <div className="items"> 
                        <div className="item1"> 
                            <h3 className="t-op-nextlvl">Article 73</h3> 
                            <h3 className="t-op-nextlvl">2.9k</h3> 
                            <h3 className="t-op-nextlvl">210</h3> 
                            <h3 className="t-op-nextlvl label-tag">Published</h3> 
                        </div> 
  
                        <div className="item1"> 
                            <h3 className="t-op-nextlvl">Article 72</h3> 
                            <h3 className="t-op-nextlvl">1.5k</h3> 
                            <h3 className="t-op-nextlvl">360</h3> 
                            <h3 className="t-op-nextlvl label-tag">Published</h3> 
                        </div> 
  
                        <div className="item1"> 
                            <h3 className="t-op-nextlvl">Article 71</h3> 
                            <h3 className="t-op-nextlvl">1.1k</h3> 
                            <h3 className="t-op-nextlvl">150</h3> 
                            <h3 className="t-op-nextlvl label-tag">Published</h3> 
                        </div> 
                        
                        <div className="item1"> 
                            <h3 className="t-op-nextlvl">Article 71</h3> 
                            <h3 className="t-op-nextlvl">1.1k</h3> 
                            <h3 className="t-op-nextlvl">150</h3> 
                            <h3 className="t-op-nextlvl label-tag">Published</h3> 
                        </div> 
                        
                        <div className="item1"> 
                            <h3 className="t-op-nextlvl">Article 71</h3> 
                            <h3 className="t-op-nextlvl">1.1k</h3> 
                            <h3 className="t-op-nextlvl">150</h3> 
                            <h3 className="t-op-nextlvl label-tag">Published</h3> 
                        </div> 
                        
                        <div className="item1"> 
                            <h3 className="t-op-nextlvl">Article 71</h3> 
                            <h3 className="t-op-nextlvl">1.1k</h3> 
                            <h3 className="t-op-nextlvl">150</h3> 
                            <h3 className="t-op-nextlvl label-tag">Published</h3> 
                        </div> 
  
                    </div> 
                </div> 
            </div> 
        </div> 
     </div>
    </div>
  );
}

export default Dashboard;