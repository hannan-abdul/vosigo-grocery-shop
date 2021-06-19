import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare, faGooglePlusSquare, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';
import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div className="footer-section" style={{ backgroundColor: '#282828', color: 'white' }}>
            <div className="container">
                <div className="row text-left">
                    <div className="col-md-4">
                        <h6><FontAwesomeIcon icon={faMapMarkerAlt} /> Address</h6>
                        <p>123 New York City, USA</p>
                    </div>
                    <div className="col-md-4">
                        <h6><FontAwesomeIcon icon={faPhone} /> Phone</h6>
                        <p>Mobile: +1 985 659 5648</p>
                    </div>
                    <div className="col-md-4">
                        <h6><FontAwesomeIcon icon={faEnvelope} /> Email</h6>
                        <p>support@gmail.com</p>
                    </div>
                </div>
                <hr />
                <div className="row text-left">
                    <div className="col-md-4">
                        <h6>Logo</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, maiores?</p>
                        <ul className="d-flex list-unstyled social-list">
                            <li> <a href=""><FontAwesomeIcon className="social" icon={faFacebookSquare} /></a></li>
                            <li> <a href=""><FontAwesomeIcon className="social" icon={faTwitterSquare} /></a></li>
                            <li> <a href=""><FontAwesomeIcon className="social" icon={faGooglePlusSquare} /></a></li>
                            <li> <a href=""><FontAwesomeIcon className="social" icon={faYoutube} /></a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h6>Quick Link</h6>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy</li>
                            <li>Comditions</li>
                            <li>Manufactures</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h6>Guide & Help</h6>
                        <ul className="list-unstyled">
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy</li>
                            <li>Comditions</li>
                            <li>Manufactures</li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h6>Subscribe for Newsletter</h6>
                        <p>Enter you email address</p>
                        <form action="">
                            <div className="input-group ">
                                <input type="text" className="form-control" placeholder="Email Address" aria-label="Email Address" />
                                <span class="input-group-text">
                                    <button className="btn-red" type='submit'>SUBSCRIBE</button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
                <hr />
                <p>&copy; Vosigo, All Rights Reserved.</p>
            </div>
        </div>
    );
};

export default Footer;