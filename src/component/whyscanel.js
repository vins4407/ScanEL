import React from 'react'
import Feature from './Feature';
import "../style/whyScanel.css"


export function Whyscanel()  {
  return (
    <div className='whatscannel section__padding'>
    <div className="scanel__whatscanel " id="wscanel">
    <div className="scanel__whatscanel-feature">
      <Feature title="What is ScanEL" text="This web-based vulnerability scanner offers advanced security for your website, identifying potential weaknesses and providing real-time insights for improved protection. Stay ahead of cyber threats with this user-friendly tool for businesses and organizations." />
    </div>
    <div className="scanel__whatscanel-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="scanel__whatscanel-container">
      <Feature title="Improved security:" text=" By identifying potential security weaknesses, the scanner helps you improve the overall security of your website." />
      <Feature title="Real-time insights: " text="At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b" />
      <Feature title="User-friendly interface:" text="The easy-to-use interface makes it accessible for non-technical users to understand and resolve issues." />
      <Feature title="Time-saving:" text=" Automating the process of scanning saves time compared to manual vulnerability assessments."/>
    </div>
  </div>
  </div>
  );
}


