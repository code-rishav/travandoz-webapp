import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faGoogle,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
const Footer = () => {
  return (
    <div>
      <footer className="site-footer section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-12 mb-4 pb-2">
              <a className="navbar-brand mb-2" href="index.html">
                <i className="bi-back"></i>
                <span>Travandoz</span>
              </a>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <h6 className="site-footer-title mb-3">Resources</h6>
              <ul className="site-footer-links">
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">
                    Home
                  </a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">
                    How it works
                  </a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">
                    FAQs
                  </a>
                </li>
                <li className="site-footer-link-item">
                  <a href="#" className="site-footer-link">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-4 col-6 mb-4 mb-lg-0">
              <h6 className="site-footer-title mb-3">Information</h6>
              <p className="text-white d-flex mb-1">
                <a href="tel:305-240-9671" className="site-footer-link">
                  305-240-9671
                </a>
              </p>
              <p className="text-white d-flex">
                <a href="mailto:info@company.com" className="site-footer-link">
                  info@company.com
                </a>
              </p>
            </div>
           
    </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
