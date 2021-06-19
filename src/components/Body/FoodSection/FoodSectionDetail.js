import React from 'react';
import FoodSectionCard from './FoodSectionCard';
import foodimg from '../../../images/beverage.png'
import './FoodSection.css';

const details = [
    {
        title: "Organic Food",
        img: foodimg,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam dolores",
        button: "VIEW IN DETAIL"
    },
    {
        title: "100% Natural",
        img: foodimg,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam dolores",
        button: "VIEW IN DETAIL"
    },
    {
        title: "Fresh & Tasty",
        img: foodimg,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ullam dolores",
        button: "VIEW IN DETAIL"
    }
]

const FoodSectionDetail = () => {
    return (
        <div className="d-flex justify-content-center text-center">
            <div className="w-75 row text-center mt-5">
                {
                    details.map(detail => <FoodSectionCard detail={detail}></FoodSectionCard>)
                }
            </div>
        </div>
    );
};

export default FoodSectionDetail;