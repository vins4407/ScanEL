import '../style/profile.css'
import Navbar from '../component/navbar';
import React, { useState, useEffect ,useCallback,useMemo} from 'react';
import Cookies from "js-cookie";
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import firebase from "firebase/compat/app";
import { useNavigate } from 'react-router-dom';
import Loader from '../component/Loader';
import { ToastContainer, toast } from 'react-toastify';
import { AiFillMail,AiFillPhone } from 'react-icons/ai';
import user from '../assets/user-folder.png'
import { MobileTimePicker } from '@mui/x-date-pickers';
import { renderTimeViewClock } from '@mui/x-date-pickers/timeViewRenderers';
import { styled } from '@mui/system';
import axios from 'axios';


export function Profile() {
  const [userID, setUserId] = useState(null)
  const [userDetails, setUserDetails] = useState();
  const [userReports, setUserReports] = useState([]);
  const [loading, setLoading] = useState(false);
  const allDocs = useMemo(() => [], []);
  const [domain, setDomain] = useState();
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedScan, setSelectedScan] = useState('');
  const navigate = useNavigate();

  const showToastNotification = (message) => {
    toast.warning(message,{
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    }); 
    // Show success toast notification
    // toast.error(message); // Show error toast notification
    // toast.info(message); // Show info toast notification
  };

  const getData = useCallback(async () => {
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
        const updatedDocs = scansDoc.docs.filter(doc => !allDocs.some(existingDoc => existingDoc.id === doc.id));
        setUserReports(prevReports => [...prevReports, ...updatedDocs]);
      }
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  }, [allDocs]);
  
  
  useEffect(() => {
    setLoading(true);
    var uid = Cookies.get("userID");
    console.log("user found", uid);
    if (uid != null) {
      setUserId(uid);
    }
    getData();
  }, [getData]);
  

 

  
  const handleDownload = (reportId) => {
    console.log(reportId);
    navigate('/fullscanreport',{state: reportId });
  };



  const handleSubmit = async (e) => {
    setLoading(true);
    var uid = Cookies.get("userID");
    setUserId(uid);
    e.preventDefault();
    if (uid != null) {
      console.log(uid)
      console.log(domain,selectedTime,selectedScan,uid);
      const time = `${selectedTime["$H"].toString().padStart(2, "0")}:${selectedTime["$m"].toString().padStart(2, "0")}`;
      console.log(time);
      await axios.post(`http://16.171.152.230/schedulescan?domain=${domain}&scan_type=${selectedScan}&UID=${uid}&nom=8605634407&time_to_execute=${time}`)
        .then(res => {
          console.log(res);
          console.log("this is res data", res.data);
        })
        .catch(err => {
          showToastNotification(err.message);
          console.log("this is error:", err.message);
        });
       setLoading(false)
       toast("Task sheduled successfully! Once the task is executed you can view the report.")
    } else {
      showToastNotification("Please Login first for using full Scan functionality user must logIn");
      setLoading(false)
    }


  }


  const ReportsCards = () => {
    const reportCards = userReports.map((report, index) => (
      <div key={index} className='reportCard'>    
            <h2>{report.data().Domain}</h2>
            <div className="Scan_description">
              <p1>Scan Type: {report.data().Scan_type}</p1>
              <p1>Scanned on: {report.data().Timestamp}</p1>
            </div>
            <button className="download_button submit__btn" onClick={() => handleDownload(report.data())}>Download</button>
      </div>
    ));

    return <>{reportCards}</>;
  };
  const StyledTimePicker = styled(MobileTimePicker)`
  /* Add your styles here */
  input {
    color: white;
    border-color:white;
  }
  label {
    color: white; /* Change the color to your desired value */
  } 
  .MuiSvgIcon-root {
    color: white; /* Change the clock icon color to your desired value */
  }
  

`;

  return (
    <>
      <ToastContainer/>
      {loading ? <><div className='loaderContainer'><Loader /> </div></>
        : userID ? (
          <div className='profile_page'>
            <Navbar />
            <div className='section__padding' >
              {/* Info Section */}
              <div className='info_section'>
                <div className='user_icon'><img src={user} alt='user_icon'></img></div>
                <div className='User_info'>
                      <h4 className='email_field'> <AiFillMail/>Email: {userDetails.email}</h4>
                      <h4 className='Number_field'> <AiFillPhone/>Ph.Number: {userDetails.number}</h4>
                  </div>
              </div>
            {/* CronJob Section */}
            <div >
                <div className="input-div">
                  <input className="input-field" placeholder="e.g. www.example.com" type="domain" onChange={(e) => { setDomain(e.target.value) }}></input>
                  <div className="input-field">
                    <DemoItem >
                    <StyledTimePicker
                            label="Selected Time"
                            viewRenderers={{
                              hours: renderTimeViewClock,
                              minutes: renderTimeViewClock,
                              seconds: renderTimeViewClock,
                            }}
                            value={selectedTime}
                            onChange={(newValue) => setSelectedTime(newValue)}      
                    />
                  </DemoItem>
                  </div>
                  <div className="input-field">
                    <select className="input-field" value={selectedScan} onChange={(e) => {setSelectedScan(e.target.value) }}>
                      <option value="">Select scan</option>
                      <option value="subfinder">Subfinder</option>
                      <option value="nmap">Nmap</option>
                      <option value="whois">Whois</option>
                      <option value="whatweb">WhatWeb</option>
                      <option value="dig">Dig</option>
                      <option value="nuclei">Nuclei-HTTPHeader</option>
                      <option value="dnsscan">DnsREcon</option>
                      <option value="sslscan">Sslscan</option>
                      <option value="fullscan">FullScan</option>

                    </select>
                  </div>
                  <button  onClick={handleSubmit} className="submit__btn" >Set Cron-Job</button>
                </div>
            </div>

           <div >
            {/* Reports section */}
            {userReports.empty
                ?<div >No Reports Found !</div>
               
                :  <div className='Reports-main'>
                    <ReportsCards />
                  </div>
            }
           </div>
          </div>
           
          </div>)
          : (<div>You are not logged in </div>)}
    </>
  );
}