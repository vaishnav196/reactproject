import React from "react";
import "./Test.css";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Test() {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 0,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="Test">
      <section id="test">
        <div className="container-lg py-5 px-5">
            <h1 className="text-center">TESTIMONIALS</h1>
          <Slider {...settings}>
            <div className="test ">
              <img src="img/im1.jpg" alt="" className="img-fluid w-25 " />
              <h5 className="pt-3 text-white">Pushpa joshi</h5>
              <p className=" text-center">Admin Executive, Rockwell Automation India Private Ltd</p>
            </div>
            <div className="test ">
              <img src="img/im2.jpg" alt=""  className="img-fluid w-25"/>
              <h5 className="pt-3 text-white">Pushpa joshi</h5>
              <p className=" text-center">Admin Executive, Rockwell Automation India Private Ltd</p>
            </div>
            <div className="test">
              <img src="img/im3.jpg" alt=""  className="img-fluid w-25"/>
              <h5 className="pt-3 text-white">Pushpa joshi</h5>
              <p className=" text-center">Admin Executive, Rockwell Automation India Private Ltd</p>
            </div>
          </Slider>
        </div>
      </section>
    </div>
  );
}

export default Test;
