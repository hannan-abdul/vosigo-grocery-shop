import React from 'react';
import logistics from '../../../images/logistics.jpg';
import './SupplyChain.css';

const SupplyChain = () => {
    return (
        <div className="container-fluid supply-chain-container">
            <div className="container">
            <p>SUPPLY CHAIN</p>
            <h2>Worldwide Freights & Logistics</h2>
            <div className="row text-left">
                <div className="col-md-6">
                    <img src={logistics} alt="logistics" />
                </div>
                <div className="col-md-6">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto facere eum voluptatibus assumenda similique voluptate aliquid distinctio tempora fugiat natus.</p>
                    <div className="row">
                        <div className="col-md-4">
                            <h1>22</h1>
                            <p>Years</p>
                            <p>Experience</p>
                        </div>
                        <div className="col-md-4">
                            <h1>13k+</h1>
                            <p>Member</p>
                            <p>Companies</p>
                        </div>
                        <div className="col-md-4">
                            <h1>37</h1>
                            <p>Worldwide</p>
                            <p>Branches</p>
                        </div>
                    </div>
                    <button>GET STARTED NOW</button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-5">
                    <p>NEWSLETTER</p>
                    <h2>Subscribe to get the latest updates</h2>
                </div>
                <div className="col-md-7">
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
        </div>
        </div>
    );
};

export default SupplyChain;