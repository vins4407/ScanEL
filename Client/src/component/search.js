import "../style/homepage.css";
import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useHistory } from 'react-router-dom';
import "../style/search.css";
import "../style/tools.css"
import axios from "axios";
import ai from '../assets/scan.png';
import { sslscan, dig, subfinder, tcp, whois, whatweb, nuclei, dns } from './imports';
import Cookies from "js-cookie";
import { Whyscanel } from "./whyscanel";
import { Footer } from "./footer";
import Loader from './Loader';

// import 'react-dropdown/style.css';

Modal.setAppElement("#root");



export function Search() {
  // create function to handle submit , on clcik send domain name , scan type and uid to backend using axios
  const [domain, setDomain] = useState("");
  const [scanType, setScanType] = useState("");
  const [userId, setUserId] = useState(null);
  const [loading, setLoading] = useState(false)
  const [responseData, setResponseData] = useState('')
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

  const [selectedOption, setSelectedOption] = useState('Scan');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
    setScanType(event.target.value)
  };

  



  const handleSubmit = async (e) => {
    setLoading(true);
    var uid = Cookies.get("userID");
    setUserId(uid);
    e.preventDefault();
    console.log(domain, scanType, userId);
    if (uid != null) {
      console.log(uid)
      await axios.post(`http://192.168.122.1:8000/fullscan?domain=${domain}&UID=${userId}&nom=8695634407`
      )
        .then(res => {
          console.log(res);
          console.log("this is res data", res.data);
          setResponseData(res.data);
          history.push({

            pathname: '/otherpage',
            state: { data: res.data }
      
          });
          window.location.href = "/otherpage";
          clearInputs();

        })
        .catch(err => {
          showToastNotification(err.message);
          console.log("this is error:", err.message);
          // alert("Error in scanning")
        });
        setLoading(false)
    } else {
      showToastNotification("Please Login first for using full Scan functionality user must logIn");
      setLoading(false)
    }
    // send domain name , scan type and uid to backend using axios using url 


  }

  // assing input value to domain , scanType and uid
  const handleDomainChange = (e) => {
    setDomain(e.target.value);
  }
 



  useEffect(() => {
    var uid = Cookies.get("userID");
    setUserId(uid);
    console.log(userId)
    if (userId) {
      // execute search function here, using the updated userId value
      console.log('User is logged in. userId111:', userId);
    } else {
      console.log('User is not logged in.111');
    }
  }, [userId]); // listen for changes to the userId state



  const clearInputs = () => {
    // console.log("this is response data",responseData);
    if (responseData === "Done") {
      alert("Scan is completed successfully \n You will receive a sms on registered number shortly !!");
      setScanType("");
      setDomain("");
    }
    else {
      console.log("I am from clearInput , Something went wrong, please try again later");
    }
  }


  const ToolsCard = ({ imgUrl, heading, data, btn }) => (
    <div className="scannel-container_tools">
      <div className="scannel__container_tools-image">
        <img src={imgUrl} alt="blog_image" />
      </div>
      <div className="scannel__container_tools-content">
        <div>
          <h1>{heading}</h1>
          <p>{data}</p>
        </div>
        <a href={`/singlescan/${btn}`} >scan</a>
      </div>
    </div>
  )




  return (
    <>
      {showToast && <div>
        <center><code style={{ backgroundColor: 'blanchedalmond', padding: 10, borderRadius: 5 }}>{toastMessage}</code></center>
      </div>}
      {loading ? <><div className='loaderContainer'><Loader /> </div></> :
        <>
          {/* Search Section */}
          <div className="search_container">

            <div className="first-section-left">
              <h1 className="gradient__text">Free Vulnerability Scanning & Reconnaissance Testing Tool</h1>
              <h3 >ScanEL provides FREE, easy-to-use tools for IT security teams to perform vulnerability assessments for web applications automatically and reliably. <br />Protect current web assets by staying ahead of the cybersecurity game.</h3>
              <div className="input-div">
                <input className="input-field" placeholder="e.g. www.example.com" type="domain" onChange={handleDomainChange}></input>
                <div className="input-field">
                  <select className="input-field" value={selectedOption} onChange={handleChange}>
                    <option value=""> Select Scan-Type</option>
                    <option value="Small scan">Small scan</option>
                    <option value="Full scan">Full scan</option>
                  </select>
                </div>
                <button onClick={handleSubmit} className="submit__btn" >Scan</button>

              </div>
            </div>
            <div className="scannel__ai-image">
              <img src={ai} alt="ai_img"/>
            </div>
          </div>

          {/* tools Section */}
          <div className="scannel_tools section__padding" id="Tools">
            <div className="scannel_tools-heading">
              <h1 className="gradient__text">A lot is happening, <br /> We are concerning about it.</h1>
            </div>
            <div className="scannel_tools-container">
              
                <ToolsCard imgUrl={subfinder} heading="Subdomain Finder" data="Finds associated subdomains in the organization" btn="subfinder" />
                <ToolsCard imgUrl={tcp} heading="TCP Scan" data="Checks for any open TCP Port on your server" btn="nmap" />
                <ToolsCard imgUrl={whois} heading="Whois" data="Check for Registry and Registrar and other domain details" btn="whois" />
                <ToolsCard imgUrl={whatweb} heading="WhatWeb" data="Check for Registry and Registrar and other domain details" btn="whatweb" />
                <ToolsCard imgUrl={dig} heading="Dig" data="The dig (domain information groper) command is a flexible tool for interrogating DNS name servers." btn="dig" />
                <ToolsCard imgUrl={nuclei} heading="Nuclei-HTTPHeader" data="It helps to find security issues based onYAML-based templates. " btn="nuclei" />
                <ToolsCard imgUrl={dns} heading="DnsREcon" data="DNSRecon is a Python script that provides the ability to perform: Check all NS Records for Zone Transfers." btn="dnsscan" />
                <ToolsCard imgUrl={sslscan} heading="sslscan" data="Used to evaluate the security of the SSL/TLS support of a remote web service." btn="sslscan" />

            
            </div>

          </div>
          <Whyscanel />
          <Footer />
        </>}

    </>
  );
}
