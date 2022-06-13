import React from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  LinkedinShareButton,
  LinkedinIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TwitterShareButton,
  TwitterIcon,
} from "react-share";
const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="d-flex">
              <p>
                A/5-601,Jyoti Complex,Film City Road,Goregaon(E),Mumbai:400065
              </p>
            </div>
            <div className="d-flex">
              <a href="tel:8356014987">8356014987</a>
            </div>
            <div className="d-flex">
              <p>rahulchilap123@gmail.com</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-2 col-sm-6">
            <div className="row">
              <div className="col">
                <a className="footer-nav">Home</a>
                <br />
                <a className="footer-nav">About</a>
                <br />
                <a className="footer-nav">Services</a>
              </div>
              <br />
              <div className="col">
                <a className="footer-nav">Experience</a>
                <br />
                <a className="footer-nav">Portfolio</a>
                <br />
                <a className="footer-nav">Contacts</a>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-6 align-items-center">
            <div className="d-flex justify-content-center">
              <FacebookShareButton
                url={"https://www.facebook.com/rahul.chilap/"}
                quote={"Full-Stack Devloper"}
                hashtag="#JavaScripts"
              >
                <FacebookIcon className="mx-3" size={36} />
              </FacebookShareButton>
              <LinkedinShareButton
                url={"https://www.linkedin.com/in/rahul-chilap-081717133/"}
                quote={"Full-Stack Devloper"}
                hashtag="#JavaScripts"
              >
                <LinkedinIcon className="mx-3" size={36} />
              </LinkedinShareButton>
              <WhatsappShareButton
                url={"https://web.whatsapp.com/"}
                quote={"Full-Stack Devloper"}
                hashtag="#JavaScripts"
              >
                <WhatsappIcon className="mx-3" size={36} />
              </WhatsappShareButton>
              <TwitterShareButton
                url={"https://twitter.com/home"}
                quote={"Full-Stack Devloper"}
                hashtag="#JavaScripts"
              >
                <TwitterIcon className="mx-3" size={36} />
              </TwitterShareButton>
            </div>
            <p className="pt-3 text-center">
              Copyright&copy;
              {new Date().getFullYear()}&nbsp;Rahul Chilap | All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
