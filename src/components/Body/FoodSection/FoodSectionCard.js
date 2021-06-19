import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './FoodSection.css';

const FoodSectionCard = (props) => {
    const { title, description, button, img } = props.detail;
    return (
        <div className="col-md-4 food-section-card">
            <div className="container">
                <div className="row card-fix-row">
                    <div className="col card-fix">
                        <div className="row align-items-center">
                            <div className="col"><img style={{ width: '60%' }} src={img} alt="foodimg" /></div>
                            <div className="col"><h3>{title}</h3></div>
                        </div>
                        <div className="text-left">
                            <p>{description}</p>
                            <button className='btn btn-custom'>{button} <FontAwesomeIcon icon={faLongArrowAltRight} /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodSectionCard;