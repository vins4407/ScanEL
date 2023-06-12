// import React from 'react';
import '../style/profile.css'
import Navbar from './navbar';
import React, { useState, useContext, useEffect, useRef } from 'react';
import { AuthContext } from '../auth/auth';
import Cookies from "js-cookie";
import firebase from "firebase/compat/app";
import { useHistory } from 'react-router-dom';
import Loader from './Loader';
import axios from "axios";


export function Profile() {
  const [userID, setUserId] = useState(null)
  const [userDetails, setUserDetails] = useState();
  const [userReports, setUserReports] = useState([]);
  const [loading, setLoading] = useState(false)
  var allDocs = [];
  const [domain, setDomain] = useState();
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedScan, setSelectedScan] = useState('');
  const [showToast, setShowToast] = useState(false);
  const history = useHistory();

  const [toastMessage, setToastMessage] = useState("");

  const showToastNotification = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  // const { currentUser } = useContext(AuthContext);
  useEffect(() => {
    setLoading(true)
    var uid = Cookies.get("userID");
    console.log("first", uid);
    if (uid != null) {
      setUserId(uid);
    }
    getData();
  }, []);


  async function getData() {
    try {
      const uid = Cookies.get("userID");

      const [userDoc, scansDoc] = await Promise.all([
        firebase.firestore().collection("users").doc(uid).get(),
        firebase.firestore().collection('scans').doc('txt').collection(uid).get(),
      ]);

      if (!userDoc.exists) {
        console.log("No user document found!");
      } else {
        setUserDetails(userDoc.data());
      }

      if (scansDoc.empty) {
        console.log("No scans document found!");
      } else {
        scansDoc.forEach((doc) => {
          const isDocExist = allDocs.some((existingDoc) => existingDoc.id === doc.id);
          if (!isDocExist) {
            allDocs.push(doc);
          }
        });
        setUserReports(allDocs)
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }

  const handleDownload = (reportId) => {
    history.push({

      pathname: '/otherpage',
      state: { data: reportId }

    });
    window.location.href = "/otherpage";
  };

  const ReportsCards = () => {
    const reportCards = userReports.map((report, index) => (
      // console.log(report.data()),
      <div key={index} className='reportsCards'>
        <div className='Scan_result'>
          <div className='Profile_container'>
            <h2>{report.data().Domain}</h2>
            <div className="Scan_description">
              <p1>Scan Type: {report.data().Scan_type}</p1>
              <p1>Scanned on: {report.data().Timestamp}</p1>
            </div>
            <button className="download_button" onClick={() => handleDownload(report.data())}>Download</button>
          </div>
        </div>
      </div>
    ));

    return <>{reportCards}</>;
  };


  const handleSubmit = async (e) => {
    setLoading(true);
    var uid = Cookies.get("userID");
    setUserId(uid);
    e.preventDefault();
    if (uid != null) {
      console.log(uid)
      console.log(domain,selectedTime,selectedScan,uid);
      // await axios.post(`http://34.68.145.96:8000/fullscan?domain=${domain}&UID=${userID}&nom=8695634407`)
      //   .then(res => {
      //     console.log(res);
      //     console.log("this is res data", res.data);
      //   })
      //   .catch(err => {
      //     showToastNotification(err.message);
      //     console.log("this is error:", err.message);
      //     // alert("Error in scanning")
      //   });
      setLoading(false)
    } else {
      showToastNotification("Please Login first for using full Scan functionality user must logIn");
      setLoading(false)
    }
    // send domain name , scan type and uid to backend using axios using url 


  }




  return (
    <>{showToast && <div>
      <center><code style={{ backgroundColor: 'blanchedalmond', padding: 10, borderRadius: 5 }}>{toastMessage}</code></center>
    </div>}
      {loading ? <><div className='loaderContainer'><Loader /> </div></>
        : userID ? (
          <div className='profile_page'>
            <Navbar />
            {/* <Navbar2/> */}
            <div className='info_section'>
              <div style={{ padding: '20px 100px' }}>
                <div className="input-div">
                  <input className="input-field" placeholder="e.g. www.example.com" type="domain" onChange={(e) => { setDomain(e.target.value) }}></input>
                  <div className="input-field">
                    <select className="input-field" value={selectedTime} onChange={(e) => { setSelectedTime(e.target.value) }}>
                      <option value="">Select Time</option>
                      <option value="1">1 hr</option>
                      <option value="12">12 hr</option>
                      <option value="24">24 hr</option>
                    </select>
                  </div>
                  <div className="input-field">
                    <select className="input-field" value={selectedScan} onChange={(e) => { setSelectedScan(e.target.value) }}>
                      <option value="">Select scan</option>
                      <option value="nmap">NMAP</option>
                      <option value="whois">WHOIS</option>
                      <option value="fullscan">Full Scan</option>
                    </select>
                  </div>
                  <button onClick={handleSubmit} className="submit__btn" >Set Cron-Job</button>
                </div>
              </div>

              <div className='User_info'>
                <div className='email_field'> Email:{userDetails.email}</div>
                <div className='Number_field'> Phone Number:{userDetails.number}</div>
              </div>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
              <ReportsCards />
            </div>
            {userReports.forEach((doc) => {
              return <>
                <h1>{doc.data().Domain}</h1>
              </>
            })}
          </div>)
          : (<div>You are not logged in </div>)}
    </>
  );
}