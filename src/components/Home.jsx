import React from "react";
import "./Home.css";

function Home() {
  {
    return (
      <div>
        <section className="">
          <div className="container-fluid-lg d-none d-sm-none d-md-block d-lg-block">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide carousel-fade "
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="card-img-overlay">
                  <div className="container-lg">
                    <div className="row">
                      <div className="col-sm-6 d-flex flex-column align-align-items-end py-5 my-3 mx-3 ">
                        <h5 class="card-title">Our Vision</h5>
                        <p class="card-text flex-wrap ">
                          To promote public health and hygiene by providing
                          leading hygiene care solutions that enable individuals
                          and communities to maintain a healthy and safe
                          environment.
                        </p>
                        <div className="button">
                          <button className="  px-3 py-2 btn-outline-green">
                            Read More
                          </button>
                        </div>
                      </div>
                      <div className="col-sm-7"></div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item active">
                  <img
                    src="img/hero1.png"
                    class="d-block w-100 img-fluid "
                    alt="..."
                  />
                </div>
                <div class="carousel-item">
                  <img
                    src="img/h1.png"
                    class="d-block w-100 img-fluid "
                    alt="..."
                  />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </section>

        {/* for mobile view */}
        <section className=" d-sm-block d-md-block">
          <div className="container-fluid-lg d-sm-block d-md-none d-lg-none">
            <div
              id="carouselExampleAutoplaying"
              class="carousel slide "
              data-bs-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="img/mh1.png" class="d-block w-100  " alt="..." />
                </div>
                <div class="carousel-item">
                  <img src="img/mh2.png" class="d-block w-100  " alt="..." />
                </div>
              </div>
              <button
                class="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button
                class="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="visually-hidden">Next</span>
              </button>
            </div>
            <div className="container-fluid-lg">
              <div className="col bg">
                <h5 class="card-title px-3 py-3">Our Vision</h5>
                <p class="card-text flex-wrap  px-3">
                  To promote public health and hygiene by providing leading
                  hygiene care solutions that enable individuals and communities
                  to maintain a healthy and safe environment.
                </p>
                <div className="button mx-3">
                  <button className=" btn px-3 py-1 btn-outline-green">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
export default Home;
