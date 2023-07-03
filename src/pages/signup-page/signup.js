import React, { useState,useContext } from 'react';
import app from '../../firebase/base.js';
import {Footer} from '../../component/footer.js';
import './signup.css';
import { UserContext } from '../../uitls/UserContext.js';
import Navbar2 from '../../component/Nav2.js';
import Cookies from "js-cookie";
import logo from '../../assets/logo1.png'
import { ToastContainer, toast } from 'react-toastify';
import Loader from '../../component/Loader.js';

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  const { userId, setUserId } = useContext(UserContext);
  const [loading, setLoading] = useState(false)


  const showToastNotification = (message) => {
    toast.error(message,{
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }); 
  };

  const handleSignUp = (event) => {
    setLoading(true);
    event.preventDefault();
    app
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((userInfo) => {
        console.log("Sign up successful:", userInfo);
        setUserId(userInfo.user.uid);
        console.log("this is current user uid", userId);
        Cookies.set("userID", userInfo.user.uid, { expires: 1 / 24 });
        console.log("this is cookie ", userInfo.user.uid);

        app.firestore().collection("users").doc(userInfo.user.uid).set({
          email: email,
          number: number,
        }).then(() => {
          setLoading(false)
          localStorage.setItem('toastMessage', 'Sign Up  Successful!');
          window.location.href = "/"
        })
          .catch((error) => {
            setLoading(false)
            console.error("Error writing document: ", error);
            showToastNotification(error);
          });

        console.log ("this is current user uid", userInfo.user.uid);
        console.log("Redirecting to homepage...");
      })
      .catch((error) => {
        setLoading(false)
        showToastNotification('Please enter details Correctly and Try again !');
      });
  };



  


    return (
      <div id="background" className="gradient__bg">
        {loading ? (<div className='loaderContainer'><Loader /></div>) 
        : (
          <>
            <ToastContainer/>
            <Navbar2/>
            <div className="main_div">
              <div className="signup-container">
                  <a href='/'>
                    <img className='logo' src={logo}  alt=""></img>
                  </a>
                <form className='signup-form' onSubmit={handleSignUp}>
                  <input className="input-email" name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                  <input className="input-password" name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <input className="input-text " value={number} name="number" type="text" placeholder="Number" onChange={(e) => setNumber(e.target.value)} />
                  <button className="signup_submit " type="submit">Sign Up</button>
                  <p >Already have an account? <a href="/login" className="cursor-pointer">Log In</a></p>
                </form>
              </div>
            </div>
            <Footer />
          </>
      )}
      </div>
    );
}


export default Signup;