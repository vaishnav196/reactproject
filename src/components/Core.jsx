import React from "react";
import "./Core.css";

function Core() {
  return (
    <div className="Core">
      <section>
        <div className="container-fluid card p-0">
          <div className=" core">
            <img src="img/core.png" alt="" className="img-fluid" />
            <div className="card-img-overlay">
              <h1
                className="d-flex justify-content-center "
                style={{ color: "white", height: "50vh" }}
              >
                <b>Core</b>
              </h1>
            </div>
          </div>
        </div>

        <div className="container-lg">
          <div className="row">
            <div className="col-md-6">
              <img
                src="img/vision.jpg"
                alt=""
                className=" img-fluid rounded-5 mt-5"
              />
            </div>
            <div className="col-md-6 py-3">
              <h4 className=" mt-5">Vision</h4>
              <p>
                Our vision is to promote public health and hygiene by providing
                leading hygiene care solutions that enable individuals and
                communities to maintain a healthy and safe environment.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6 p-5">
              <h4>Mission</h4>
              <p>Our mission is to promote healthy living by;</p>
              <ul>
                <li>
                  providing innovative and effective hygiene care solutions,
                </li>
                <li>having a customer-centric approach,</li>
                <li>
                  being people-oriented and serving as a responsible & socially
                  conscious company that makes a positive impact on the nation.
                </li>
              </ul>
            </div>
            <div className="col-md-6">
              <img
                src="img/mission.png"
                alt=""
                className="img-fluid rounded-5 p-3"
              />
            </div>
          </div>
          <div className="row">
          <div className="col-md-6">
              <img
                src="img/bvalue.png"
                alt=""
                className=" img-fluid rounded-5 p-3"
              />
            </div>
            <div className="col-md-6 py-5">
              <h4 className="">Vision</h4>
              <p>
                Our vision is to promote public health and hygiene by providing
                leading hygiene care solutions that enable individuals and
                communities to maintain a healthy and safe environment.
              </p>
            </div>
         
          </div>
        </div>
      </section>
    </div>
  );
}

export default Core;
