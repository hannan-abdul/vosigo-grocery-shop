import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faGooglePlusSquare, faTwitterSquare, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
    return (
        <div className="footer-section" style={{ backgroundColor: 'black', color: 'white' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <h6>Address</h6>
                        <p>123 New York City, USA</p>
                    </div>
                    <div className="col-md-4">
                        <h6>Phone</h6>
                        <p>Mobile: +1 985 659 5648</p>
                    </div>
                    <div className="col-md-4">
                        <h6>Email</h6>
                        <p>support@gmail.com</p>
                    </div>
                </div>
                <hr />
                <div className="row">
                    <div className="col-md-4">
                        <h6>Logo</h6>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos, maiores?</p>
                        <div className="row">
                            <div className="col">
                                <FontAwesomeIcon icon={faFacebookSquare} />
                            </div>
                            <div className="col">
                                <FontAwesomeIcon icon={faTwitterSquare} />
                            </div>
                            <div className="col">
                                <FontAwesomeIcon icon={faGooglePlusSquare} />
                            </div>
                            <div className="col">
                                <FontAwesomeIcon icon={faYoutube} />
                            </div>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h6>Quick Link</h6>
                        <ul>
                            <li>About Us</li>
                            <li>Delivery</li>
                            <li>Privacy</li>
                            <li>Comditions</li>
                            <li>Manufactures</li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <h6>Guide & Help</h6>
                        <ul>
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
                                    <button type='submit'>SUBSCRIBE</button>
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