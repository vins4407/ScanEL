export const toolsInfo = [
    {
        tool: "nmap",
        data: {
            title: "portscan",
            info:{
                
                    riskDescription: ["The port scanning activity has identified open ports on the target system. Open ports can provide potential entry points for attackers to exploit vulnerabilities or gain unauthorized access to the system. It is crucial to understand the risks associated with each open port and take appropriate measures to mitigate them."],
                    recommendation: [
                        "Regularly review and analyze the purpose and necessity of each open port. Close any unnecessary ports to minimize the attack surface.",
                        "Ensure that all open ports have the latest security patches and updates applied. Vulnerabilities in services or applications running on open ports can be exploited by attackers.",
                        "Implement proper access control mechanisms to restrict access to open ports. This can include using firewalls, network segmentation, and strong authentication methods.",
                        "Monitor and log network traffic related to open ports. This can help in detecting any suspicious or unauthorized activity and enable timely response and mitigation.",
                        "Conduct regular vulnerability assessments and penetration testing to identify and address any vulnerabilities associated with open ports."
                    ]
                
            }
               
        }
    },
    {
        tool: "subfinder",
        data: {
            title: "Subdomain Finder",
            info:{
            
                riskDescription: [
                    "The Subfinder tool carries some risks that you should be aware of:",
                    "False positives: The tool may occasionally identify subdomains that do not actually exist or are no longer in use. This can lead to wasted time and effort investigating non-existent or irrelevant subdomains.",
                    "False negatives: The tool may miss some subdomains, especially if they are well-hidden or have unique configurations. This can result in potential security blind spots and missed opportunities for further analysis.",
                    "Excessive scanning: Uncontrolled or frequent scanning of subdomains without proper authorization may violate terms of service or legal agreements with the target domain. It is important to ensure you have appropriate permission before conducting subdomain scans."
                ],
                recommendation: [

                    "Verify results: Always manually verify the identified subdomains to confirm their relevance and validity before taking any further actions or investigations.",
                    "Respect target domain policies: Ensure that you have proper authorization from the target domain owner or adhere to any terms of service or legal agreements regarding subdomain scanning.",
                    "Minimize impact: Configure the tool to use appropriate scan settings, such as adjusting the scan depth and timeout, to minimize the impact on the target domain and avoid unnecessary resource consumption.",
                    "Stay up to date: Keep the Subfinder tool and its associated dependencies updated to benefit from bug fixes, performance improvements, and new features.",
                    "Share findings responsibly: If you discover any potential vulnerabilities or sensitive information during subdomain scanning, follow responsible disclosure practices and report them to the appropriate parties."
                ]
            
        }
        }
    },
    {
        tool: "whois",
        data: {
            title: "domainlookup",
            info:
            {
                
                    riskDescription: [
                        "The Whois tool carries some risks that you should be aware of:",
                        "Exposure of sensitive information: Running a Whois query may reveal sensitive information about domain owners, including their contact details. This information can be misused for spamming, phishing, or other malicious purposes.",
                        "Legal and privacy considerations: Accessing and using Whois data may be subject to specific legal regulations or privacy policies in different jurisdictions. It's important to understand and comply with the relevant laws and regulations.",
                        "Incomplete or outdated information: Whois databases may not always provide accurate or up-to-date information. Domain owners can choose to provide false or obfuscated details, and databases may not be regularly updated."
                    ],
                    recommendation: [
    
                        "Use responsibly: Only use the Whois tool for legitimate purposes and ensure compliance with applicable laws and regulations.",
                        "Protect privacy: If you are a domain owner, consider using privacy protection services or options provided by domain registrars to protect your personal information from public access via Whois queries.",
                        "Verify information independently: If you rely on Whois data for any critical decisions or actions, verify the information independently from multiple sources to ensure its accuracy.",
                        "Respect terms of service: Some Whois databases or services may have their own terms of service or usage policies. Ensure that you read and comply with these terms when accessing or using their data.",
                        "Report misuse: If you come across any instances of Whois data misuse or abuse, such as spamming or phishing attempts, report them to the appropriate authorities or service providers."
                    ]
                
            }
        }
    },
    {
        tool: "whatweb",
        data: {
            title: "webanalysis",
            info:{
                    riskDescription: [
                        "The WhatWeb tool carries some risks that you should be aware of:",
                        "False positives: The tool may sometimes generate false positive results, indicating the presence of certain technologies or vulnerabilities that may not actually exist on the target website.",
                        "Incomplete or outdated information: The tool relies on public information and fingerprinting techniques, which may not always provide complete or up-to-date results. The technology stack of a website can change over time, and new technologies may not be accurately detected.",
                        "Legal considerations: The use of WhatWeb tool on websites may be subject to legal restrictions or terms of service. Ensure that you have proper authorization before scanning and analyzing any website."
                    ],
                    recommendation: [
    
                        "Verify results: Always manually verify the identified technologies or vulnerabilities through additional methods, such as manual inspection or other security tools, to confirm their presence.",
                        "Stay up to date: Keep the WhatWeb tool and its associated fingerprint database updated to benefit from the latest improvements and accurate detection of technologies.",
                        "Respect website policies: Adhere to the terms of service or usage policies of websites when performing analysis with the WhatWeb tool. Ensure that you have proper authorization and permission to scan and analyze a website.",
                        "Share findings responsibly: If you discover any potential vulnerabilities or security issues during website analysis, follow responsible disclosure practices and report them to the appropriate parties."
                    ]
                
            }
        }
    },
    {
        tool: "dig",
        data: {
            title: "dnslookup",
            info:{
                
                    riskDescription: [
                        "The Dig tool carries some risks that you should be aware of:",
                        "Exposure of sensitive information: Running a Dig query may reveal sensitive information about a domain's DNS infrastructure, including IP addresses, nameservers, and other DNS records. This information can be misused for malicious purposes.",
                        "Legal and privacy considerations: Accessing and using DNS information may be subject to specific legal regulations or privacy policies. It's important to understand and comply with the relevant laws and regulations.",
                        "Interpretation of results: Dig results require technical knowledge to interpret correctly. Misinterpretation of the results can lead to incorrect conclusions or actions."
                    ],
                    recommendation: [
    
                        "Use responsibly: Only use the Dig tool for legitimate purposes and ensure compliance with applicable laws and regulations.",
                        "Protect privacy: Be mindful of the sensitive information revealed by Dig queries and avoid sharing it with unauthorized parties.",
                        "Verify information independently: If you rely on Dig results for critical decisions or actions, verify the information independently from multiple sources to ensure its accuracy.",
                        "Stay up to date: Keep the Dig tool and its associated dependencies updated to benefit from bug fixes, performance improvements, and new features.",
                        "Respect DNS policies: Adhere to the DNS policies and terms of service of the domains you query with the Dig tool."
                    ]
                
            }
               
        }


    },
    {
        tool: "nuclei",
        data: {
            title: "httpheaderanalysis",
            info:{
                
                    riskDescription: [
                        "The Nuclei-HTTPHeader tool carries some risks that you should be aware of:",
                        "False positives: The tool may occasionally generate false positive results, indicating the presence of certain HTTP headers that may not actually exist on the target website.",
                        "Incomplete or inaccurate results: The tool relies on predefined templates and regex patterns to detect specific HTTP headers. It may not cover all possible headers or variations, leading to incomplete or inaccurate results.",
                        "Legal considerations: The use of Nuclei-HTTPHeader tool on websites may be subject to legal restrictions or terms of service. Ensure that you have proper authorization before scanning and analyzing any website."
                    ],
                    recommendation: [
    
                        "Verify results: Always manually verify the identified HTTP headers through additional methods, such as manual inspection or other security tools, to confirm their presence and significance.",
                        "Stay up to date: Keep the Nuclei-HTTPHeader tool and its associated templates updated to benefit from the latest improvements and accurate detection of HTTP headers.",
                        "Respect website policies: Adhere to the terms of service or usage policies of websites when performing analysis with the Nuclei-HTTPHeader tool. Ensure that you have proper authorization and permission to scan and analyze a website.",
                        "Share findings responsibly: If you discover any potential vulnerabilities or security issues related to HTTP headers during website analysis, follow responsible disclosure practices and report them to the appropriate parties."
                    ]
                
            }
               
        }


    },
    {
        tool: "dnsscan",
        data: {
            title: "dnsreconanalysis",
            info:
            {
                
                    riskDescription: [
                        "The DnsRecon tool carries some risks that you should be aware of:",
                        "Exposure of sensitive information: Running a DnsRecon scan may reveal sensitive information about a domain's DNS infrastructure, including subdomains, DNS records, and potential misconfigurations. This information can be misused for malicious purposes.",
                        "Legal and privacy considerations: Accessing and using DNS information may be subject to specific legal regulations or privacy policies. It's important to understand and comply with the relevant laws and regulations.",
                        "False positives and false negatives: The tool's results may not always be 100% accurate. It may generate false positive or false negative results, which require manual verification for accurate analysis."
                    ],
                    recommendation: [
    
                        "Use responsibly: Only use the DnsRecon tool for legitimate purposes and ensure compliance with applicable laws and regulations.",
                        "Protect privacy: Be mindful of the sensitive information revealed by DnsRecon scans and avoid sharing it with unauthorized parties.",
                        "Verify information independently: If you rely on DnsRecon results for critical decisions or actions, verify the information independently from multiple sources to ensure its accuracy.",
                        "Stay up to date: Keep the DnsRecon tool and its associated dependencies updated to benefit from bug fixes, performance improvements, and new features.",
                        "Respect DNS policies: Adhere to the DNS policies and terms of service of the domains you scan with the DnsRecon tool."
                    ]
                
            }
        }


    },
    {
        tool: "sslscan",
        data: {
            title: "sslscananalysis",
            info:{
                
                    riskDescription: [
                        "The SSLScan tool carries some risks that you should be aware of:",
                        "Exposure of sensitive information: Running an SSLScan may reveal information about a website's SSL/TLS configuration, including supported cipher suites, SSL versions, and potential vulnerabilities. This information can be misused for malicious purposes.",
                        "Legal and compliance considerations: Conducting SSL scans may be subject to legal restrictions, compliance requirements, or terms of service. Ensure that you have proper authorization and follow applicable regulations and guidelines.",
                        "False positives and false negatives: The tool's results may not always be 100% accurate. It may generate false positive or false negative results, which require manual verification for accurate analysis."
                    ],
                    recommendation: [
    
                        "Use responsibly: Only use the SSLScan tool for legitimate purposes and ensure compliance with applicable laws, regulations, and terms of service.",
                        "Protect privacy: Be mindful of the sensitive information revealed by SSL scans and avoid sharing it with unauthorized parties.",
                        "Verify results: Manually verify the identified SSL/TLS configuration and potential vulnerabilities through additional methods, such as manual inspection or other security tools.",
                        "Stay up to date: Keep the SSLScan tool and its associated dependencies updated to benefit from bug fixes, performance improvements, and new features.",
                        "Respect website policies: Adhere to the terms of service, privacy policies, and usage guidelines of the websites you scan with the SSLScan tool."
                    ]
                
            }
                
        }

    }
]