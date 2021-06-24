import React from 'react';

const ProductCategoryCard = (props) => {
    const {image, title, Price} = props.detail;
    return (
        <div className="col-md-4 food-section-card">
            <div className="container">
                <div className="row">
                    <div className="col food-card-fix">
                        <img style={{width: '80%'}} src={image} alt="" />
                        <h6>{title}</h6>
                        <p>$ {Price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCategoryCard;