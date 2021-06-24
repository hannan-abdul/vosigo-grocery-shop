import React from 'react';
import './SimpleSlider.css'
import Image from '../../images/User.jpg';

const Card = () =>
    <div className="card container carosol-fix">
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum eos est mollitia? Quasi provident optio corrupti beatae neque repudiandae consequuntur?</p>
        <div className='row text-left'>
            <div className="col-6">
                <img style={{width: '70px'}} src={Image} alt="" />
            </div>
            <div className="col-6">
                <h3>Jonas Karisson</h3>
                <h5>CEO</h5>
            </div>
        </div>
    </div>

export default Card;