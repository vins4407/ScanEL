import React from "react";
import "../style/footer.css"

export function Footer (){
    return(
        <div className="scanel__footer section__padding">
        <div className="scanel__footer-heading">
          <h1 className="gradient__text">Do you want to take a step towards securing yourself ?</h1>
        </div>
       
        <div className="scanel__footer-links">
          <div className="scanel__footer-links_div">
            <h4>Get in touch</h4>
            <p>Thane, Maharashtra</p>
            <p>085-132567</p>

            <p>rushrusher098gmail.com</p>
          </div>
        </div>
        <div className="scanel__footer-copyright">
          <p>@2023 ScanEL . All rights reserved.</p>
        </div>
      </div>
    );
}


