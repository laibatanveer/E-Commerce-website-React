import React from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaGooglePlus, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function FooterSection() {
  return (
  <>
    <footer style={{
      height: "50vh",
      backgroundColor: "black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    }}>
      <div className="container py-4">
        <div className="row">
          <div className="col-md-4">
            <h3 className="fst-italic" style={{ color: "#FFE250" }}>
              .beautify
            </h3>
            <p
              className="fst-italic"
              style={{
                fontFamily: "sans-serif",
                color: "white",
                fontSize: "100%",
                fontWeight: "lighter"
              }}
            >
              Unleash Your Beauty Potential!
            </p>
          </div>
        
            <p className="footer-description text-center text-white col-md-4">
              Stay connected with Beautify App on social media and via email. Join us to discover the latest beauty trends, tips, and inspiration.
            </p>
            <div className="col-md-4">
            <div className=" d-flex justify-content-center">
      
           <ul>
       
            <li>
            <Link to="#" className="link-light footer-icon mx-2"><FaInstagram /></Link>

            </li>
            <li>
            <Link to="#" className="link-light footer-icon mx-2"><FaFacebook /></Link>

            </li>
            <li>
            <Link to="#" className=" link-light footer-icon mx-2"><FaTwitter /></Link>

            </li>
            <li>
            <Link to="#" className="link-light footer-icon mx-2"><FaGooglePlus /></Link>

            </li>
            <li>
            <Link to="#" className="link-light footer-icon mx-2"><FaEnvelope /></Link>

            </li>
            </ul>
         
            </div>
           
          </div>
        
        </div>
      </div>
      <p className="footer-rights  text-white">
              © 2023 Beautify App. All rights reserved.
            </p>
    </footer>
  
  </>

  );
}

export default FooterSection;
