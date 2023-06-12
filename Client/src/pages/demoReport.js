import React, { useEffect, useState } from 'react'
import Navbar2 from '../component/Nav2'
import '../style/FullScan.css'
import { useLocation } from 'react-router-dom';
import html2pdf from 'html2pdf.js';


export const OtherPage = () => {
    const location = useLocation();
    const { data } = location.state;
    const [toolInfo, setToolInfo] = useState('');
    console.log(data.scan_type);


    const generatePDF = () => {
        const element = document.getElementById('reportDiv');
        html2pdf()
            .set({ margin: 0, filename: 'report.pdf', image: { type: 'jpeg', quality: 0.98 } })
            .from(element)
            .save();
    };

    useEffect(() => {
        const selectedToolInfo = toolsInfo.find(element => element.tool === data.Scan_type);
        if (selectedToolInfo) {
            setToolInfo(selectedToolInfo.data.info);
        }
    }, [data.Scan_type]);

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
                {/* <h3>Infomation about open ports by nmap scan is here !</h3> */}
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
                        {/* <h3> Following subdomains were found ! </h3> */}
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
                {/* <h3 style={{ textAlign: "center" }}>
                    The following information is collected from whois scan about the domain.
                </h3> */}
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
                {/* <h3 style={{ textAlign: "center" }}>
                    The following information is collected from SSL scan about the domain.
                </h3> */}
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

    const WhatwebOutput = ({ whatwebdata }) => {
        return (
            <div className='mainDiv'>
                <div className='TitleDiv'>
                    <h2 className='gradient__text'>WhatWeb Result</h2>
                    <hr />
                </div>
                {/* <h3 style={{ textAlign: "center" }}>
                    The following information is collected from WhatWeb scan about the domain.
                </h3> */}
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

    const JsonComponent = ({ jsonData }) => {
        const parsedData = JSON.parse(jsonData);
    
        return (
            <div className='mainDiv' >
                {Object.entries(parsedData).map(([key, value]) => (
                    <div key={key} className='TitleDiv'>
                        <h3 className='gradient__text'>{key}</h3>
                        <hr />
                        <ul>
                            {value.map((item, index) => (
                                <li key={index}>
                                    <strong>Item {index + 1}</strong>:
                                    <ul>
                                        {Object.entries(item).map(([itemKey, itemValue]) => (
                                            <li key={itemKey}>
                                                <strong>{itemKey}:</strong> {itemValue}
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        );
    };

    const DnsScan = ({ dnsOutput }) => {
        return (
            <div className='mainDiv'>
                <div className='TitleDiv'>
                    <h2 className='gradient__text'>DnsScan Result</h2>
                    <hr />
                </div>
                {/* <h3 style={{ textAlign: "center" }}>
                    The following information is collected from Dns scan about the domain.
                </h3> */}
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

    console.log(data)

    return (
        <div>
            <div class="fullScan">
                <Navbar2 />
                <button className='d-btn' onClick={generatePDF}>Download PDF</button>
                <div className='report' id='reportDiv'>
                    <h1>Vulnerability Scanning Report</h1>
                    <hr />
                    <br />
                    <center><div className='titleDiv' /></center>
                    <center><h1>{data.Domain}</h1></center>
                    <center><div className='titleDiv' /></center>

                    <h2>Summary</h2>

                    <div className='tool'>
                        <div className='output'>
                            {/* <Nmapdata data={JSON.parse(data.nmap)} /> */}
                            {data === null ? <></>
                                : data.scan_type === "fullscan" ? <>
                                    <div className='OutputDiv'><JsonComponent jsonData={data.Vulnerability} /></div>
                                    <div>
                                        <div className='OutputDiv'><WhoisTable whodata={JSON.parse(data.whois)} /></div>
                                        {toolsInfo[2].data.info}
                                    </div>
                                    <div>
                                        <div className='OutputDiv'><DigOutput digdata={JSON.parse(data.dig)} /></div>
                                        {toolsInfo[4].data.info}
                                    </div>
                                    <div>
                                        <div className='OutputDiv'><Nmapdata data={JSON.parse(data.nmap)} /></div>
                                        {toolsInfo[0].data.info}
                                    </div>

                                    <div>
                                        <div className='OutputDiv'><SubFinderList subdomains={JSON.parse(data.subfinder)} /></div>
                                        {toolsInfo[1].data.info}
                                    </div>

                                    <div>
                                        <div className='OutputDiv'><NucleiOutput headers={JSON.parse(data.nuclei)} /></div>
                                        {toolsInfo[5].data.info}
                                    </div>

                                    <div>
                                        <div className='OutputDiv'><SslOutput ssldata={JSON.parse(data.sslscan)} /></div>
                                        {toolsInfo[7].data.info}
                                    </div>

                                    <div>
                                        <div className='OutputDiv'><WhatwebOutput whatwebdata={JSON.parse(data.whatweb)} /></div>
                                        {toolsInfo[3].data.info}
                                    </div>

                                    <div>
                                        <div className='OutputDiv'><DnsScan dnsOutput={JSON.parse(data.dnsscan)} /></div>
                                        {toolsInfo[6].data.info}
                                    </div>

                                </> :
                                    data.Scan_type === "whois" ? <div className='OutputDiv'><WhoisTable whodata={data.whois} /></div>
                                        : data.Scan_type === "nmap" ? <div className='OutputDiv'><Nmapdata data={JSON.parse(data.nmap)} /></div>
                                            : data.Scan_type === "subfinder" ? <div className='OutputDiv'><SubFinderList subdomains={JSON.parse(data.subfinder)} /></div>
                                                : data.Scan_type === "nuclei" ? <div className='OutputDiv'><NucleiOutput headers={JSON.parse(data.nuclei)} /></div>
                                                    : data.Scan_type === "dig" ? <div className='OutputDiv'><DigOutput digdata={JSON.parse(data.dig)} /></div>
                                                        : data.Scan_type === "sslscan" ? <div className='OutputDiv'><SslOutput ssldata={JSON.parse(data.sslscan)} /></div>
                                                            : data.Scan_type === "whatweb" ? <div className='OutputDiv'><WhatwebOutput whatwebdata={JSON.parse(data.whatweb)} /></div>
                                                                : data.Scan_type === "dnsscan" ? <div className='OutputDiv'><DnsScan dnsOutput={JSON.parse(data.dnsscan)} /></div>

                                                                    : <>{data}</>}
                            <div>
                                {toolInfo}
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>

    );


}

const toolsInfo = [
    {
        tool: "nmap",
        data: {
            title: "portscan",
            info:
                <div className='toolData'>
                    <div className='titleDiv' />
                    <strong>Tool Details</strong>
                    <div className='infoTab'>
                        <b>Risk description:</b>
                        <p>The port scanning activity has identified open ports on the target system. Open ports can provide potential entry points for attackers to exploit vulnerabilities or gain unauthorized access to the system. It is crucial to understand the risks associated with each open port and take appropriate measures to mitigate them.</p>
                        <b>Recommendation:</b>
                        <p>1. Regularly review and analyze the purpose and necessity of each open port. Close any unnecessary ports to minimize the attack surface.</p>
                        <p>2. Ensure that all open ports have the latest security patches and updates applied. Vulnerabilities in services or applications running on open ports can be exploited by attackers.</p>
                        <p>3. Implement proper access control mechanisms to restrict access to open ports. This can include using firewalls, network segmentation, and strong authentication methods.</p>
                        <p>4. Monitor and log network traffic related to open ports. This can help in detecting any suspicious or unauthorized activity and enable timely response and mitigation.</p>
                        <p>5. Conduct regular vulnerability assessments and penetration testing to identify and address any vulnerabilities associated with open ports.</p>
                    </div>
                </div>
        }
    },
    {
        tool: "subfinder",
        data: {
            title: "portscan",
            info:
                <div className='toolData'>
                    <div className='titleDiv' />
                    <strong >Subfinder Tool</strong>
                    <div className='infoTab'>
                        <b>Risk Description:</b>
                        <p>The Subfinder tool carries some risks that you should be aware of:</p>
                        <ul>
                            <li>False positives: The tool may occasionally identify subdomains that do not actually exist or are no longer in use. This can lead to wasted time and effort investigating non-existent or irrelevant subdomains.</li>
                            <li>False negatives: The tool may miss some subdomains, especially if they are well-hidden or have unique configurations. This can result in potential security blind spots and missed opportunities for further analysis.</li>
                            <li>Excessive scanning: Uncontrolled or frequent scanning of subdomains without proper authorization may violate terms of service or legal agreements with the target domain. It is important to ensure you have appropriate permission before conducting subdomain scans.</li>
                        </ul>
                        <b>Recommendations:</b>
                        <ul>
                            <li>Verify results: Always manually verify the identified subdomains to confirm their relevance and validity before taking any further actions or investigations.</li>
                            <li>Respect target domain policies: Ensure that you have proper authorization from the target domain owner or adhere to any terms of service or legal agreements regarding subdomain scanning.</li>
                            <li>Minimize impact: Configure the tool to use appropriate scan settings, such as adjusting the scan depth and timeout, to minimize the impact on the target domain and avoid unnecessary resource consumption.</li>
                            <li>Stay up to date: Keep the Subfinder tool and its associated dependencies updated to benefit from bug fixes, performance improvements, and new features.</li>
                            <li>Share findings responsibly: If you discover any potential vulnerabilities or sensitive information during subdomain scanning, follow responsible disclosure practices and report them to the appropriate parties.</li>
                        </ul>
                    </div>
                </div>

        }
    },
    {
        tool: "whois",
        data: {
            title: "domainlookup",
            info:
                <div className='toolData'>
                    <div className='titleDiv' />
                    <strong>Whois Tool</strong>
                    <div className='infoTab'>
                        <b>Risk Description:</b>
                        <p>The Whois tool carries some risks that you should be aware of:</p>
                        <ul>
                            <li>Exposure of sensitive information: Running a Whois query may reveal sensitive information about domain owners, including their contact details. This information can be misused for spamming, phishing, or other malicious purposes.</li>
                            <li>Legal and privacy considerations: Accessing and using Whois data may be subject to specific legal regulations or privacy policies in different jurisdictions. It's important to understand and comply with the relevant laws and regulations.</li>
                            <li>Incomplete or outdated information: Whois databases may not always provide accurate or up-to-date information. Domain owners can choose to provide false or obfuscated details, and databases may not be regularly updated.</li>
                        </ul>
                        <b>Recommendations:</b>
                        <ul>
                            <li>Use responsibly: Only use the Whois tool for legitimate purposes and ensure compliance with applicable laws and regulations.</li>
                            <li>Protect privacy: If you are a domain owner, consider using privacy protection services or options provided by domain registrars to protect your personal information from public access via Whois queries.</li>
                            <li>Verify information independently: If you rely on Whois data for any critical decisions or actions, verify the information independently from multiple sources to ensure its accuracy.</li>
                            <li>Respect terms of service: Some Whois databases or services may have their own terms of service or usage policies. Ensure that you read and comply with these terms when accessing or using their data.</li>
                            <li>Report misuse: If you come across any instances of Whois data misuse or abuse, such as spamming or phishing attempts, report them to the appropriate authorities or service providers.</li>
                        </ul>
                    </div>
                </div>
        }
    },
    {
        tool: "whatweb",
        data: {
            title: "webanalysis",
            info:
                <div className='toolData'>
                    <div className='titleDiv' />
                    <strong>WhatWeb Tool</strong>
                    <div className='infoTab'>
                        <b>Risk Description:</b>
                        <p>The WhatWeb tool carries some risks that you should be aware of:</p>
                        <ul>
                            <li>False positives: The tool may sometimes generate false positive results, indicating the presence of certain technologies or vulnerabilities that may not actually exist on the target website.</li>
                            <li>Incomplete or outdated information: The tool relies on public information and fingerprinting techniques, which may not always provide complete or up-to-date results. The technology stack of a website can change over time, and new technologies may not be accurately detected.</li>
                            <li>Legal considerations: The use of WhatWeb tool on websites may be subject to legal restrictions or terms of service. Ensure that you have proper authorization before scanning and analyzing any website.</li>
                        </ul>
                        <b>Recommendations:</b>
                        <ul>
                            <li>Verify results: Always manually verify the identified technologies or vulnerabilities through additional methods, such as manual inspection or other security tools, to confirm their presence.</li>
                            <li>Stay up to date: Keep the WhatWeb tool and its associated fingerprint database updated to benefit from the latest improvements and accurate detection of technologies.</li>
                            <li>Respect website policies: Adhere to the terms of service or usage policies of websites when performing analysis with the WhatWeb tool. Ensure that you have proper authorization and permission to scan and analyze a website.</li>
                            <li>Share findings responsibly: If you discover any potential vulnerabilities or security issues during website analysis, follow responsible disclosure practices and report them to the appropriate parties.</li>
                        </ul>
                    </div>
                </div>
        }
    },
    {
        tool: "dig",
        data: {
            title: "dnslookup",
            info:
                <div className='toolData'>
                    <div className='titleDiv' />
                    <strong>Dig Tool</strong>
                    <div className='infoTab'>
                        <b>Risk Description:</b>
                        <p>The Dig tool carries some risks that you should be aware of:</p>
                        <ul>
                            <li>Exposure of sensitive information: Running a Dig query may reveal sensitive information about a domain's DNS infrastructure, including IP addresses, nameservers, and other DNS records. This information can be misused for malicious purposes.</li>
                            <li>Legal and privacy considerations: Accessing and using DNS information may be subject to specific legal regulations or privacy policies. It's important to understand and comply with the relevant laws and regulations.</li>
                            <li>Interpretation of results: Dig results require technical knowledge to interpret correctly. Misinterpretation of the results can lead to incorrect conclusions or actions.</li>
                        </ul>
                        <b>Recommendations:</b>
                        <ul>
                            <li>Use responsibly: Only use the Dig tool for legitimate purposes and ensure compliance with applicable laws and regulations.</li>
                            <li>Protect privacy: Be mindful of the sensitive information revealed by Dig queries and avoid sharing it with unauthorized parties.</li>
                            <li>Verify information independently: If you rely on Dig results for critical decisions or actions, verify the information independently from multiple sources to ensure its accuracy.</li>
                            <li>Stay up to date: Keep the Dig tool and its associated dependencies updated to benefit from bug fixes, performance improvements, and new features.</li>
                            <li>Respect DNS policies: Adhere to the DNS policies and terms of service of the domains you query with the Dig tool.</li>
                        </ul>
                    </div>
                </div>
        }


    },
    {
        tool: "nuclei",
        data: {
            title: "httpheaderanalysis",
            info:
                <div className='toolData'>
                    <div className='titleDiv' />
                    <strong>Nuclei-HTTPHeader Tool</strong>
                    <div className='infoTab'>
                        <b>Risk Description:</b>
                        <p>The Nuclei-HTTPHeader tool carries some risks that you should be aware of:</p>
                        <ul>
                            <li>False positives: The tool may occasionally generate false positive results, indicating the presence of certain HTTP headers that may not actually exist on the target website.</li>
                            <li>Incomplete or inaccurate results: The tool relies on predefined templates and regex patterns to detect specific HTTP headers. It may not cover all possible headers or variations, leading to incomplete or inaccurate results.</li>
                            <li>Legal considerations: The use of Nuclei-HTTPHeader tool on websites may be subject to legal restrictions or terms of service. Ensure that you have proper authorization before scanning and analyzing any website.</li>
                        </ul>
                        <b>Recommendations:</b>
                        <ul>
                            <li>Verify results: Always manually verify the identified HTTP headers through additional methods, such as manual inspection or other security tools, to confirm their presence and significance.</li>
                            <li>Stay up to date: Keep the Nuclei-HTTPHeader tool and its associated templates updated to benefit from the latest improvements and accurate detection of HTTP headers.</li>
                            <li>Respect website policies: Adhere to the terms of service or usage policies of websites when performing analysis with the Nuclei-HTTPHeader tool. Ensure that you have proper authorization and permission to scan and analyze a website.</li>
                            <li>Share findings responsibly: If you discover any potential vulnerabilities or security issues related to HTTP headers during website analysis, follow responsible disclosure practices and report them to the appropriate parties.</li>
                        </ul>
                    </div>
                </div>
        }


    },
    {
        tool: "dnsscan",
        data: {
            title: "dnsreconanalysis",
            info:
                <div className='toolData'>
                    <div className='titleDiv' />
                    <strong>DnsRecon Tool</strong>
                    <div className='infoTab'>
                        <b>Risk Description:</b>
                        <p>The DnsRecon tool carries some risks that you should be aware of:</p>
                        <ul>
                            <li>Exposure of sensitive information: Running a DnsRecon scan may reveal sensitive information about a domain's DNS infrastructure, including subdomains, DNS records, and potential misconfigurations. This information can be misused for malicious purposes.</li>
                            <li>Legal and privacy considerations: Accessing and using DNS information may be subject to specific legal regulations or privacy policies. It's important to understand and comply with the relevant laws and regulations.</li>
                            <li>False positives and false negatives: The tool's results may not always be 100% accurate. It may generate false positive or false negative results, which require manual verification for accurate analysis.</li>
                        </ul>
                        <b>Recommendations:</b>
                        <ul>
                            <li>Use responsibly: Only use the DnsRecon tool for legitimate purposes and ensure compliance with applicable laws and regulations.</li>
                            <li>Protect privacy: Be mindful of the sensitive information revealed by DnsRecon scans and avoid sharing it with unauthorized parties.</li>
                            <li>Verify information independently: If you rely on DnsRecon results for critical decisions or actions, verify the information independently from multiple sources to ensure its accuracy.</li>
                            <li>Stay up to date: Keep the DnsRecon tool and its associated dependencies updated to benefit from bug fixes, performance improvements, and new features.</li>
                            <li>Respect DNS policies: Adhere to the DNS policies and terms of service of the domains you scan with the DnsREcon tool.</li>
                        </ul>
                    </div>
                </div>
        }


    },
    {
        tool: "sslscan",
        data: {
            title: "sslscananalysis",
            info:
                <div className='toolData'>
                    <div className='titleDiv' />
                    <strong>SSLScan Tool</strong>
                    <div className='infoTab'>
                        <b>Risk Description:</b>
                        <p>The SSLScan tool carries some risks that you should be aware of:</p>
                        <ul>
                            <li>Exposure of sensitive information: Running an SSLScan may reveal information about a website's SSL/TLS configuration, including supported cipher suites, SSL versions, and potential vulnerabilities. This information can be misused for malicious purposes.</li>
                            <li>Legal and compliance considerations: Conducting SSL scans may be subject to legal restrictions, compliance requirements, or terms of service. Ensure that you have proper authorization and follow applicable regulations and guidelines.</li>
                            <li>False positives and false negatives: The tool's results may not always be 100% accurate. It may generate false positive or false negative results, which require manual verification for accurate analysis.</li>
                        </ul>
                        <b>Recommendations:</b>
                        <ul>
                            <li>Use responsibly: Only use the SSLScan tool for legitimate purposes and ensure compliance with applicable laws, regulations, and terms of service.</li>
                            <li>Protect privacy: Be mindful of the sensitive information revealed by SSL scans and avoid sharing it with unauthorized parties.</li>
                            <li>Verify results: Manually verify the identified SSL/TLS configuration and potential vulnerabilities through additional methods, such as manual inspection or other security tools.</li>
                            <li>Stay up to date: Keep the SSLScan tool and its associated dependencies updated to benefit from bug fixes, performance improvements, and new features.</li>
                            <li>Respect website policies: Adhere to the terms of service, privacy policies, and usage guidelines of the websites you scan with the SSLScan tool.</li>
                        </ul>
                    </div>
                </div>
        }

    }
]


