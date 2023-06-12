import React, { useState,useContext } from 'react';
import { withRouter, Link, useHistory } from 'react-router-dom';
import app from '../../firebase/base.js';
import {Footer} from '../../component/footer.js';
import './signup.css';
import { UserContext } from '../../component/UserContext.js';
import Navbar2 from '../../component/Nav2.js';
import Cookies from "js-cookie";
import logo from '../../assets/logo1.png'

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [number, setNumber] = useState("");
  // const [userId, setUserId] = useState(null);
  const { userId, setUserId } = useContext(UserContext);
  
  const history = useHistory();
  const handleSignUp = (event) => {
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
         console.log("Document successfully written!");
          window.location.href = "/"
        })
          .catch((error) => {
            console.error("Error writing document: ", error);
          });

       
        console.log ("this is current user uid", userInfo.user.uid);
        console.log("Redirecting to homepage...");
      })
      .catch((error) => {
        alert("Sign up error:", error);
      });
  };



  
  const getUserData = async () => {
    const userRef = app.firestore().collection("users").doc(userId);
    const doc = await userRef.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      console.log("Document data:", doc.data());
    }
  };



    return (
        <div id="background" className="gradient__bg">
          <Navbar2/>
          <div className="SignUp">
            <div className="signup-container">
                <div className="scanEL__navbar-links">
                    <a href='/'>
                    <div >
                    <img className='ScannelLogo' src={logo} style={{width:"10vw"}} alt=""></img>
                    </div>
                    </a>
                
                  </div>
              <form className='signup-form' onSubmit={handleSignUp}>
                <input className="input-email" name="email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                {/* <button onClick={getUserData}>test</button> */}
                <input className="input-password" name="password" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input className="input-text " value={number} name="number" type="text" placeholder="Number" onChange={(e) => setNumber(e.target.value)} />
                <button className="signup_submit " type="submit">Sign Up</button>
                <p >Already have an account? <a href="/login" className="cursor-pointer">Log In</a></p>
              </form>
            </div>
          </div>
          <Footer />
        </div>
  );
}

export default withRouter(Signup);