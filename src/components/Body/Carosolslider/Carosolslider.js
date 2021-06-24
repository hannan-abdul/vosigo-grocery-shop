import React from 'react';
import { Carousel } from 'react-bootstrap';
import Image from '../../../images/beverage.png';
import './Carosolslider.css';

const Carosolslider = () => {
    return (
        <div className="container carosol-fix">
            <Carousel variant="dark" className="inner-carosol-fix">
                <Carousel.Item>
                    <img
                        className="d-inline img-fix"
                        src={Image}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim numquam pariatur minus at ad similique sed fugiat neque temporibus!</p>
                        <h5>Jonas Karlsson</h5>
                        <p>CEO</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-inline img-fix"
                        src={Image}
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim numquam pariatur minus at ad similique sed fugiat neque temporibus!</p>
                        <h5>Jonas Karlsson</h5>
                        <p>CEO</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Carosolslider;