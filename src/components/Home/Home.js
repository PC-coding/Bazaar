import React from 'react';
import "./Home.css";
import Product from '../Products/Product';

export default function Home() {
    return(
        <div className="home">
            <div className="home_container">
            <img
            className="home_image"
            src="https://images-na.ssl-images-amazon.com/images/G/01/prime/HOL20_P1_GWH5/HOL_V2/GW/V2/primeholiday_gw_dt_tallhero_3000x1200_holiday_engaged_en_v2._CB403512586_.jpg"
            alt=""
            />

            <div className="home_row">
            <Product
                id="12321341"
                title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                price={11.96}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            />
            <Product
                id="49538094"
                title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
                price={239.0}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            />
            </div>

            <div className="home_row">
            <Product
                id="4903850"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
                price={199.99}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            />
            <Product
                id="23445930"
                title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
                price={98.99}
                rating={5}
                image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <Product
                id="3254354345"
                title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
            </div>

            <div className="home_row">
            <Product
                id="90829332"
                title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
                price={1094.98}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
            </div>
        </div>
      </div>
    )
}

// <div data-test="carousel" length="4" class="carousel carousel-fade z-depth-1" aria-label="carousel">
//     <div data-test="carousel-inner" class="carousel-inner">
//         <div data-test="carousel-item" class="carousel-item active carousel-slide-item" style="left: -100%; position: absolute;">
//             <div class="view" data-test="view">
//                 <img class="d-block w-100 home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt="First slide"></img>
//              </div>
//         </div>
//         <div data-test="carousel-item" class="carousel-item active carousel-slide-item" style="left: -100%; position: absolute;">
//             <div class="view" data-test="view">
//                 <img class="d-block w-100 home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Computers_1x._CB432469755_.jpg" alt="Second slide"></img>
//             </div>
//         </div>
//         <div data-test="carousel-item" class="carousel-item active carousel-slide-item" style="left: -100%; position: absolute;">
//             <div class="view" data-test="view">
//                 <img class="d-block w-100 home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Sports_en_US_1x._CB431860448_.jpg" alt="Second slide"></img>
//             </div>
//         </div>
//         <div data-test="carousel-item" class="carousel-item active carousel-slide-item" style="left: 0px;">
//             <div class="view" data-test="view">
//                 <img class="d-block w-100 home__image" src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_45M_v2_1x._CB432458380_.jpg" alt="Third slide"></img>
//             </div>
//         </div>
//     </div>
// </div>