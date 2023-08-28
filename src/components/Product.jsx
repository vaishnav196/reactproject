import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function Product() {

  const settings = {
      infinite: false,
      speed: 400,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      autoplay: true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
  };

  return (
    <div className="Au-slick">
      <div className="container-lg py-5 px-5">
        <h1 className="text-center mb-5"> Our Products</h1>
        <Slider {...settings}>
          <div>
            <img src="img/bottle1.jpeg" alt="" className="img-fluid px-3" />
          </div>
          <div>
            <img src="img/bottle2.jpeg" alt="" className="img-fluid px-3" />
          </div>
          <div>
            <img src="img/bottle3.jpeg" alt="" className="img-fluid px-3" />
          </div>
          <div>
            <img src="img/bottle4.jpeg" alt="" className="img-fluid px-3" />
          </div>
          <div>
            <img src="img/bottle5.jpeg" alt="" className="img-fluid px-3" />
          </div>
          <div>
            <img src="img/bottle2.jpeg" alt="" className="img-fluid px-3" />
          </div>
          <div>
            <img src="img/bottle7.jpeg" alt="" className="img-fluid px-3" />
          </div>
          <div>
            <img src="img/bottle8.jpeg" alt="" className="img-fluid px-3" />
          </div>

        </Slider>
      </div>

    </div>
  );
}