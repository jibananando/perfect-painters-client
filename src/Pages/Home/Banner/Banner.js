import React from 'react';

const Banner = () => {
    return (
        <div>
            <div className="carousel w-full h-96">
                <div id="item1" className="carousel-item w-full">
                    <img src="https://gliving.tv/wp-content/uploads/2019/08/dps-banner-1.png" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full">
                    <img src="https://www.princetonpainters.net/wp-content/themes/princton-painters/images/default-banner.jpg" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full">
                    <img src="https://www.diamondstarpainting.com/wp-content/uploads/2022/04/diamond-star-hero-2-780x300.png" className="w-full" />
                </div>
                <div id="item4" className="carousel-item w-full">
                    <img src="https://www.nipponpaint.co.in/wp-content/uploads/2021/08/shutterstock_593354426-1-1024x398.jpg" className="w-full" />
                </div>
            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
                <a href="#item4" className="btn btn-xs">4</a>
            </div>
        </div>
    );
};

export default Banner;