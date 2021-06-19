import React from 'react';
import mart from '../../../images/mart.jpg';
import LatestNewsCard from './LatestNewsCard';

const details = [
    {
        image: mart,
        title: 'Food at home will continue to drive grocery sales in 2021',
        date: 'Dec-09-2020',
        comments: '37',
        like: '110'
    },
    {
        image: mart,
        title: 'Food at home will continue to drive grocery sales in 2021',
        date: 'Dec-09-2020',
        comments: '37',
        like: '110'
    },
    {
        image: mart,
        title: 'Food at home will continue to drive grocery sales in 2021',
        date: 'Dec-09-2020',
        comments: '37',
        like: '110'
    },
    {
        image: mart,
        title: 'Food at home will continue to drive grocery sales in 2021',
        date: 'Dec-09-2020',
        comments: '37',
        like: '110'
    }
]

const LatestNews = () => {
    return (
        <div className="d-flex justify-content-center text-center">
            <div className="w-75 row text-center mt-5">
                <p>LATEST NEWS</p>
                <h2>Our Latest News</h2>
                {
                    details.map(detail => <LatestNewsCard detail={detail}></LatestNewsCard>)
                }
            </div>
        </div>
    );
};

export default LatestNews;