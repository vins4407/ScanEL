export const vulInfo=[
    {  "Backup file": {
          "desc": "It may be possible to find backup files of scripts on the webserver...",
          "sol": "The webadmin must manually delete the backup files or remove it from the web root...",
          "ref": {
            "OWASP: Review Old Backup and Unreferenced Files for Sensitive Information": "https://owasp.org/www-project-web-security-testing-guide/stable/4-Web_Application_Security_Testing/02-Configuration_and_Deployment_Management_Testing/04-Review_Old_Backup_and_Unreferenced_Files_for_Sensitive_Information.html",
            "CWE-530: Exposure of Backup File to an Unauthorized Control Sphere": "https://cwe.mitre.org/data/definitions/530.html"
          }
        }
      },
      {"Blind SQL Injection": {
        "desc": "Blind SQL injection is a technique that exploits a vulnerability occurring in the database of an application. This kind of vulnerability is harder to detect than basic SQL injections because no error message will be displayed on the webpage.",
        "sol": "To protect against SQL injection, user input must not directly be embedded in SQL statements. Instead, user input must be escaped or filtered or parameterized statements must be used.",
        "ref": {
          "OWASP: Blind SQL Injection": "https://owasp.org/www-community/attacks/Blind_SQL_Injection",
          "Wikipedia: SQL injection": "https://en.wikipedia.org/wiki/SQL_injection",
          "CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')": "https://cwe.mitre.org/data/definitions/89.html"
        }
      },
    },
    {"Weak credentials": {
        "desc": "The web application is using either default credentials or weak passwords that can be found in well-known passwords lists.",
        "sol": "Do not ship or deploy with any default credentials, particularly for admin users. Implement weak-password checks, such as testing new or changed passwords against a list of the top 10000 worst passwords.",
        "ref": {
          "CWE-798: Use of Hard-coded Credentials": "https://cwe.mitre.org/data/definitions/798.html",
          "CWE-521: Weak Password Requirements": "https://cwe.mitre.org/data/definitions/521.html"
        }
      }
    },
    { "CRLF Injection": {
        "desc": "The term CRLF refers to Carriage Return (ASCII 13, \\r) Line Feed (ASCII 10, \\n). A CRLF Injection attack occurs when a user manages to submit a CRLF into an application. This is most commonly done by modifying an HTTP parameter or URL.",
        "sol": "Check the submitted parameters and do not allow CRLF to be injected when it is not expected.",
        "ref": {
          "OWASP: CRLF Injection": "https://owasp.org/www-community/vulnerabilities/CRLF_Injection",
          "Acunetix: What Are CRLF Injection Attacks": "https://www.acunetix.com/websitesecurity/crlf-injection/",
          "CWE-93: Improper Neutralization of CRLF Sequences ('CRLF Injection')": "https://cwe.mitre.org/data/definitions/93.html"
        }
      }
    },

    {  "Content Security Policy Configuration": {
        "desc": "Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks, including Cross Site Scripting (XSS) and data injection attacks.",
        "sol": "Configuring Content Security Policy involves adding the Content-Security-Policy HTTP header to a web page and giving it values to control what resources the user agent is allowed to load for that page.",
        "ref": {
          "Mozilla: Content Security Policy (CSP)": "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
          "OWASP: Content Security Policy Cheat Sheet": "https://cheatsheetseries.owasp.org/cheatsheets/Content_Security_Policy_Cheat_Sheet.html",
          "OWASP: How to do Content Security Policy (PDF)": "https://owasp.org/www-pdf-archive/2019-02-22_-_How_do_I_Content_Security_Policy_-_Print.pdf"
        }
      }
    },
    {
      "Cross Site Request Forgery": {
        "desc": "Cross-Site Request Forgery (CSRF) is an attack that forces an end user to execute unwanted actions on a web application in which they're currently authenticated.",
        "sol": "Check if your framework has built-in CSRF protection and use it. If framework does not have built-in CSRF protection add CSRF tokens to all state changing requests (requests that cause actions on the site) and validate them on backend.",
        "ref": {
          "OWASP: Testing for Cross Site Request Forgery": "https://owasp.org/www-project-web-security-testing-guide/stable/4-Web_Application_Security_Testing/06-Session_Management_Testing/05-Testing_for_Cross_Site_Request_Forgery.html",
          "OWASP: Cross-Site Request Forgery Prevention Cheat Sheet": "https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html",
          "CWE-352: Cross-Site Request Forgery (CSRF)": "https://cwe.mitre.org/data/definitions/352.html"
        }
      },},
      {"Potentially dangerous file": {
        "desc": "A file with potential vulnerabilities has been found on the website.",
        "sol": "Make sure the script is up-to-date and restrict access to it if possible.",
        "ref": {
          "Mitre: Search details of a CVE": "https://cve.mitre.org/cve/search_cve_list.html"
        }
      },},
     { "Command execution": {
        "desc": "This attack consists in executing system commands on the server. The attacker tries to inject this commands in the request parameters.",
        "sol": "Prefer working without user input when using file system calls.",
        "ref": {
          "OWASP: Command Injection": "https://owasp.org/www-community/attacks/Command_Injection",
          "CWE-78: Improper Neutralization of Special Elements used in an OS Command ('OS Command Injection')": "https://cwe.mitre.org/data/definitions/78.html"
        }
      },},
      {"Path Traversal": {
        "desc": "This attack is known as Path or Directory Traversal. Its aim is the access to files and directories that are stored outside the web root folder. The attacker tries to explore the directories stored in the web server. The attacker uses some techniques, for instance, the manipulation of variables that reference files with 'dot-dot-slash (../)' sequences and its variations to move up to root directory to navigate through the file system.",
        "sol": "Prefer working without user input when using file system calls. Use indexes rather than actual portions of file names when templating or using language files (eg: value 5 from the user submission = Czechoslovakian, rather than expecting the user to return 'Czechoslovakian'). Ensure the user cannot supply all parts of the path - surround it with your path code. Validate the user's input by only accepting known good - do not sanitize the data. Use chrooted jails and code access policies to restrict where the files can be obtained or saved to.",
        "ref": {
          "OWASP: Path Traversal": "https://owasp.org/www-community/attacks/Path_Traversal",
          "Acunetix: What is a Directory Traversal attack?": "https://www.acunetix.com/websitesecurity/directory-traversal/",
          "CWE-22: Improper Limitation of a Pathname to a Restricted Directory ('Path Traversal')": "https://cwe.mitre.org/data/definitions/22.html"
        }
      },},
      {"Htaccess Bypass": {
        "desc": "Htaccess files are used to restrict access to some files or HTTP method. In some case it may be possible to bypass this restriction and access the files.",
        "sol": "Make sure every HTTP method is forbidden if the credentials are bad.",
        "ref": {
          "A common Apache .htaccess misconfiguration": "http://blog.teusink.net/2009/07/common-apache-htaccess-misconfiguration.html",
          "CWE-538: Insertion of Sensitive Information into Externally-Accessible File or Directory": "https://cwe.mitre.org/data/definitions/538.html"
        }
      },},
     { "HTTP Secure Headers": {
        "desc": "HTTP security headers tell the browser how to behave when handling the website's content.",
        "sol": "Use the recommendations for hardening your HTTP Security Headers.",
        "ref": {
          "Netsparker: HTTP Security Headers: An Easy Way to Harden Your Web Applications": "https://www.netsparker.com/blog/web-security/http-security-headers/",
          "KeyCDN: Hardening Your HTTP Security Headers": "https://www.keycdn.com/blog/http-security-headers",
          "OWASP: HTTP SECURITY HEADERS (Protection For Browsers) (PDF)": "https://owasp.org/www-chapter-ghana/assets/slides/HTTP_Header_Security.pdf"
        }
      },},
      {"HttpOnly Flag cookie": {
        "desc": "HttpOnly is an additional flag included in a Set-Cookie HTTP response header. Using the HttpOnly flag when generating a cookie helps mitigate the risk of client side script accessing the protected cookie (if the browser supports it).",
        "sol": "While creation of the cookie, make sure to set the HttpOnly Flag to True.",
        "ref": {
          "OWASP: Testing for Cookies Attributes": "https://owasp.org/www-project-web-security-testing-guide/stable/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html",
          "OWASP: HttpOnly": "https://owasp.org/www-community/HttpOnly"
        }
      },},
      {"Open Redirect": {
        "desc": "Unvalidated redirects and forwards are possible when a web application accepts untrusted input that could cause the web application to redirect the request to a URL contained within untrusted input. By modifying untrusted URL input to a malicious site, an attacker may successfully launch a phishing scam and steal user credentials.",
        "sol": "Force all redirects to first go through a page notifying users that they are going off of your site, and have them click a link to confirm.",
        "ref": {
          "Unvalidated Redirects and Forwards Cheat Sheet": "https://cheatsheetseries.owasp.org/cheatsheets/Unvalidated_Redirects_and_Forwards_Cheat_Sheet.html",
          "Acunetix: What Are Open Redirects?": "https://www.acunetix.com/blog/web-security-zone/what-are-open-redirects/",
          "CWE-601: URL Redirection to Untrusted Site ('Open Redirect')": "https://cwe.mitre.org/data/definitions/601.html"
        }
      },},
     { "Secure Flag cookie": {
        "desc": "The secure flag is an option that can be set by the application server when sending a new cookie to the user within an HTTP Response. The purpose of the secure flag is to prevent cookies from being observed by unauthorized parties due to the transmission of a the cookie in clear text.",
        "sol": "When generating the cookie, make sure to set the Secure Flag to True.",
        "ref": {
          "OWASP: Testing for Cookies Attributes": "https://owasp.org/www-project-web-security-testing-guide/stable/4-Web_Application_Security_Testing/06-Session_Management_Testing/02-Testing_for_Cookies_Attributes.html",
          "OWASP: Secure Cookie Attribute": "https://owasp.org/www-community/controls/SecureCookieAttribute"
        }
      },},
     { "SQL Injection": {
        "desc": "SQL injection vulnerabilities allow an attacker to alter the queries executed on the backend database. An attacker may then be able to extract or modify information stored in the database or even escalate his privileges on the system.",
        "sol": "To protect against SQL injection, user input must not directly be embedded in SQL statements. Instead, user input must be escaped or filtered or parameterized statements must be used.",
        "ref": {
          "OWASP: SQL Injection": "https://owasp.org/www-community/attacks/SQL_Injection",
          "Wikipedia: SQL injection": "https://en.wikipedia.org/wiki/SQL_injection",
          "CWE-89: Improper Neutralization of Special Elements used in an SQL Command ('SQL Injection')": "https://cwe.mitre.org/data/definitions/89.html"
        }
      },},
      {"Server Side Request Forgery": {
        "desc": "The target application may have functionality for importing data from a URL, publishing data to a URL or otherwise reading data from a URL that can be tampered with.",
        "sol": "Every URI received by the web application should be checked, especially scheme and hostname. A whitelist should be used.",
        "ref": {
          "OWASP: Server Side Request Forgery": "https://owasp.org/www-community/attacks/Server_Side_Request_Forgery",
          "Acunetix: What is Server Side Request Forgery (SSRF)?": "https://www.acunetix.com/blog/articles/server-side-request-forgery-vulnerability/",
          "What is the Server Side Request Forgery Vulnerability & How to Prevent It?": "https://www.netsparker.com/blog/web-security/server-side-request-forgery-vulnerability-ssrf/",
          "CWE-918: Server-Side Request Forgery (SSRF)": "https://cwe.mitre.org/data/definitions/918.html"
        }
      },},
     { "Cross Site Scripting": {
        "desc": "Cross-site scripting (XSS) is a type of computer security vulnerability typically found in web applications which allow code injection by malicious web users into the web pages viewed by other users. Examples of such code include HTML code and client-side scripts.",
        "sol": "The best way to protect a web application from XSS attacks is ensure that the application performs validation of all headers, cookies, query strings, form fields, and hidden fields. Encoding user supplied output in the server side can also defeat XSS vulnerabilities by preventing inserted scripts from being transmitted to users in an executable form. Applications can gain significant protection from javascript based attacks by converting the following characters in all generated output to the appropriate HTML entity encoding:<, >, &, ', (, ), #, %, ; , +, -",
        "ref": {
          "OWASP: Cross Site Scripting (XSS)": "https://owasp.org/www-community/attacks/xss/",
          "Wikipedia: Cross-site scripting": "https://en.wikipedia.org/wiki/Cross-site_scripting",
          "CWE-79: Improper Neutralization of Input During Web Page Generation ('Cross-site Scripting')": "https://cwe.mitre.org/data/definitions/79.html"
        }
      },},
      {"XML External Entity": {
        "desc": "An XML External Entity attack is a type of attack against an application that parses XML input. This attack occurs when XML input containing a reference to an external entity is processed by a weakly configured XML parser. This attack may lead to the disclosure of confidential data, denial of service, server side request forgery, port scanning from the perspective of the machine where the parser is located, and other system impacts.",
        "sol": "The safest way to prevent XXE is always to disable DTDs (External Entities) completely.",
        "ref": {
          "OWASP: XML External Entity (XXE) Processing": "https://owasp.org/www-community/vulnerabilities/XML_External_Entity_(XXE)_Processing",
          "PortSwigger: What is XML external entity injection?": "https://portswigger.net/web-security/xxe",
          "CWE-611: Improper Restriction of XML External Entity Reference": "https://cwe.mitre.org/data/definitions/611.html",
          "OWASP: XML External Entity Prevention Cheat Sheet": "https://cheatsheetseries.owasp.org/cheatsheets/XML_External_Entity_Prevention_Cheat_Sheet.html"
        }
      },},
     { "Internal Server Error": {
        "desc": "An error occurred on the server's side, preventing it to process the request. It may be the sign of a vulnerability.",
        "sol": "More information about the error should be found in the server logs.",
        "ref": {
          "Wikipedia: List of 5xx HTTP status codes": "https://en.wikipedia.org/wiki/List_of_HTTP_status_codes#5xx_Server_Error",
          "OWASP: Improper Error Handling": "https://owasp.org/www-community/Improper_Error_Handling"
        }
      },},
      {"Resource consumption": {
        "desc": "It took an abnormal time to the server to respond to a query. An attacker might leverage this kind of weakness to overload the server.",
        "sol": "The involved script is maybe using the server resources (CPU, memory, network, file access...) in a non-efficient way.",
        "ref": {
          "CWE-405: Asymmetric Resource Consumption (Amplification)": "https://cwe.mitre.org/data/definitions/405.html",
          "CWE-400: Uncontrolled Resource Consumption": "https://cwe.mitre.org/data/definitions/400.html"
        }
      },},
     { "Fingerprint web technology": {
        "desc": "The use of a web technology can be deducted due to the presence of its specific fingerprints.",
        "sol": "This is only for informational purposes.",
        "ref": {
          "OWASP: Fingerprint Web Server": "https://owasp.org/www-project-web-security-testing-guide/stable/4-Web_Application_Security_Testing/01-Information_Gathering/02-Fingerprint_Web_Server.html",
          "OWASP: Fingerprint Web Application Framework": "https://owasp.org/www-project-web-security-testing-guide/stable/4-Web_Application_Security_Testing/01-Information_Gathering/08-Fingerprint_Web_Application_Framework.html"
        }
      }}

]