import React from "react";
import "../style/footer.css"
import { AiFillMail } from 'react-icons/ai';
export function Footer (){
    return(
        <div className="scanel__footer section__padding">
        <div className="scanel__footer-heading">
          <h1 className="gradient__text">Do you want to take a step towards securing yourself ?</h1>
        </div>
       
        <div className="scanel__footer-links">
            <h4>Get in touch</h4>
            <h4>Thane, Maharashtra</h4>
            <div class="email-container">
              <h4>Email  {<AiFillMail/>}</h4>
              <a href="https://mail.google.com/mail/?view=cm&amp;source=mailto&amp;to=hello@ivinayak.tech" class="email-link">hello@ivinayak.tech</a>
            </div>
        </div>
        <div className="scanel__footer-copyright">
          <p>@2023 ScanEL . All rights reserved.</p>
        </div>
      </div>
    );
}


