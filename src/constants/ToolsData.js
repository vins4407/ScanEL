export const toolsData = [
    {
      tool: "subfinder",
      data: {
        title: "Subdomain Finder",
        info:
        [
          {
            "title": "Subdomain Finder",
            "content": [
              "Subfinder is an open-source subdomain discovery tool used in the field of cybersecurity. It helps security researchers, bug bounty hunters, and penetration testers to find subdomains associated with a target domain."
            ]
          },
          {
            "title": "Features",
            "list": [
              "Fast and efficient subdomain enumeration",
              "Support for multiple DNS data sources to gather subdomain information",
              "Customizable configuration options for fine-tuning the scanning process",
              "Integration with other tools and frameworks in the cybersecurity ecosystem"
            ]
          },
          {
            "title": "Usage Instructions",
            "content": [
              "To use Subfinder, you can run it from the command line interface (CLI) with various options and parameters. Here's an example command:"
            ],
            "code": {
              "description": "This command initiates the subdomain scanning process for the target domain 'targetdomain.com'.",
              "example": "subfinder -d targetdomain.com"
            }
          },
          {
            "title": "Output and Results",
            "content": [
              "Subfinder provides the discovered subdomains in an organized format. The output includes subdomain names, IP addresses, and other relevant DNS records associated with the target domain."
            ]
          },
          {
            "title": "Best Practices",
            "list": [
              "Use multiple data sources for comprehensive subdomain discovery.",
              "Ensure proper authorization and adhere to ethical guidelines when scanning target domains.",
              "Regularly update Subfinder to benefit from the latest features and improvements."
            ]
          },
          {
            "title": "Integration with Application",
            "content": [
              "We have integrated Subfinder into our application, allowing you to initiate subdomain scanning directly from our application. Simply provide the target domain and click the scan button to retrieve the subdomains associated with it.",
              "Please note that subdomain scanning should only be performed on authorized targets and in compliance with applicable laws and regulations.",
              "For more detailed information about Subfinder and its usage, you can refer to the official <a href='https://www.kali.org/tools/subfinder/' target='blanck'> Subfinder documentation</a> and <a href='https://github.com/projectdiscovery/subfinder' target='blanck'>GitHub repository</a>."
            ]
          }
        ]
          
      }
    },
    {
      tool: "nmap",
      data: {
        title: "TCP Scan",
        info: [
            {
              "title": "Nmap",
              "content": [
                "Nmap (Network Mapper) is a powerful open-source network scanning and enumeration tool used in the field of cybersecurity. It is designed to discover hosts, services, and vulnerabilities in a network."
              ]
            },
            {
              "title": "Features",
              "list": [
                "Port scanning to identify open ports on target hosts",
                "Service and version detection to determine running services and their versions",
                "Operating system detection to identify the operating systems of target hosts",
                "Vulnerability scanning to check for known vulnerabilities",
                "Scripting engine for customizing and extending scanning capabilities"
              ]
            },
            {
              "title": "Usage Instructions",
              "content": [
                "Nmap can be used from the command line interface (CLI) with various options and parameters. Here's an example command for a basic TCP port scan:"
              ],
              "code": {
                "description": "This command scans ports 1 to 100 on the target domain 'targetdomain.com'.",
                "example": "nmap -p 1-100 targetdomain.com"
              }
            },
            {
              "title": "Output and Results",
              "content": [
                "Nmap provides detailed output and results from the scanning process. It includes information about open ports, discovered services, operating system fingerprinting, and potential vulnerabilities."
              ]
            },
            {
              "title": "Best Practices",
              "list": [
                "Obtain proper authorization before scanning a network.",
                "Understand the legal implications and adhere to ethical guidelines when using Nmap.",
                "Keep Nmap updated to take advantage of the latest features and bug fixes.",
                "Use appropriate scanning techniques and timing to avoid detection and interference."
              ]
            },
            {
              "title": "Integration with Your application",
              "content": [
                "We have integrated Nmap into our application, allowing you to initiate network scanning directly from our application. Simply provide the target domain or IP address and specify the desired scan options to begin the scanning process.",
                "Please note that network scanning should only be performed on authorized networks and in compliance with applicable laws and regulations.",
                "For more detailed information about Nmap and its usage, you can refer to the <a href='https://nmap.org/book/man.html)' target='blanck'>[Nmap reference guide]</a> and <a href='https://nmap.org/' target='blanck'>[official Nmap website]</a>"
              ]
            }
          ]
        }
        
    },
    {
      tool: "whois",
      data: {
        title: "Whois",
        info: [
            {
              "title": "WHOIS",
              "content": [
                "WHOIS is a protocol used for querying databases that store information about registered domain names, IP addresses, and related entities. It provides details such as the domain owner, registration date, expiration date, and contact information."
              ]
            },
            {
              "title": "Features",
              "list": [
                "Retrieval of registration information for domain names and IP addresses",
                "Access to details such as domain ownership, registration dates, and contact information",
                "Identification of domain name servers (DNS) and their associated IP addresses",
                "Verification of domain name availability and status",
                "Ability to retrieve information for various top-level domains (TLDs)"
              ]
            },
            {
              "title": "Usage Instructions",
              "content": [
                "WHOIS queries can be performed through various online WHOIS lookup tools or using the WHOIS command from the command line interface (CLI). Here's an example command to retrieve WHOIS information for a domain:"
              ],
              "code": {
                "description": "This command queries the WHOIS database for information about the domain 'example.com'.",
                "example": "whois example.com"
              }
            },
            {
              "title": "Output and Results",
              "content": [
                "WHOIS provides detailed output containing information about the queried domain or IP address. It includes registration details, contact information, domain status, and more, depending on the availability of information in the WHOIS database."
              ]
            },
            {
              "title": "Best Practices",
              "list": [
                "Use WHOIS for legitimate purposes and adhere to the terms of service of the WHOIS service provider.",
                "Respect privacy and avoid misuse of the obtained information.",
                "Combine WHOIS results with additional research for comprehensive domain intelligence."
              ]
            },
            {
              "title": "Integration with Your application",
              "content": [
                "We have integrated WHOIS functionality into our application, allowing you to retrieve WHOIS information directly from our application. Simply provide the domain name or IP address and click the 'Search' button to retrieve the relevant registration details.",
                "Please note that WHOIS queries should be performed responsibly and in compliance with applicable laws and regulations.",
                "For more detailed information about WHOIS and its usage, you can refer to the <a href='https://www.whois.com/' target='blanck'>  [WHOIS website]</a> or consult WHOIS documentation provided by relevant domain registrars or WHOIS service providers."
              ]
            }
          ]
  
      }
    },
    {//whaweb
      tool: "whatweb",
      data: {
        title: "WhatWeb",
        info: [
            {
              "title": "WhatWeb",
              "content": [
                "WhatWeb is a web fingerprinting tool used for identifying technologies and software used by a target website. It provides valuable information about the web server, content management systems (CMS), programming languages, and other components present on the website."
              ]
            },
            {
              "title": "Features",
              "list": [
                "Detection of web server software and version",
                "Identification of CMS platforms, such as WordPress, Joomla, Drupal, etc.",
                "Recognition of web frameworks and programming languages",
                "Analysis of cookies, headers, and other web components"
              ]
            },
            {
              "title": "Usage Instructions",
              "content": [
                "To use WhatWeb, you can run it from the command line interface (CLI) with the target website's URL. Here's an example command:"
              ],
              "code": {
                "description": "This command initiates the web fingerprinting process for the target website 'example.com' and provides detailed information about the technologies and software used by the website.",
                "example": "whatweb example.com"
              }
            },
            {
              "title": "Output and Results",
              "content": [
                "WhatWeb provides a comprehensive report of the identified technologies and software used by the target website. The output includes details about the web server, CMS platforms, programming languages, and other relevant components. It helps in understanding the website's technology stack and potential vulnerabilities associated with specific software versions."
              ]
            },
            {
              "title": "Best Practices",
              "list": [
                "Combine the results of WhatWeb with additional vulnerability assessments and security testing to uncover potential weaknesses",
                "Stay up to date with the latest versions and security patches for the identified software components",
                "Regularly perform web fingerprinting to detect any changes or additions to the website's technology stack"
              ]
            },
            {
              "title": "Integration with Your Applications",
              "content": [
                "WhatWeb can be integrated into your own applications or systems by invoking the command programmatically and parsing the output. This allows you to automate the web fingerprinting process and incorporate the results into your existing security workflows.",
                "Please note that web fingerprinting should only be performed on authorized targets and in compliance with applicable laws and regulations.",
                "For more detailed information about WhatWeb and its usage, you can refer to the official documentation and project repository on <a href='https://github.com/urbanadventurer/WhatWeb' target='blanck'>[GitHub repository]</a>."
              ]
            }
          ]
        
        
      }
    },
    { //dig tool/
      tool: "dig",
      data: {
        title: "Dig",
        info: [
            {
              "title": "Dig",
              "content": [
                "dig is a command-line tool used for querying DNS (Domain Name System) servers. It provides detailed information about DNS records and can be helpful for network troubleshooting and DNS analysis."
              ]
            },
            {
              "title": "Features",
              "list": [
                "Query DNS servers for various record types, including A, AAAA, CNAME, MX, TXT, and more",
                "Perform DNS lookups to obtain IP addresses associated with domain names",
                "Retrieve detailed DNS information, such as nameserver records and TTL (Time to Live) values",
                "Support for advanced options like setting the DNS server, specifying the query type, and enabling recursion"
              ]
            },
            {
              "title": "Usage Instructions",
              "content": [
                "To use dig, open a command-line interface (CLI) and enter the following command format:"
              ],
              "code": {
                "description": "Replace [options] with any desired command options and [domain] with the domain name you want to query. For example:",
                "example": "dig example.com"
              }
            },
            {
              "title": "Output and Results",
              "content": [
                "dig provides detailed output containing DNS record information. The results include the queried domain's IP address, nameserver records, TTL values, and other relevant DNS data."
              ]
            },
            {
              "title": "Best Practices",
              "list": [
                "Use appropriate query options and record types for specific DNS troubleshooting or analysis tasks.",
                "Ensure proper authorization and adhere to ethical guidelines when performing DNS queries.",
                "Stay up to date with the latest version of dig to benefit from bug fixes and new features."
              ]
            },
            {
              "title": "Integration with Your Application",
              "content": [
                "You can integrate dig into your application or system by invoking the dig command programmatically. This allows you to perform DNS queries within your application and process the results as needed.",
                "Please note that DNS queries should be performed responsibly and in compliance with applicable laws and regulations.",
                "For more detailed information about dig and its usage, you can refer to the <a href='https://manpages.debian.org/buster/dnsutils/dig.1.en.html' target='blanck'>  [official dig manual page]</a> and other relevant documentation."
              ]
            }
          ]
      }
    },
    {// nuclei
      tool: "nuclei",
      data: {
        title: "Nuclei-HTTPHeader",
        info: [
            {
              "title": "Nuclei-HTTPHeader",
              "content": [
                "Nuclei is a powerful vulnerability scanner designed for identifying security issues in web applications and services. It provides a flexible framework that allows you to define and execute security checks for various types of vulnerabilities, misconfigurations, and exposed sensitive information."
              ]
            },
            {
              "title": "Features",
              "list": [
                "Fast and efficient scanning of web applications and services",
                "Support for a wide range of security checks and vulnerability categories",
                "Customizable templates and powerful rule-based engine",
                "Easy integration with other tools and workflows",
                "Reporting of identified security issues and vulnerabilities"
              ]
            },
            {
              "title": "Usage Instructions",
              "content": [
                "Nuclei can be used from the command line interface (CLI) or integrated into automated workflows. Here's an example command to run a set of predefined security checks:"
              ],
              "code": {
                "description": "This command runs Nuclei with a set of predefined templates for vulnerabilities against the targets listed in the \"targets.txt\" file.",
                "example": "nuclei -t vulnerabilities/ -l targets.txt"
              }
            },
            {
              "title": "Output and Results",
              "content": [
                "Nuclei provides detailed output and reports on the identified security issues and vulnerabilities. It includes information about the affected targets, the type of vulnerability, and any relevant details or recommendations for remediation."
              ]
            },
            {
              "title": "Best Practices",
              "list": [
                "Ensure that you have proper authorization and permission before scanning web applications and services.",
                "Use Nuclei responsibly and comply with ethical guidelines and legal requirements.",
                "Regularly update Nuclei and its templates to benefit from the latest security checks.",
                "Combine Nuclei with other security tools and manual testing for comprehensive vulnerability assessment."
              ]
            },
            {
              "title": "Integration with Your application",
              "content": [
                "We have integrated Nuclei into our application, allowing you to perform vulnerability scanning directly from our application. Simply provide the target URL or IP address and select the desired security checks to initiate the scanning process.",
                "It's important to note that vulnerability scanning should only be performed on authorized targets and in compliance with applicable laws and regulations.",
                "For more detailed information about Nuclei and its usage, you can refer to the official documentation or the project's <a href='https://github.com/projectdiscovery/nuclei' target='blanck'>  [GitHub repository]</a>."
              ]
            }
          ]
        
        
      }
    },
    {//Dns
      tool: "dnsscan",
      data: {
        title: "Dns-Scan",
        info: [
          {
            title: "DNS Scan Tool",
            content: [
              "The DNS Scan Tool is a powerful utility used for scanning and analyzing DNS records associated with a domain. It helps in identifying potential misconfigurations, vulnerabilities, and other issues related to DNS infrastructure."
            ]
          },
          {
            title: "Features",
            list: [
              "Comprehensive scanning of DNS records, including A, AAAA, CNAME, MX, TXT, and more",
              "Detection of common DNS misconfigurations and security weaknesses",
              "Validation of DNSSEC signatures for enhanced security",
              "Identification of subdomains and associated IP addresses"
            ]
          },
          {
            title: "Usage Instructions",
            content: [
              "To use the DNS Scan Tool, provide the target domain name and initiate the scanning process. Here's an example command:"
            ],
            code: {
              description: "This command scans the DNS records associated with the target domain 'targetdomain.com' and provides detailed information about the domain's DNS configuration.",
              example: "dnsscan targetdomain.com"
            }
          },
          {
            title: "Output and Results",
            content: [
              "The DNS Scan Tool generates a report that includes the scanned DNS records, their corresponding values, and additional information such as TTL (Time to Live) values, record types, and DNSSEC status. It helps in identifying any anomalies or misconfigurations that may exist within the domain's DNS setup."
            ]
          },
          {
            title: "Best Practices",
            list: [
              "Regularly scan and monitor DNS records for potential security issues or unauthorized changes",
              "Ensure proper DNS record management and adhere to industry best practices",
              "Implement DNSSEC to enhance the security and integrity of your DNS infrastructure"
            ]
          },
          {
            title: "Integration with Your Applications",
            content: [
              "The DNS Scan Tool can be integrated into your own applications or systems through its API or command-line interface. This allows you to automate DNS scanning and incorporate the results into your existing security workflows or monitoring systems.",
              "Please note that DNS scanning should only be performed on authorized targets and in compliance with applicable laws and regulations.",
              "For more detailed information about the DNS Scan Tool and its usage, you can refer to the official documentation and project repository on <a href='https://github.com/rbsec/dnscan.git' target='blanck'>GitHub</a>."
            ]
          }
        ]
      }
    },
    {
      tool: "sslscan",
      data: {
        title: "Sslscan",
        info: [
          {
            title: "SSL Scan",
            content: [
              "SSL Scan is a tool used for assessing the security configuration of SSL/TLS connections on web servers. It helps in identifying potential vulnerabilities and weaknesses in the SSL/TLS implementation."
            ]
          },
          {
            title: "Features",
            list: [
              "Comprehensive assessment of SSL/TLS configurations",
              "Detection of weak cipher suites and SSL/TLS protocol versions",
              "Verification of certificate validity and chain of trust",
              "Identification of vulnerable SSL/TLS configurations, such as deprecated encryption algorithms and insecure settings"
            ]
          },
          {
            title: "Usage Instructions",
            content: [
              "To use SSL Scan, you can run it from the command line interface (CLI) with various options and parameters. Here's an example command:"
            ],
            code: {
              description: "This command initiates an SSL scan on the target domain 'example.com' and provides a detailed report of the SSL/TLS configuration.",
              example: "sslscan example.com"
            }
          },
          {
            title: "Output and Results",
            content: [
              "SSL Scan provides a detailed report of the SSL/TLS configuration. The output includes information about the SSL/TLS protocol version, supported cipher suites, certificate details, and any detected vulnerabilities or weaknesses."
            ]
          },
          {
            title: "Best Practices",
            list: [
              "Regularly perform SSL scanning to identify security weaknesses and ensure a secure SSL/TLS configuration",
              "Stay up-to-date with the latest SSL/TLS best practices and security recommendations",
              "Implement secure cipher suites and strong SSL/TLS protocols",
              "Renew SSL certificates before expiration and maintain a proper certificate management process"
            ]
          },
          {
            title: "Integration with Your Application",
            content: [
              "You can integrate SSL Scan into your application or system by invoking the SSL scanning command programmatically. This allows you to assess the SSL/TLS security of your application's endpoints and take necessary actions based on the scan results.",
              "Please note that SSL scanning should only be performed on authorized targets and in compliance with applicable laws and regulations.",
              "For more detailed information about SSL Scan and its usage, you can refer to the documentation or official sources of the specific SSL scanning tool you are using."
            ]
          }
        ]
      }
    }
  
  
  ]
  