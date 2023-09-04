import React from "react";
import Slider from "react-slick";
import "./Product.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Product() {
  const settings = {
    infinite: true,
    speed: 400,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
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
        },
      },
    ],
  };

  return (
    <div className="bg-light Product">
      <div className="container-lg py-5 px-5">
        <h1 className="text-center mb-5"> Our Products</h1>
        <Slider {...settings}>
          <div className="item   rounded-0 ">
            <img src="img/bottle1.jpeg" alt="" className="img-fluid  px-3 " />
            <div className="cart">
              <div className="wrap  mx-3 position-absolute">
                <p className="text-center text-white">
                  Emperia 1900 SS Shine 5 Litres{" "}
                </p>
                <p className="text-center text-white">Rs.999</p>
                <button className="d-block m-auto btn  btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="item rounded-0 ">
            <img src="img/bottle2.jpeg" alt="" className="img-fluid px-3 " />
            <div className="cart">
              <div className="wrap  mx-3 position-absolute ">
                <p className="text-center text-white">
                  Emperia 1900 SS Shine 5 Litres{" "}
                </p>
                <p className="text-center text-white">Rs.1399</p>
                <button className="d-block m-auto btn  btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="item rounded-0 ">
            <img src="img/bottle3.jpeg" alt="" className="img-fluid px-3 " />
            <div className="cart">
              <div className="wrap mx-3 position-absolute ">
                <p className="text-center text-white">
                  Emperia 1900 SS Shine 5 Litres{" "}
                </p>
                <p className="text-center text-white">Rs.2999</p>
                <button className="d-block m-auto btn  btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="item rounded-0 ">
            <img src="img/bottle4.jpeg" alt="" className="img-fluid px-3 " />
            <div className="cart">
              <div className="wrap  mx-3 position-absolute ">
                <p className="text-center text-white">
                  Emperia 1900 SS Shine 5 Litres{" "}
                </p>
                <p className="text-center text-white">Rs.900</p>
                <button className="d-block m-auto btn  btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="item rounded-0 ">
            <img src="img/bottle5.jpeg" alt="" className="img-fluid px-3 " />
            <div className="cart">
              <div className="wrap  mx-3 position-absolute ">
                <p className="text-center text-white">
                  Emperia 1900 SS Shine 5 Litres{" "}
                </p>
                <p className="text-center text-white">Rs.1999</p>
                <button className="d-block m-auto btn  btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="item rounded-0 ">
            <img src="img/bottle2.jpeg" alt="" className="img-fluid px-3 " />
            <div className="cart">
              <div className="wrap  mx-3 position-absolute ">
                <p className="text-center text-white">
                  Emperia 1900 SS Shine 5 Litres{" "}
                </p>
                <p className="text-center text-white">Rs.1599</p>
                <button className="d-block m-auto btn  btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="item rounded-0 ">
            <img src="img/bottle7.jpeg" alt="" className="img-fluid px-3 " />
            <div className="cart">
              <div className="wrap  mx-3 position-absolute ">
                <p className="text-center text-white">
                  Emperia 1900 SS Shine 5 Litres{" "}
                </p>
                <p className="text-center text-white">Rs.2199</p>
                <button className="d-block m-auto btn  btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>

          <div className="item rounded-0 ">
            <img src="img/bottle8.jpeg" alt="" className="img-fluid px-3 " />
            <div className="cart">
              <div className="wrap  mx-3 position-absolute ">
                <p className="text-center text-white">
                  Emperia 1900 SS Shine 5 Litres{" "}
                </p>
                <p className="text-center text-white">Rs.1000</p>
                <button className="d-block m-auto btn  btn-primary">Add to Cart</button>
              </div>
            </div>
          </div>







          
        </Slider>
      </div>
    </div>
  );
}
