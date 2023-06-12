import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import Navbar2 from './Nav2';
import '../style/Single.css'
import axios from 'axios';
import Loader from './Loader';
import Cookies from 'js-cookie';

export const SingleScan = () => {
  const { type } = useParams();
  const [toolData, setToolData] = useState('');
  const [domain, setDomain] = useState();
  const [loading, setLoading] = useState(false)
  const [resData, setResData] = useState(null)
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  const showToastNotification = (message) => {
    setToastMessage(message);
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  useEffect(() => {
    toolsData.forEach((element) => {
      if (element.tool == type) {
        setToolData(element.data.info);
      }
    })
  }, [])

  const scanDomain = async () => {
    const domainRegex = /^[a-zA-Z0-9]+([-.][a-zA-Z0-9]+)*\.[a-zA-Z]{2,}$/;
    if (domain != null) {
      if (domainRegex.test(domain)) {
        setLoading(true)
        try {
          var uid=Cookies.get("userID")
          const response = await axios.post(`http://34.68.145.96:8000/scan?domain=${domain}&scan_type=${type}&UID=${uid}&nom=9359979571`);
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

  const WhoisTable = ({ whodata }) => {
    return (
      <div className='mainDiv'>
        <div className='TitleDiv'>
          <h2 className='gradient__text'>Whois Result</h2>
          <hr />
        </div>
        <h3 style={{ textAlign: "center" }}>The following information is collected from whois scan about the domain.</h3>
        <br />
        <table>
          <tbody>
            {Object.entries(whodata).map(([key, value]) => (
              <tr key={key}>
                <td>{key}</td>
                <td>
                  {Array.isArray(value) ? (
                    value.map((item, index) => <div key={index}>{item}</div>)
                  ) : (
                    value
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  const Nmapdata = ({ data }) => {
    return (
      <div className='mainDiv'>
        <div className='TitleDiv'>
          <h2 className='gradient__text'>Nmap Results</h2></div>
        <hr />
        <h3>Infomation about open ports by nmap scan is here !</h3>
        <br />
        <table >
          <thead>
            <tr>
              <th>Port</th>
              <th>State</th>
              <th>Service</th>
            </tr>
          </thead>
          <tbody>

            {data.map((item, index) => (
              <tr key={index}>
                {Object.keys(item).map((key) => (
                  <td key={key}>
                    <p>{item[key]}</p>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const SubFinderList = ({ subdomains }) => {
    return (
      <div className='mainDiv'>
        <div className='TitleDiv'>
          <h2 className='gradient__text'>Subfinder Result</h2>
        </div>
        {Object.entries(subdomains).map(([key, value]) => (
          <div key={key} className='resultdiv'>
            <h3> Following subdomains were found ! </h3>
            {Array.isArray(value) ? (
              <ul>
                {value.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p>{value}</p>
            )}
          </div>
        ))}
      </div>);
  }

  const NucleiOutput = ({ headers }) => {
    return (
     <div className='mainDiv'>
      <div className='TitleDiv'>
        <h2 className='gradient__text'>Nuclei -HTTP Headers</h2>
        <hr />
      </div>
      <table >
        <tbody>
          {Object.entries(headers).map(([key, value]) => (
            <tr key={key}>
              <td>{key}:</td>
              <td>{value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
      
      );
  }

const DigOutput = ({ digdata }) => {
    return (
      <div className='mainDiv'>
        <div className='TitleDiv'>
          <h2 className='gradient__text'>Dig Result</h2>
          <hr />
        </div>
        <h3 style={{ textAlign: "center" }}>
          The following information is collected from whois scan about the domain.
        </h3>
        <br />
        <table>
          <tbody>
            {digdata.map((item, index) => (
              <tr key={index}>
                {Object.entries(item).map(([key, value]) => (
                  <React.Fragment key={key}>
                    <td>{key}:</td>
                    <td>{value}</td>
                  </React.Fragment>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

const SslOutput = ({ ssldata }) => {
    return (
      <div className='mainDiv'>
        <div className='TitleDiv'>
          <h2 className='gradient__text'>SSL Result</h2>
          <hr />
        </div>
        <h3 style={{ textAlign: "center" }}>
          The following information is collected from SSL scan about the domain.
        </h3>
        <br />
      <div>
        {Object.entries(ssldata).map(([key, value]) => (
          <div key={key}>
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>
      </div>

    );
  };

const WhatwebOutput =({ whatwebdata }) => {
  return (
    <div className='mainDiv'>
      <div className='TitleDiv'>
        <h2 className='gradient__text'>WhatWeb Result</h2>
        <hr />
      </div>
      <h3 style={{ textAlign: "center" }}>
        The following information is collected from WhatWeb scan about the domain.
      </h3>
      <br />
    <div>
      {Object.entries(whatwebdata).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
    </div>

  );
};

const DnsScan =({ dnsOutput }) => {
  return (
    <div className='mainDiv'>
      <div className='TitleDiv'>
        <h2 className='gradient__text'>DnsScan Result</h2>
        <hr />
      </div>
      <h3 style={{ textAlign: "center" }}>
        The following information is collected from Dns scan about the domain.
      </h3>
      <br />
    <div>
      {Object.entries(dnsOutput).map(([key, value]) => (
        <div key={key}>
          <strong>{key}:</strong> {value}
        </div>
      ))}
    </div>
    </div>

  );
};




  return (
    <>
      <div className='singleScan'>
        {showToast && <div>
          <center><code style={{ backgroundColor: 'blanchedalmond', padding: 10, borderRadius: 5 }}>{toastMessage}</code></center>
        </div>}
        <Navbar2 />
        <div style={{ display: 'flex', justifyContent: 'center' }} >
          <div className='input-div' style={{ maxWidth: 500, }}>
            <input className='input-field' placeholder='Enter Domain name' onChange={(e) => { setDomain(e.target.value) }} />
            <button className="submit__btn" onClick={scanDomain} >Scan</button>
          </div>
        </div>
        <div>
          {loading ? <Loader /> : <></>}
        </div>
        <div className='scanningDiv'>
          {resData == null ? <></>
            : type == "whois" ? <div className='OutputDiv'><WhoisTable whodata={JSON.parse(resData)} /></div>
              : type == "nmap" ? <div className='OutputDiv'><Nmapdata data={JSON.parse(resData)} /></div>
                : type == "subfinder" ? <div className='OutputDiv'><SubFinderList subdomains={JSON.parse(resData)} /></div> 
                  : type == "nuclei" ? <div className='OutputDiv'><NucleiOutput headers={JSON.parse(resData)} /></div>
                    : type == "dig" ? <div className='OutputDiv'><DigOutput digdata={JSON.parse(resData)} /></div>
                       : type == "sslscan" ? <div className='OutputDiv'><SslOutput ssldata={JSON.parse(resData)} /></div>
                        : type == "whatweb" ? <div className='OutputDiv'><WhatwebOutput whatwebdata={JSON.parse(resData)} /></div>
                          : type == "dnsscan" ? <div className='OutputDiv'><DnsScan dnsOutput={JSON.parse(resData)} /></div>

                    : <>{resData}</>}
          {loading ? <></> : <div className='toolInfo'>{toolData}</div>}
        </div>
      </div>
    </>
  );
}



const toolsData = [
  {
    tool: "subfinder",
    data: {
      title: "Subdomain Finder",
      info:
        <div>

          <div className="Title" >
            <div className='titleDiv' />
            <h1>Subfinder</h1>
            <p>
              Subfinder is an open-source subdomain discovery tool used in the field of cybersecurity. It helps security researchers, bug bounty hunters, and penetration testers to find subdomains associated with a target domain.
            </p>
          </div>


          <div className='Title'>
            <div className='titleDiv' />
            <h1>Features</h1>
            <ul>
              <li>Fast and efficient subdomain enumeration</li>
              <li>Support for multiple DNS data sources to gather subdomain information</li>
              <li>Customizable configuration options for fine-tuning the scanning process</li>
              <li>Integration with other tools and frameworks in the cybersecurity ecosystem</li>
            </ul>
          </div>

          <div className='Title'>
            <div className='titleDiv' />
            <h1>Usage Instructions</h1>
            <p>
              To use Subfinder, you can run it from the command line interface (CLI) with various options and parameters. Here's an example command:
            </p>
            <code>subfinder -d targetdomain.com</code>
            <p>
              This command initiates the subdomain scanning process for the target domain "targetdomain.com".
            </p>
          </div>


          <div className='Title'>
            <div className='titleDiv' />
            <h1>Output and Results</h1>
            <p>
              Subfinder provides the discovered subdomains in an organized format. The output includes subdomain names, IP addresses, and other relevant DNS records associated with the target domain.
            </p>
          </div>

          <div className='Title'>
            <div className='titleDiv' />
            <h1>Best Practices</h1>
            <ul>
              <li>Use multiple data sources for comprehensive subdomain discovery.</li>
              <li>Ensure proper authorization and adhere to ethical guidelines when scanning target domains.</li>
              <li>Regularly update Subfinder to benefit from the latest features and improvements.</li>
            </ul>

          </div>

          <div className='Title'>
            <div className='titleDiv' />

            <h1>Integration with Your SingleScan Page</h1>
            <p>
              We have integrated Subfinder into our SingleScan page, allowing you to initiate subdomain scanning directly from our application. Simply provide the target domain and click the scan button to retrieve the subdomains associated with it.
            </p>
            <p>
              Please note that subdomain scanning should only be performed on authorized targets and in compliance with applicable laws and regulations.
            </p>

            <p>
              For more detailed information about Subfinder and its usage, you can refer to the <a href="https://subfinder.reinos.nl/" target="_blank">official Subfinder documentation</a> and <a href="https://github.com/projectdiscovery/subfinder" target="_blank">GitHub repository</a>.
            </p>

          </div>


        </div>
    }
  },
  {
    tool: "nmap",
    data: {
      title: "TCP Scan",
      info:
        <div>
          <div className="Title" >
            <div className='titleDiv' />
            <h2>Nmap</h2>
            <p>
              Nmap (Network Mapper) is a powerful open-source network scanning and enumeration tool used in the field of cybersecurity. It is designed to discover hosts, services, and vulnerabilities in a network.
            </p>
          </div>

          <div className="Title" >
            <div className='titleDiv' />
            <h1>Features</h1>
            <ul>
              <li>Port scanning to identify open ports on target hosts</li>
              <li>Service and version detection to determine running services and their versions</li>
              <li>Operating system detection to identify the operating systems of target hosts</li>
              <li>Vulnerability scanning to check for known vulnerabilities</li>
              <li>Scripting engine for customizing and extending scanning capabilities</li>
            </ul>
          </div>

          <div className="Title" >
            <div className='titleDiv' />
            <h1>Usage Instructions</h1>
            <p>
              Nmap can be used from the command line interface (CLI) with various options and parameters. Here's an example command for a basic TCP port scan:
            </p>
            <code>nmap -p 1-100 targetdomain.com</code>
            <p>
              This command scans ports 1 to 100 on the target domain "targetdomain.com".
            </p>

          </div>

          <div className="Title" >
            <div className='titleDiv' />

            <h1>Output and Results</h1>
            <p>
              Nmap provides detailed output and results from the scanning process. It includes information about open ports, discovered services, operating system fingerprinting, and potential vulnerabilities.
            </p>

          </div>

          <div className="Title" >
            <div className='titleDiv' />
            <h1>Best Practices</h1>
            <ul>
              <li>Obtain proper authorization before scanning a network.</li>
              <li>Understand the legal implications and adhere to ethical guidelines when using Nmap.</li>
              <li>Keep Nmap updated to take advantage of the latest features and bug fixes.</li>
              <li>Use appropriate scanning techniques and timing to avoid detection and interference.</li>
            </ul>
          </div>

          <div className="Title" >
            <div className='titleDiv' />
            <h1>Integration with Your SingleScan Page</h1>
            <p>
              We have integrated Nmap into our SingleScan page, allowing you to initiate network scanning directly from our application. Simply provide the target domain or IP address and specify the desired scan options to begin the scanning process.
            </p>

            <p>
              Please note that network scanning should only be performed on authorized networks and in compliance with applicable laws and regulations.
            </p>

            <p>
              For more detailed information about Nmap and its usage, you can refer to the <a href="https://nmap.org/" target="_blank">official Nmap website</a> and <a href="https://nmap.org/book/man.html" target="_blank">Nmap reference guide</a>.
            </p>
          </div>





        </div>

    }
  },
  {
    tool: "whois",
    data: {
      title: "Whois",
      info: <div>

        <div className="Title" >
          <div className='titleDiv' />
          <h2>WHOIS</h2>
          <p>
            WHOIS is a protocol used for querying databases that store information about registered domain names, IP addresses, and related entities. It provides details such as the domain owner, registration date, expiration date, and contact information.
          </p>
        </div>

        <div className="Title" >
          <div className='titleDiv' />
          <h1>Features</h1>
          <ul>
            <li>Retrieval of registration information for domain names and IP addresses</li>
            <li>Access to details such as domain ownership, registration dates, and contact information</li>
            <li>Identification of domain name servers (DNS) and their associated IP addresses</li>
            <li>Verification of domain name availability and status</li>
            <li>Ability to retrieve information for various top-level domains (TLDs)</li>
          </ul>

        </div>

        <div className="Title" >
          <div className='titleDiv' />
          <h1>Usage Instructions</h1>
          <p>
            WHOIS queries can be performed through various online WHOIS lookup tools or using the WHOIS command from the command line interface (CLI). Here's an example command to retrieve WHOIS information for a domain:
          </p>
          <code>whois example.com</code>
          <p>
            This command queries the WHOIS database for information about the domain "example.com".
          </p>
        </div>

        <div className="Title" >
          <div className='titleDiv' />

          <h1>Output and Results</h1>
          <p>
            WHOIS provides detailed output containing information about the queried domain or IP address. It includes registration details, contact information, domain status, and more, depending on the availability of information in the WHOIS database.
          </p>
        </div>

        <div className="Title" >
          <div className='titleDiv' />
          <h1>Best Practices</h1>
          <ul>
            <li>Use WHOIS for legitimate purposes and adhere to the terms of service of the WHOIS service provider.</li>
            <li>Respect privacy and avoid misuse of the obtained information.</li>
            <li>Combine WHOIS results with additional research for comprehensive domain intelligence.</li>
          </ul>
        </div>

        <div className="Title" >
          <div className='titleDiv' />
          <h1>Integration with Your SingleScan Page</h1>
          <p>
            We have integrated WHOIS functionality into our SingleScan page, allowing you to retrieve WHOIS information directly from our application. Simply provide the domain name or IP address and click the "Search" button to retrieve the relevant registration details.
          </p>

          <p>
            Please note that WHOIS queries should be performed responsibly and in compliance with applicable laws and regulations.
          </p>

          <p>
            For more detailed information about WHOIS and its usage, you can refer to the <a href="https://www.whois.com/" target="_blank">WHOIS website</a> or consult WHOIS documentation provided by relevant domain registrars or WHOIS service providers.
          </p>
        </div>



      </div>

    }
  },
  {//whaweb
    tool: "whatweb",
    data: {
      title: "WhatWeb",
      info: <div>
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>WhatWeb</h1>
        <p>
          WhatWeb is a web fingerprinting tool used for identifying technologies and software used by a target website. It provides valuable information about the web server, content management systems (CMS), programming languages, and other components present on the website.
        </p>
      </div>
    
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>Features</h1>
        <ul>
          <li>Detection of web server software and version</li>
          <li>Identification of CMS platforms, such as WordPress, Joomla, Drupal, etc.</li>
          <li>Recognition of web frameworks and programming languages</li>
          <li>Analysis of cookies, headers, and other web components</li>
        </ul>
      </div>
    
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>Usage Instructions</h1>
        <p>
          To use WhatWeb, you can run it from the command line interface (CLI) with the target website's URL. Here's an example command:
        </p>
        <code>whatweb example.com</code>
        <p>
          This command initiates the web fingerprinting process for the target website "example.com" and provides detailed information about the technologies and software used by the website.
        </p>
      </div>
    
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>Output and Results</h1>
        <p>
          WhatWeb provides a comprehensive report of the identified technologies and software used by the target website. The output includes details about the web server, CMS platforms, programming languages, and other relevant components. It helps in understanding the website's technology stack and potential vulnerabilities associated with specific software versions.
        </p>
      </div>
    
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>Best Practices</h1>
        <ul>
          <li>Combine the results of WhatWeb with additional vulnerability assessments and security testing to uncover potential weaknesses</li>
          <li>Stay up to date with the latest versions and security patches for the identified software components</li>
          <li>Regularly perform web fingerprinting to detect any changes or additions to the website's technology stack</li>
        </ul>
      </div>
    
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>Integration with Your Applications</h1>
        <p>
          WhatWeb can be integrated into your own applications or systems by invoking the command programmatically and parsing the output. This allows you to automate the web fingerprinting process and incorporate the results into your existing security workflows.
        </p>
        <p>
          Please note that web fingerprinting should only be performed on authorized targets and in compliance with applicable laws and regulations.
        </p>
        <p>
          For more detailed information about WhatWeb and its usage, you can refer to the official documentation and project repository on <a href="https://github.com/urbanadventurer/WhatWeb" target="_blank">GitHub</a>.
        </p>
      </div>
    </div>

    }
  },
  { //dig tool/
    tool: "dig",
    data: {
      title: "Dig",
      info:
      <div>
                <div class="Title">
                  <div class="titleDiv"></div>
                  <h1>Dig</h1>
                  <p>
                    dig is a command-line tool used for querying DNS (Domain Name System) servers. It provides detailed information about DNS records and can be helpful for network troubleshooting and DNS analysis.
                  </p>
                </div>

                <div class="Title">
                  <div class="titleDiv"></div>
                  <h1>Features</h1>
                  <ul>
                    <li>Query DNS servers for various record types, including A, AAAA, CNAME, MX, TXT, and more</li>
                    <li>Perform DNS lookups to obtain IP addresses associated with domain names</li>
                    <li>Retrieve detailed DNS information, such as nameserver records and TTL (Time to Live) values</li>
                    <li>Support for advanced options like setting the DNS server, specifying the query type, and enabling recursion</li>
                  </ul>
                </div>

                <div class="Title">
                  <div class="titleDiv"></div>
                  <h1>Usage Instructions</h1>
                  <p>
                    To use dig, open a command-line interface (CLI) and enter the following command format:
                  </p>
                  <code>dig [options] [domain]</code>
                  <p>
                    Replace [options] with any desired command options and [domain] with the domain name you want to query. For example:
                  </p>
                  <code>dig example.com</code>
                  <p>
                    This command queries the DNS servers for the domain "example.com" and displays the associated DNS records.
                  </p>
                </div>

                <div class="Title">
                  <div class="titleDiv"></div>
                  <h1>Output and Results</h1>
                  <p>
                    dig provides detailed output containing DNS record information. The results include the queried domain's IP address, nameserver records, TTL values, and other relevant DNS data.
                  </p>
                </div>

                <div class="Title">
                  <div class="titleDiv"></div>
                  <h1>Best Practices</h1>
                  <ul>
                    <li>Use appropriate query options and record types for specific DNS troubleshooting or analysis tasks.</li>
                    <li>Ensure proper authorization and adhere to ethical guidelines when performing DNS queries.</li>
                    <li>Stay up to date with the latest version of dig to benefit from bug fixes and new features.</li>
                  </ul>
                </div>

                <div class="Title">
                  <div class="titleDiv"></div>
                  <h1>Integration with Your Application</h1>
                  <p>
                    You can integrate dig into your application or system by invoking the dig command programmatically. This allows you to perform DNS queries within your application and process the results as needed.
                  </p>
                  <p>
                    Please note that DNS queries should be performed responsibly and in compliance with applicable laws and regulations.
                  </p>
                  <p>
                    For more detailed information about dig and its usage, you can refer to the <a href="https://manpages.debian.org/buster/dnsutils/dig.1.en.html" target="_blank">official dig manual page</a> and other relevant documentation.
                  </p>
                </div>
        </div>


    }
  },
  {// nuclei
    tool: "nuclei",
    data: {
      title: "Nuclei-HTTPHeader",
      info: <div>


        <div className="Title" >
          <div className='titleDiv' />
          <h2>Nuclei-HTTPHeader</h2>
          <p>
            Nuclei is a powerful vulnerability scanner designed for identifying security issues in web applications and services. It provides a flexible framework that allows you to define and execute security checks for various types of vulnerabilities, misconfigurations, and exposed sensitive information.
          </p>
        </div>


        <div className="Title" >
          <div className='titleDiv' />
          <h1>Features</h1>
          <ul>
            <li>Fast and efficient scanning of web applications and services</li>
            <li>Support for a wide range of security checks and vulnerability categories</li>
            <li>Customizable templates and powerful rule-based engine</li>
            <li>Easy integration with other tools and workflows</li>
            <li>Reporting of identified security issues and vulnerabilities</li>
          </ul>
        </div>

        <div className="Title" >
          <div className='titleDiv' />
          <h1>Usage Instructions</h1>
          <p>
            Nuclei can be used from the command line interface (CLI) or integrated into automated workflows. Here's an example command to run a set of predefined security checks:
          </p>
          <code>nuclei -t vulnerabilities/ -l targets.txt</code>
          <p>
            This command runs Nuclei with a set of predefined templates for vulnerabilities against the targets listed in the "targets.txt" file.
          </p>
        </div>

        <div className="Title" >
          <div className='titleDiv' />
          <h1>Output and Results</h1>
          <p>
            Nuclei provides detailed output and reports on the identified security issues and vulnerabilities. It includes information about the affected targets, the type of vulnerability, and any relevant details or recommendations for remediation.
          </p>
        </div>

        <div className="Title" >
          <div className='titleDiv' />

          <h1>Best Practices</h1>
          <ul>
            <li>Ensure that you have proper authorization and permission before scanning web applications and services.</li>
            <li>Use Nuclei responsibly and comply with ethical guidelines and legal requirements.</li>
            <li>Regularly update Nuclei and its templates to benefit from the latest security checks.</li>
            <li>Combine Nuclei with other security tools and manual testing for comprehensive vulnerability assessment.</li>
          </ul>
        </div>

        <div className="Title" >
          <div className='titleDiv' />
          <h1>Integration with Your SingleScan Page</h1>
          <p>
            We have integrated Nuclei into our SingleScan page, allowing you to perform vulnerability scanning directly from our application. Simply provide the target URL or IP address and select the desired security checks to initiate the scanning process.
          </p>

          <p>
            It's important to note that vulnerability scanning should only be performed on authorized targets and in compliance with applicable laws and regulations.
          </p>

          <p>
            For more detailed information about Nuclei and its usage, you can refer to the official documentation or the project's GitHub repository.
          </p>
        </div>
      </div>

    }
  },
  
   {//Dns
    tool: "dnsscan",
    data: {
      title: "Dns-Scan",
      info: <div>
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>DNS Scan Tool</h1>
        <p>
          The DNS Scan Tool is a powerful utility used for scanning and analyzing DNS records associated with a domain. It helps in identifying potential misconfigurations, vulnerabilities, and other issues related to DNS infrastructure.
        </p>
      </div>
    
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>Features</h1>
        <ul>
          <li>Comprehensive scanning of DNS records, including A, AAAA, CNAME, MX, TXT, and more</li>
          <li>Detection of common DNS misconfigurations and security weaknesses</li>
          <li>Validation of DNSSEC signatures for enhanced security</li>
          <li>Identification of subdomains and associated IP addresses</li>
        </ul>
      </div>
    
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>Usage Instructions</h1>
        <p>
          To use the DNS Scan Tool, provide the target domain name and initiate the scanning process. Here's an example command:
        </p>
        <code>dnsscan targetdomain.com</code>
        <p>
          This command scans the DNS records associated with the target domain "targetdomain.com" and provides detailed information about the domain's DNS configuration.
        </p>
      </div>
    
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>Output and Results</h1>
        <p>
          The DNS Scan Tool generates a report that includes the scanned DNS records, their corresponding values, and additional information such as TTL (Time to Live) values, record types, and DNSSEC status. It helps in identifying any anomalies or misconfigurations that may exist within the domain's DNS setup.
        </p>
      </div>
    
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>Best Practices</h1>
        <ul>
          <li>Regularly scan and monitor DNS records for potential security issues or unauthorized changes</li>
          <li>Ensure proper DNS record management and adhere to industry best practices</li>
          <li>Implement DNSSEC to enhance the security and integrity of your DNS infrastructure</li>
        </ul>
      </div>
    
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>Integration with Your Applications</h1>
        <p>
          The DNS Scan Tool can be integrated into your own applications or systems through its API or command-line interface. This allows you to automate DNS scanning and incorporate the results into your existing security workflows or monitoring systems.
        </p>
        <p>
          Please note that DNS scanning should only be performed on authorized targets and in compliance with applicable laws and regulations.
        </p>
        <p>
          For more detailed information about the DNS Scan Tool and its usage, you can refer to the official documentation and project repository on <a href="https://github.com/your-dns-scan-tool" target="_blank">GitHub</a>.
        </p>
      </div>
    </div>

    }
  },
   {//SSLSCan
    tool: "sslscan",
    data: {
      title: "Sslscan",
      info: <div>
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>SSL Scan</h1>
        <p>
          SSL Scan is a tool used for assessing the security configuration of SSL/TLS connections on web servers. It helps in identifying potential vulnerabilities and weaknesses in the SSL/TLS implementation.
        </p>
      </div>
    
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>Features</h1>
        <ul>
          <li>Comprehensive assessment of SSL/TLS configurations</li>
          <li>Detection of weak cipher suites and SSL/TLS protocol versions</li>
          <li>Verification of certificate validity and chain of trust</li>
          <li>Identification of vulnerable SSL/TLS configurations, such as deprecated encryption algorithms and insecure settings</li>
        </ul>
      </div>
    
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>Usage Instructions</h1>
        <p>
          To use SSL Scan, you can run it from the command line interface (CLI) with various options and parameters. Here's an example command:
        </p>
        <code>sslscan example.com</code>
        <p>
          This command initiates an SSL scan on the target domain "example.com" and provides a detailed report of the SSL/TLS configuration.
        </p>
      </div>
    
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>Output and Results</h1>
        <p>
          SSL Scan provides a detailed report of the SSL/TLS configuration. The output includes information about the SSL/TLS protocol version, supported cipher suites, certificate details, and any detected vulnerabilities or weaknesses.
        </p>
      </div>
    
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>Best Practices</h1>
        <ul>
          <li>Regularly perform SSL scanning to identify security weaknesses and ensure a secure SSL/TLS configuration</li>
          <li>Stay up-to-date with the latest SSL/TLS best practices and security recommendations</li>
          <li>Implement secure cipher suites and strong SSL/TLS protocols</li>
          <li>Renew SSL certificates before expiration and maintain a proper certificate management process</li>
        </ul>
      </div>
    
      <div class="Title">
        <div class="titleDiv"></div>
        <h1>Integration with Your Application</h1>
        <p>
          You can integrate SSL Scan into your application or system by invoking the SSL scanning command programmatically. This allows you to assess the SSL/TLS security of your application's endpoints and take necessary actions based on the scan results.
        </p>
        <p>
          Please note that SSL scanning should only be performed on authorized targets and in compliance with applicable laws and regulations.
        </p>
        <p>
          For more detailed information about SSL Scan and its usage, you can refer to the documentation or official sources of the specific SSL scanning tool you are using.
        </p>
      </div>
    </div>
    
    

    }
  },


]

