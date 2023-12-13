import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5">
            <h1>Get In Touch</h1>
            <h6 className="font-monospace">CORPORATE OFFICE</h6>
            <h4 className="text-black font-monospace ">
              Empire Industries Limited – Hygiene Care, Empire Complex, 414,
              Senapati Bapat Marg, Lower Parel (W), Mumbai – 400013
            </h4>
            <br />
            <h4 className="text-black text-center">Regional Offices</h4>
            <div className="d-flex justify-content-around ">
              <h5>Mumbai</h5>|<h5> Delhi</h5>|<h5>Kolkata</h5>|
              <h5>Bengaluru</h5>|
            </div>
            <hr />
            <h6 className="">CALL US</h6>
            <h6>1800 209 2526</h6>
            <hr />

            <h6>EMAIL US</h6>
            <h6>care@grabbitempire.com</h6>
          </div>
          <div className="col-md-6"></div>
        </div>
      </div>
    </div>
  );
}
