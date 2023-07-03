import React from 'react'
import Navbar2 from '../component/Nav2'
import '../style/FullScan.css'
import { useLocation } from 'react-router-dom';
import html2pdf from 'html2pdf.js';
import { Nmapdata, WhoisTable, NucleiOutput, SubFinderList, WhatwebOutput, DigOutput, SslOutput, DnsScan ,ToolinfoOutput , VulnerabilityOutput} from '../constants/OutputData'
import {toolsInfo} from '../constants/ToolInfo';
import {vulInfo} from '../constants/vulInfo';
import { Footer } from '../component/footer';

export const FullScanReport = () => {
    const location = useLocation();
    const data = location.state;
    //console.log(data);
    const toolinfo = toolsInfo.find((tool) => tool.tool === data.Scan_type);
   // console.log(toolsInfo[2]);
   console.log(data.Vulnerability);



   const VulInfoSearch = () => {
     const headings = Object.keys(JSON.parse(data.Vulnerability));
     console.log(headings);
     const filteredVulInfo = vulInfo.filter((vul) => {
       const vulHeading = Object.keys(vul)[0];
       return headings.includes(vulHeading);
     });
   
     if (filteredVulInfo.length === 0) {
       return <p>No matching vulnerabilities found.</p>;
     }
   
     return (
       <div>
         {filteredVulInfo.map((vul) => {
           const vulHeading = Object.keys(vul)[0];
           const { desc, sol, ref } = vul[vulHeading];
   
           return (
            <div className='toolData'>
             <div className='titleDiv'/>
             <div key={vulHeading}>
               <strong>{vulHeading}</strong>
               <div className='infoTab'>
                <p>{desc}</p>
                <b>Solution: {sol}</b>
                <b>References:</b>
                <ul>
                    {Object.entries(ref).map(([key, value]) => (
                    <li key={key}>
                        <a href={value}>{key}</a>
                    </li>
                    ))}
                </ul>
               </div>
               
             </div>
            </div>
           );
         })}
       </div>
     );
   };
   
   

    

    const generatePDF = () => {
        const element = document.getElementById('reportDiv');
        html2pdf()
            .set({ margin: 0, filename: 'report.pdf', image: { type: 'jpeg', quality: 0.98 } })
            .from(element)
            .save();
    };

  




    return (
        <div>
            <div className="fullScan">
                <Navbar2 />
                <button className='d-btn' onClick={generatePDF}>Download PDF</button>
                <div className='report' id='reportDiv'>
                    <div className='report-title'>
                        <h1>Vulnerability Scanning Report</h1>
                        <hr />
                        <br />
                        <center><div className='titleDiv' /></center>
                        <center><h1>{data.Domain}</h1></center>
                        <center><div className='titleDiv' /></center>
                        <h2>Summary</h2>
                    </div>

                   


                    <div className='tool'>
                        <div className='output'>
                            {data.Scan_type === "fullscan"
                                ? <>
                                    {data.Vulnerability ?   <> 
                                                                <div className='OutputDiv'><VulnerabilityOutput vulData={data.Vulnerability} /></div>
                                                                <VulInfoSearch />   
                                                            </>
                                                        : <></>}
                                    <div>
                                        <div className='OutputDiv'><WhoisTable whodata={JSON.parse(data.whois)} /></div>
                                        <ToolinfoOutput data={toolsInfo[2]}/>
                                    </div>
                                    <div>
                                        <div className='OutputDiv'><DigOutput digdata={JSON.parse(data.dig)} /></div>
                                        <ToolinfoOutput data={toolsInfo[4]}/>
                                    </div>
                                    <div>
                                        <div className='OutputDiv'><Nmapdata data={JSON.parse(data.nmap)} /></div>
                                        <ToolinfoOutput data={toolsInfo[0]}/>
                                    </div>

                                    <div>
                                        <div className='OutputDiv'><SubFinderList subdomains={JSON.parse(data.subfinder)} /></div>
                                        <ToolinfoOutput data={toolsInfo[1]}/>
                                    </div>

                                    <div>
                                        <div className='OutputDiv'><NucleiOutput headers={JSON.parse(data.nuclei)} /></div>
                                        <ToolinfoOutput data={toolsInfo[5]}/>
                                    </div>

                                    <div>
                                        <div className='OutputDiv'><SslOutput ssldata={JSON.parse(data.sslscan)} /></div>
                                        <ToolinfoOutput data={toolsInfo[7]}/>
                                    </div>

                                    <div>
                                        <div className='OutputDiv'><WhatwebOutput whatwebdata={JSON.parse(data.whatweb)} /></div>
                                        <ToolinfoOutput data={toolsInfo[3]}/>
                                    </div>
                                    <div>
                                        <div className='OutputDiv'><DnsScan dnsOutput={JSON.parse(data.dnsscan)} /></div>
                                        <ToolinfoOutput data={toolsInfo[6]}/>
                                    </div>
                                </>
                                : data.Scan_type === "whois" ? <div className='OutputDiv'><WhoisTable whodata={JSON.parse(data.whois)} /></div>
                                : data.Scan_type === "nmap" ? <div className='OutputDiv'><Nmapdata data={JSON.parse(data.nmap)} /></div>
                                : data.Scan_type === "subfinder" ? <div className='OutputDiv'><SubFinderList subdomains={JSON.parse(data.subfinder)} /></div>
                                : data.Scan_type === "nuclei" ? <div className='OutputDiv'><NucleiOutput headers={JSON.parse(data.nuclei)} /></div>
                                : data.Scan_type === "dig" ? <div className='OutputDiv'><DigOutput digdata={JSON.parse(data.dig)} /></div>
                                : data.Scan_type === "sslscan" ? <div className='OutputDiv'><SslOutput ssldata={JSON.parse(data.sslscan)} /></div>
                                : data.Scan_type === "whatweb" ? <div className='OutputDiv'><WhatwebOutput whatwebdata={JSON.parse(data.whatweb)} /></div>
                                : data.Scan_type === "dnsscan" ? <div className='OutputDiv'><DnsScan dnsOutput={JSON.parse(data.dnsscan)} /></div>
                                :<></>
                                }
                                {toolinfo!=null? <ToolinfoOutput data={toolinfo}/>
                                :<></>
                                    }                            
                        </div>

                    </div>


                </div>
                <Footer/>
            </div>

        </div>

    );


}




