import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBtc } from "@fortawesome/free-brands-svg-icons";
import {
  faLaptopCode,
  faIndianRupee,
  faCode,
} from "@fortawesome/free-solid-svg-icons";

const Services = () => {
  return (
    <div id="services" className="services">
      <h1 className="py-5">My Services</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faLaptopCode}
                  size="2x"
                />
              </div>
              <h3>Web Design</h3>
              <p>
                Web design refers to the design of websites that are displayed
                on the internet. It usually refers to the user experience
                aspects of website development rather than software development.
                Web design used to be focused on designing websites for desktop
                browsers and mobile phones.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faCode} size="2x" />
              </div>
              <h3>Web Devlopment</h3>
              <p>
                Web development refers to the building, creating, and
                maintaining of websites. It includes aspects such as web design,
                web publishing, web programming, and database management. It is
                the creation of an application that works over the internet i.e.
                websites.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faIndianRupee}
                  size="2x"
                />
              </div>
              <h3>Forex Trading</h3>
              <p>
                Forex is a portmanteau of foreign currency and exchange. Foreign
                exchange is the process of changing one currency into another
                for a variety of reasons, usually for commerce, trading, or
                tourism.The foreign exchange market is where most of the
                currencies are traded.
              </p>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faBtc} size="2x" />
              </div>
              <h3>Crypto Trading.</h3>
              <p>
                Cryptocurrency markets are decentralised, which means they are
                not issued or backed by a central authority such as a
                government. Instead, they run across a network of computers.
                However, cryptocurrencies can be bought and sold via exchanges
                and stored in ‘wallets’ .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
