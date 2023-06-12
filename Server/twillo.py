from twilio.rest import Client

# Your Twilio Account SID and Auth Token
account_sid = ""
auth_token = ""

# Create a Twilio client object
client = Client(account_sid, auth_token)


# Function to send SMS
def send_sms(to, body):
    message = client.messages.create(
        to=to,
        from_="+14012914572",
        body=body
    )
    
    return message.sid
    print("it can work")


nom1=9702444720
pdf_url="https://firebasestorage.googleapis.com/v0/b/scanel-7762e.appspot.com/o/whois_google.com_2021-05-30%2010-00-00.txt?alt=media"
nom= "+91" + str(nom1)
text= "Hey, Thanks for using Scanel. Your scan is ready. + " + pdf_url + " ."
# Example usage
send_sms(nom,pdf_url)


