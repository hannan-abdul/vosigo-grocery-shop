import React from 'react';
import VideoImage from '../../../images/food.jpg'
import './AboutVosico.css';

const AboutVosico = () => {
    return (
        <div className="container">
            <div className="about-vosico">
                <h6>ABOUT VOSICO</h6>
                <h2>We Offer A Great Variety <br/> of Products & Services</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit temporibus commodi delectus dicta <br/> officia dolore consectetur, architecto aliquam corrupti autem.</p>
                <img src={VideoImage} alt="" />
            </div>
            
        </div>
    );
};

export default AboutVosico;