import React from 'react';
import BannerImage from '../../images/food.jpg'
import './MainBanner.css';

const MainBanner = () => {
    return (
        <div class="banner-section">
           <div className="container">
           <div className="row align-items-center">
               <div className="col-6 text-left">
                    <h6>Bring the Best Services For You</h6>
                    <h1>The World's Leading <br/> Grocery providers</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae nostrum similique quis magni. Sapiente esse asperiores suscipit, Sapiente esse asperiores suscipit</p>
                    <button class="btn-red">EXPLORE OUR PRODUCTS</button>
               </div>
               <div className="col-6">
                   <img src={BannerImage} alt="bannerimage" />
               </div>
           </div>
           </div>
        </div>
    );
};

export default MainBanner;