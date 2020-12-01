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
                title="Apple iPhone 12 Pro Max (128GB, Graphite) [Locked] + Carrier Subscription"
                price={11.96}
                rating={5}
                image="https://m.media-amazon.com/images/I/71XXJC7V8tL.jpg"
            />
            <Product
                id="49538094"
                title="Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Space Gray (Latest Model)"
                price={1299.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/71an9eiBxpL._AC_SL1500_.jpg"
            />
            </div>

            <div className="home_row">
            <Product
                id="4903850"
                title="Cillian Murphy Signed Tommy Shelby Portrait (LIMITED EDITION)"
                price={199.99}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/81FTs6eJ1nL._AC_SL1500_.jpg"
            />
            <Product
                id="23445930"
                title="Banpresto DragonBall Super Ultra Instinct Goku"
                price={48.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/61YsIrlJPzL._AC_SL1000_.jpg"
            />
            <Product
                id="3254354345"
                title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                price={598.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
            </div>

            <div className="home_row">
            <Product
                id="90829332"
                title="Samsung 34-Inch SJ55W Ultrawide Gaming Monitor (LS34J550WQNXZA) – 75Hz Refresh, WQHD Computer Monitor, 3440 x 1440p Resolution, 4ms Response, FreeSync, Split Screen, HDMI, Black"
                price={399.99}
                rating={4}
                image="https://images-na.ssl-images-amazon.com/images/I/91g-Y1B09EL._AC_SL1500_.jpg"
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