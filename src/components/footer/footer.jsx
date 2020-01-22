import React, { Component } from 'react';
import './footer.css';
import { Icon, Row, Col } from 'antd';

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-section">
          <div className="left-footer">
            <Row>
              <Col span={6}>
                <div className="footer-nav">About redBus</div>
                <div className="footer-link">
                  <div>About Us</div>
                  <div>Contact Us</div>
                  <div>Mobile Version</div>
                  <div>redBus on Mobile</div>
                  <div>Sitemap</div>
                  <div>Offers</div>
                  <div>Careers</div>
                  <div>Values</div>
                </div>
              </Col>
              <Col span={6}>
                <div className="footer-nav">Info</div>
                <div className="footer-link">
                  <div>T & C</div>
                  <div>Privacy Policy</div>
                  <div>FAQ</div>
                  <div>Blog</div>
                  <div>Agent Registration</div>
                  <div>Insurance Patner</div>
                  <div>User Agreement</div>
                </div>
              </Col>
              <Col span={6}>
                <div className="footer-nav">Global Sites</div>
                <div className="footer-link">
                  <div>India</div>
                  <div>Singapore</div>
                  <div>Malaysia</div>
                  <div>Indonesia</div>
                  <div>Peru</div>
                  <div>Colombia</div>
                </div>
              </Col>
              <Col span={6}>
                <div className="footer-nav">Our Partners</div>
                <div className="footer-link">
                  <div>Goibibo</div>
                  <div>Makemytrip</div>
                </div>
              </Col>
            </Row>
          </div>
          <div className="r-side">
            <div className="f-logo"></div>
            <div className="f-txt">
              redBus is the world's largest online bus ticket booking service
              trusted by over 17 million happy customers globally. redBus offers
              bus ticket booking through its website,iOS and Android mobile apps
              for all major routes.
            </div>
            <div className="fb-logo">
              <Icon type="facebook" />
              <Icon type="twitter" className="tw-logo" />
            </div>
            <span className="f-copyright">
              Ⓒ 2019 ibibogroup All rights reserved
            </span>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
