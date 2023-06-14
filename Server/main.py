from fastapi import FastAPI, Request,HTTPException , Response ,Query
from time import gmtime, strftime
import subprocess
import time
from starlette.middleware.cors import CORSMiddleware
from parse import parse_whois_output , parse_dig_output , parse_subfinder_output ,parse_nmap_output,parse_http_output,parse_sslscan_output,parse_dnsscan_output,parse_whatweb_output, parse_wapiti_output
import os
import socket
import firebase_admin
from firebase_admin import credentials, firestore, storage
import uvicorn
import json

app = FastAPI()


origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

cred = credentials.Certificate("./serviceaccount.json")
firebase_admin.initialize_app(cred, {
    "storageBucket": "scanel-7762e.appspot.com"
})

def is_valid_domain(domain):
    try:
        socket.gethostbyname(domain)
        return True
    except socket.error:
        return False


@app.post("/scan")
async def scan(request: Request, domain: str, scan_type: str, UID: str, nom: int):
    timestamp = str(time.time())
    timer = strftime("%Y-%m-%d %H-%M-%S", gmtime())
    filename = f"{scan_type}_{domain}_{timestamp}.txt"

    if not is_valid_domain(domain):
        raise HTTPException(status_code=400, detail="Invalid domain name")
    elif scan_type == "whois":
        output = subprocess.run(["whois", domain], capture_output=True, text=True)
        result = parse_whois_output(output.stdout)
    elif scan_type == "dig":
        output = subprocess.run(["dig", domain], capture_output=True, text=True)
        result = parse_dig_output(output.stdout)
    elif scan_type == "nmap":
        output = subprocess.run(["nmap",domain], capture_output=True, text=True)
        result = parse_nmap_output(output.stdout)
    elif scan_type == "subfinder":
        output = subprocess.run(["subfinder","--silent","-d", domain], capture_output=True, text=True)
        result = parse_subfinder_output(output.stdout)
    elif scan_type == "wpscan":
        result = subprocess.run(["wpscan","--url", domain], capture_output=True, text=True)
    elif scan_type == "nuclei":
        output = subprocess.run(["nuclei","-u",domain,"-t","/home/vinayak1506/nuclei-templates/http/misconfiguration/http-missing-security-headers.yaml","--silent"], capture_output=True, text=True)
        result = parse_http_output(output.stdout)
    elif scan_type == "whatweb":
        output = subprocess.run(["nuclei","-u",domain,"-t","/home/vinayak1506/nuclei-templates/http/technologies","--silent"], capture_output=True, text=True)
        result = parse_whatweb_output(output.stdout)
    elif scan_type == "sslscan":
        output = subprocess.run(["nuclei","-u",domain,"-t","/home/vinayak1506/nuclei-templates/ssl","--silent"], capture_output=True, text=True)
        result = parse_sslscan_output(output.stdout)
    elif scan_type == "dnsscan":
        output = subprocess.run(["nuclei","-u",domain,"-t","/home/vinayak1506/nuclei-templates/dns","--silent"], capture_output=True, text=True)
        result = parse_dnsscan_output(output.stdout)

    elif scan_type == "wapiti":
        output = subprocess.run(["wapiti","--url", "https://"+domain,"-f","json","-o",filename], capture_output=True, text=True)
        read_file = open(filename, "r")
        result1 = read_file.read()
        read_file.close()
        result = parse_wapiti_output(result1)

    else:
        return "Error"
    print(filename)
    # upload to firebase
    with open(filename, "w") as file:
        file.write(result)

    if os.path.exists(filename):
        # upload to firebase

        bucket = storage.bucket()
        blob = bucket.blob(filename)
        blob.upload_from_filename(filename)
        # add to firestore
        pdf_url = f"https://firebasestorage.googleapis.com/v0/b/scanel-7762e.appspot.com/o/{filename}?alt=media"
        db = firestore.client()
        doc_ref = db.collection("scans").document("txt").collection(UID).document(timer)
        #timer = strftime("%Y-%m-%d %H-%M-%S", gmtime())
        doc_ref.set({
             scan_type : result,
            "Timestamp": timer,
            "Scan_type": scan_type,
            "Domain": domain,
        }, merge=True)
        num1 = "+91"+str(nom)
        text1 = "Hey, Thank you for using Scanel. Your " + scan_type + " scan for " + domain  +" is Completed. you can access your result by using the link: " + pdf_url + " ."
        #send_sms(num1, text1)
        print(result)
        os.remove(filename)  # Remove the temporary file after uploading

        return result
    else:
        return "Error: File not found"



@app.post("/fullscan")
async def full_scan(request: Request, domain: str, UID: str, nom: int):
    timestamp = str(time.time())
    timer = strftime("%Y-%m-%d %H-%M-%S", gmtime())
    results = {}

    if not is_valid_domain(domain):
        raise HTTPException(status_code=400, detail="Invalid domain name")

    output = subprocess.run(["whois", domain], capture_output=True, text=True)
    results["whois"] = parse_whois_output(output.stdout)

    output = subprocess.run(["dig", domain], capture_output=True, text=True, timeout=30)
    results["dig"] = parse_dig_output(output.stdout)

    output = subprocess.run(["nmap", domain], capture_output=True, text=True)
    results["nmap"] = parse_nmap_output(output.stdout)

    output = subprocess.run(["subfinder", "--silent", "-d", domain], capture_output=True, text=True)
    results["subfinder"] = parse_subfinder_output(output.stdout)


    output = subprocess.run(["nuclei", "-u", domain, "-t", "nuclei-templates/http/misconfiguration/http-missing-security-headers.yaml", "--silent"], capture_output=True, text=True)
    results["nuclei"] = parse_http_output(output.stdout)

    output = subprocess.run(["nuclei", "-u", domain, "-t", "nuclei-templates/http/technologies", "--silent"], capture_output=True, text=True)
    results["whatweb"] = parse_whatweb_output(output.stdout)

    output = subprocess.run(["nuclei", "-u", domain, "-t", "nuclei-templates/ssl", "--silent"], capture_output=True, text=True)
    results["sslscan"] = parse_sslscan_output(output.stdout)

    output = subprocess.run(["nuclei", "-u", domain, "-t", "nuclei-templates/dns", "--silent"], capture_output=True, text=True)
    results["dnsscan"] = parse_dnsscan_output(output.stdout)

    output = subprocess.run(["wapiti", "--url", "https://" + domain, "-f", "json", "-o", "wapiti.json"], capture_output=True, text=True)
    read_file = open("wapiti.json", "r")
    results["Vulnerability"] = parse_wapiti_output(read_file.read())
    read_file.close()
    os.remove("wapiti.json")    


    

    results["scan_type"] = "fullscan"
    results["Domain"] = domain

    # Upload results to Firebase
    for scan_type, result in results.items():
        filename = f"{scan_type}_{domain}_{timestamp}.txt"
        with open(filename, "w") as file:
            file.write(result)

        if os.path.exists(filename):
            # Upload to Firebase
            bucket = storage.bucket()
            blob = bucket.blob(filename)
            blob.upload_from_filename(filename)
            # Add to Firestore
            pdf_url = f"https://firebasestorage.googleapis.com/v0/b/scanel-7762e.appspot.com/o/{filename}?alt=media"
            db = firestore.client()
            doc_ref = db.collection("scans").document("txt").collection(UID).document(timer)
            doc_ref.set({
                scan_type: result,
                "Timestamp": timer,
                "Scan_type": "fullscan",
                "Domain": domain,
            }, merge=True)
            num1 = "+91" + str(nom)
            text1 = f"Hey, Thank you for using Scanel. Your {scan_type} scan for {domain} is Completed. You can access your result by using the link: {pdf_url}."
            # send_sms(num1, text1)
            os.remove(filename)  # Remove the temporary file after uploading

    for key, value in results.items():
        results[key] = value.replace('\n', '')

# Convert the dictionary back to JSON string
    json_string = json.dumps(results)
    return results



# Sending report to user is under maintainance
# account_sid = ""
# auth_token = ""
# client = Client(account_sid, auth_token)
# def send_sms(to, body):
#     message = client.messages.create(
#         to=to,
#         from_="+14012914572",
#         body=body
#     )
#     return message.sid

# if __name__ == "__main__":
#     uvicorn.run(app, host="0.0.0.0", port=8000)