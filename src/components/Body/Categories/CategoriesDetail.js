import React from 'react';
import Beverage from '../../../images/beverage.png';
import CategoriesCard from './CategoriesCard';
import './Categories.css';

const details = [
    {
        image: Beverage,
        title: 'Drinks & Beverages',
        quantity: '4000 Products'
    },
    {
        image: Beverage,
        title: 'Drinks & Beverages',
        quantity: '4000 Products'
    },
    {
        image: Beverage,
        title: 'Drinks & Beverages',
        quantity: '4000 Products'
    },
    {
        image: Beverage,
        title: 'Drinks & Beverages',
        quantity: '4000 Products'
    },
    {
        image: Beverage,
        title: 'Drinks & Beverages',
        quantity: '4000 Products'
    },
    {
        image: Beverage,
        title: 'Drinks & Beverages',
        quantity: '4000 Products'
    },
    {
        image: Beverage,
        title: 'Drinks & Beverages',
        quantity: '4000 Products'
    },
    {
        image: Beverage,
        title: 'Drinks & Beverages',
        quantity: '4000 Products'
    }
]

const CategoriesDetail = () => {
    return (
        <div className="container-fluid categories-section-card">
            <div className="row align-items-center categories-title">
                <div className="col-6">
                    <p>TOP CATEGORIES</p>
                    <h2>Healthy Life With <br/> Fresh Products</h2>
                </div>
                <div className="col-6">
                    <button className="btn-black">EXPLORE ALL CATEGORIES</button>
                </div>
            </div>
            <div className="d-flex justify-content-center text-center">
                <div className="w-75 row text-center mt-5">
                    {
                        details.map(detail => <CategoriesCard detail={detail}></CategoriesCard>)
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoriesDetail;