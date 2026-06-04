import "./Footer.css";
import ig from "../../../assets/ig.png";
import yt from "../../../assets/yt.png";
import fb from "../../../assets/fb.png";

const Footer = () => {
  return (
    <div>
      <div className="Footer"></div>
      <hr  className="hr"/>
     
        <div>
          <h2 className="footerhead">Buddha Yoga Studio</h2>
          <p className="footerpara">Vanasthalipuram</p>
          <hr className="hr1" />
          <p className="phonepara">
            <span className="phoneword">Phone:</span>
            <span className="phonenumber"> +919542973829</span>
          </p>
          <p className="phonepara1">
            phase 1, near Complex, H.No.6-1-475, Plot No.C-90, Residential
            Complex, Ramalayam Rd, Vanasthalipuram, Telangana 500070
          </p>
          <div className="socialmedia">
            <a
              href="https://www.facebook.com/buddhayogastudio/?_rdr"
              target="blank"
            >
              <img className="socialicon" src={fb} alt="fb" />
              </a>
              <a href="https://www.instagram.com/you_can_be_a_yogi?igsh=dGZ5dHE0NXIwYWtp">
              <img  className="socialicon" src={ig} alt="ig" /></a>
              <a href="https://www.youtube.com/@Buddha-Yoga-Studios">
              <img className="socialicon"  src={yt} alt="yt" /></a>
              
              
              
            
          </div>
          <p className="termspara">Privacy Policy | Terms & Conditions</p>
          <hr className="hr" />
          <p className="lastpara"> © Copyright © 2025 Buddha Yoga Studio, Vanasthalipuram. All rights reserved.</p>
        </div>
      </div>
    
  );
};

export default Footer;
