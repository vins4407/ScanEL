import React  from 'react';
import { useNavigate } from 'react-router-dom';
import '../style/navbar.css';
import logo from '../assets/logo1.png';
import app from '../firebase/base';
import Cookies from 'js-cookie';
 
const Navbar = () => {
 
  var currentUser = Cookies.get("userID");
  const navigate = useNavigate(); 

  return (
    <div className="scanEL__navbar">
      <div className="scanEL__navbar-links">
        <a href='/'>
        <div >
        <img className='ScannelLogo' src={logo} alt=""></img>
        </div>
        </a>
     
      </div>
      
      <div className="scanEL__navbar-sign"> 
   
        {currentUser ? (<div className='auth_buttons'>
              {window.location === '/profile' ? (
                <a href='/'>
                <button className='signin_btn'>Home</button>
              </a>
             
              ) : (
                <a href='/profile'>
                <button className='signin_btn'>Profile</button>
               </a>
                
              )}
              
              <button className='signin_btn' onClick={() => {
                  app.auth().signOut();
                  Cookies.remove('userID');
                  navigate("/");
                }}>Logout</button>
              
              </div>
              ) 
          : (<div className='auth_buttons'>
           <a href='/login' ><button className='signin_btn' >Sign In </button></a>
           <a href='/signup'><button className='signin_btn'>Sign up</button></a>
           </div>
         )}
         </div>
    
    </div>
  );
};

export default Navbar;
