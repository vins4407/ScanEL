import React, {  useContext, useState, useEffect } from 'react';
import app from '../../firebase/base';
import { Footer } from '../../component/footer.js';
import './login.css';
import { UserContext } from '../../uitls/UserContext';
import firebase from "firebase/compat/app";
import Navbar2 from '../../component/Nav2.js';
import Cookies from "js-cookie";
import logo from '../../assets/logo1.png';
import Loader from '../../component/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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


  console.log("this is current user uid", userId);

  const handleLogin = (event) => {
      setLoading(true);
      event.preventDefault();
      app
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
          setLoading(false)
          setUserId(user.user.uid);
          console.log("Login successful:", user);
          fetchUserData();
          localStorage.setItem('toastMessage', 'Login Successful!');
          window.location.href = "/";    
        })
        .catch((error) => {
          setLoading(false)
          console.error("Login error:", error);
          showToastNotification("Please enter the details correctly!");
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
  }, [setUserId]);

  useEffect(() => {
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


  return (
    
   
    <div id="background" className="gradient__bg">
   
      {loading ? (
        <div className='loaderContainer'><Loader /></div>
      ) : (
        <>
         <ToastContainer/>
          <Navbar2 />
          <div className="main_div">
            <div className="login_container">
              <a href='/'>
                <img className='logo' src={logo} alt=""></img>
              </a>
              <form className='login-form' onSubmit={handleLogin}>
                <input
                  className="input-email"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="input-password"
                  name="password"
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="Submit_btn" type="submit">Log in</button>
                <p>Don't have an account? <a href="/signup" className="signUpbtn">Sign Up</a></p>
              </form>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
 
  );
}

export default Login;
