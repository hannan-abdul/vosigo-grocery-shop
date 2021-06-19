import React from 'react';

const CategoriesCard = (props) => {
    const {image, title, quantity} = props.detail;

    return (
        <div className="col-md-3">
            <div className="container">
                <div className="row">
                    <div className="col catagory-card">
                        <img style={{width: '70px'}} src={image} alt="image" />
                        <h3>{title}</h3>
                        <p>{quantity}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoriesCard;