import "./Client.css";
import React from "react";
import Slider from "react-slick";

function Client() {
  // const settings = {
  //   dots : true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 4,
  //   slidesToScroll: 1
  // };

  var settings = {
    dots: true,
    infinite: true,
  
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: false,
    initialSlide: 0,
    speed: 1000,
    autoplaySpeed: 4000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: 5,
          dots: false,
        },
      },
    ],
  };
  return (
    <div className="Client">
      <section className="bg-light ">
        <div className="container-lg">
          <div className="row">
            <div className="col-lg-4 p-lg-5">
              <h2 className="text-black">BRAND VALUES</h2>
            </div>
            <div className="col-lg-8 p-lg-5">
              <p>
                We believe in providing effective and innovative hygiene care
                solutions that enable individuals and communities to maintain a
                clean and healthy environment; therefore, we have set standards
                for excellence. We are guided by our principles; a
                customer-centric approach, passion and integrity, continuous
                improvement & innovation and people-oriented culture
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="  py-5 px-5   ">
        <div className="container-lg">
          <div className="row">
            <div className="-12">
              <h2 className="text-center"> Our Clients</h2>
              <Slider {...settings}>
                <div className=" py-5 ">
                  <img src="img/c1.jpg" alt="" className="px-3" />
                </div>

                <div className="    py-5">
                  <img src="img/c2.jpg" alt="" className=" px-3 " />
                </div>

                <div className="    py-5">
                  <img src="img/c3.jpg" alt="" className=" px-3 " />
                </div>

                <div className="    py-5">
                  <img src="img/c4.png" alt="" className=" px-3 " />
                </div>

                <div className="    py-5">
                  <img src="img/c5.png" alt="" className=" px-3 " />
                </div>

                <div className="    py-5">
                  <img src="img/c6.png" alt="" className=" px-3 " />
                </div>

                <div className="    py-5">
                  <img src="img/c7.png" alt="" className=" px-3 " />
                </div>

                <div className="    py-5">
                  <img src="img/c8.png" alt="" className=" px-3 " />
                </div>

                <div className="    py-5">
                  <img src="img/c9.png" alt="" className=" px-3 " />
                </div>

                <div className="    py-5">
                  <img src="img/c10.png" alt="" className=" px-3 " />
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Client;
