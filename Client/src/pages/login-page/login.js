import React, {  useContext, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import app from '../../firebase/base';
import { AuthContext } from '../../auth/auth';
import { Footer } from '../../component/footer.js';
import './login.css';
import { UserContext } from '../../component/UserContext';
import firebase from "firebase/compat/app";
import Navbar2 from '../../component/Nav2.js';
import Cookies from "js-cookie";
import logo from '../../assets/logo1.png';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { userId, setUserId } = useContext(UserContext);

  console.log("this is current user uid", userId);

  const handleLogin = (event) => {
      event.preventDefault();
      app
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          setUserId(user.user.uid);
          console.log("Login successful:", user);
          fetchUserData();
          window.location.href = "/";
        })
        .catch((error) => {
          console.error("Login error:", error);
          // alert("something wents wrong...\n" + error);
        });
    };
  
  useEffect(() => {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        setUserId(user.uid);
      } else {
        setUserId(null);
      }
    });
  }, [userId]);
  useEffect((setUserId) => {
    console.log("this is current user uid", userId);
    Cookies.set("userID", userId, { expires: 1 / 24 });

  }, [userId]);


  //funtion to fetch user data from firestore
  const fetchUserData = async () => {
    const userRef = firebase.firestore().collection("users").doc(userId);
    const doc = await userRef.get();
    if (!doc.exists) {
      console.log("No such document!");
    } else {
      console.log("Document data:", doc.data());
    }
  };



  const { currentUser } = useContext(AuthContext);
  const [userData, setUserData] = useState(null);

  // fetcch data 
  useEffect(() => {
    if (currentUser) {
      fetchUserData(currentUser.uid).then((data) => {
        setUserData(data);
      });
    }
  }, [currentUser]);

  // if (!userData) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div id="background" className="gradient__bg" >
      <Navbar2 />
      <div className="main_div ">
         <div className='central_div'>
          
            <div className="login_container">
              <div className="scanEL__navbar-links">
                  <a href='/'>
                  <div >
                  <img className='ScannelLogo' src={logo} style={{width:"10vw"}} alt=""></img>
                  </div>
                  </a>
              
                </div>
             <form className='login-form' onSubmit={handleLogin}>
              <input className="input-email " name="email" type="email" placeholder="Email" value={email}  onChange={(e) => setEmail(e.target.value)} />
              < input className="input-password " name="password" type="password" placeholder="Password"  value={password} onChange={(e) => setPassword(e.target.value)} />
              <button className="Submit_btn" type="submit">Log in</button>
             <p>Don't have an account? <a href="/signup" className="signUpbtn">Sign Up</a></p>
           </form>       
            </div>
         </div>
  
      </div>
      <Footer />
    </div>
  );
}

export default withRouter(Login);
