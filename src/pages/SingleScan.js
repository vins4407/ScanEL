import React, { useState } from 'react'
import { useParams } from "react-router-dom";
import Navbar2 from '../component/Nav2';
import '../style/Single.css'
import axios from 'axios';
import Loader from '../component/Loader';
import Cookies from 'js-cookie';
import { toolsData } from '../constants/ToolsData';
import { Nmapdata, WhoisTable, NucleiOutput, SubFinderList, WhatwebOutput, DigOutput, SslOutput, DnsScan } from '../constants/OutputData'
import { ToastContainer, toast } from 'react-toastify';
export const SingleScan = () => {
  const { type } = useParams();
  const [domain, setDomain] = useState();
  const [loading, setLoading] = useState(false)
  const [resData, setResData] = useState(null)
  const toolData = toolsData.find((tool) => tool.tool === type);

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

  const ToolInfo = ({ data }) => {
    const createMarkup = (content) => {
      return { __html: content };
    };
  
    return (
      <div>
        {data.map((section, index) => (
          <div className="Title" key={index}>
            <div className="titleDiv" />
            <h1>{section.title}</h1>
            {section.content && section.content.map((paragraph, pIndex) => (
              <p key={pIndex} dangerouslySetInnerHTML={createMarkup(paragraph)} />
            ))}
            {section.list && (
              <ul>
                {section.list.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            )}
            {section.code && (
              <div>
                <p>{section.code.description}</p>
                <code>{section.code.example}</code>
              </div>
            )}
            {section.anchor && (
              <div>
                {section.anchor.map((link, linkIndex) => (
                  <p key={linkIndex}><a href={link.href} target="_blank" rel="noopener noreferrer">{link.text}</a></p>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  

  const scanDomain = async () => {
    const domainRegex = /^[a-zA-Z0-9]+([-.][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    if (domain != null) {
      if (domainRegex.test(domain)) {
        setLoading(true)
        try {
          var uid = Cookies.get("userID")
          const response = await axios.post(`http://16.171.152.230/scan?Domain=${domain}&Type=${type}&uid=${uid}&num=8605634407`);
          console.log(response.data);
          setResData(response.data)
          setLoading(false)
        } catch (error) {
          setLoading(false)
          console.error('Error', error);
          showToastNotification(error.message);
        }

      } else {
        // alert("Pls enter valide domain");
        showToastNotification("Please enter a valid domain");

      }
    }
  }



  return (
    <>
      <div className='singleScan'>
        <ToastContainer/>      
        <Navbar2 />
        <div style={{ display: 'flex', justifyContent: 'center' }} >
          <div className='input-div' style={{ maxWidth: 1000, }}>
            <input className='input-field' placeholder='Enter Domain name' onChange={(e) => { setDomain(e.target.value) }} />
            <button className="submit__btn" onClick={scanDomain} >Scan</button>
          </div>
        </div>
        <div>
          {loading ? <Loader /> : <></>}
        </div>
        <div className='scanningDiv'>
          {resData === null ? <></>
            : type === "whois" ? <div className='OutputDiv'><WhoisTable whodata={JSON.parse(resData)} /></div>
              : type === "nmap" ? <div className='OutputDiv'><Nmapdata data={JSON.parse(resData)} /></div>
                : type === "subfinder" ? <div className='OutputDiv'><SubFinderList subdomains={JSON.parse(resData)} /></div>
                  : type === "nuclei" ? <div className='OutputDiv'><NucleiOutput headers={JSON.parse(resData)} /></div>
                    : type === "dig" ? <div className='OutputDiv'><DigOutput digdata={JSON.parse(resData)} /></div>
                      : type === "sslscan" ? <div className='OutputDiv'><SslOutput ssldata={JSON.parse(resData)} /></div>
                        : type === "whatweb" ? <div className='OutputDiv'><WhatwebOutput whatwebdata={JSON.parse(resData)} /></div>
                          : type === "dnsscan" ? <div className='OutputDiv'><DnsScan dnsOutput={JSON.parse(resData)} /></div>

                            : <>{resData}</>}
          {loading ? <></> : <div className='toolInfo'><ToolInfo data={toolData.data.info}/></div>}
        </div>
      </div>
    </>
  );
}




