import React from 'react';
import ProductImage from '../../../images/grape-juice.jpg';
import ProductCategoryCard from './ProductCategoryCard';
import './ProductCategory.css';

const details = [
    {
        image: ProductImage,
        title: "Walnuts With Shell",
        Price: '120.00'
    },
    {
        image: ProductImage,
        title: "Analogue Cream",
        Price: '120.00'
    },
    {
        image: ProductImage,
        title: "Chocolate Cereal",
        Price: '120.00'
    },
    {
        image: ProductImage,
        title: "Green Olives Oil",
        Price: '120.00'
    },
    {
        image: ProductImage,
        title: "Natural Grape Juice",
        Price: '120.00'
    }
]

const ProductCategory = () => {
    return (
        <div className="d-flex justify-content-center text-center latest-products">
            <div className="w-75 row text-center mt-5">
                <p>LATEST PRODUCTS</p>
                <h2>Why Freshqo Super Market <br /> Checkout Our Latest</h2>
                {
                    details.map(detail => <ProductCategoryCard detail={detail}></ProductCategoryCard>)
                }
                <div>
                    <button className="btn-black">EXPLORE OUR PRODUCTS</button>
                </div>
            </div>
        </div>
    );
};

export default ProductCategory;