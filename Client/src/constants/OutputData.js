import React from "react";
import '../style/Single.css'


export const WhoisTable = ({ whodata }) => {
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
  
  export const Nmapdata = ({ data }) => {
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

  export const SubFinderList = ({ subdomains }) => {
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

  export  const NucleiOutput = ({ headers }) => {
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

  export const DigOutput = ({ digdata }) => {
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

  export const SslOutput = ({ ssldata }) => {
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

  export const WhatwebOutput =({ whatwebdata }) => {
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

export const DnsScan =({ dnsOutput }) => {
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

