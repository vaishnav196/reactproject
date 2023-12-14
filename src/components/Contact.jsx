import React from "react";
import "./Contact.css";

export default function Contact() {
  return (
    <div className=""style={{backgroundColor:'#effafa'}}>
      <div className="container" >
        <div className="row p-0" style={{backgroundColor:'#effafa'}}  >
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
          <div className="col-md-6  mt-3">
            <div className="container  bg-white border-1  px-5">
              <div className="row ">
                <div className="col mt-5  ">
                  <form action="">
                    <label for="firstname" class="form-label">
                      <b>Name</b>
                    </label>
                    <input
                      type="text"
                      class="form-control w-50"
                      id="firstname"
                    />
                    <label for="number" class="form-label">
                      <b>Contact Number</b>
                    </label>
                    <input type="phone" class="form-control " id="number" />
                    <label for="email" class="form-label">
                      <b>Email</b>
                    </label>
                    <input type="phone" class="form-control " id="email" />
                    <label for="subject" class="form-label">
                      <b>Subject</b>
                    </label>
                    <input type="text" class="form-control " id="subject" />{" "}
                    <br />
                    <label for="subject" class="form-label">
                      <b>Comments or Message</b>
                    </label>
                    <textarea name="" id="" cols="70" rows="8"></textarea>
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                      <label class="form-check-label" for="flexCheckDefault">
                        I consent to receive communication from EMPERIA 1900 *
                      </label>
                    </div>
                    <button type="button" class="btn btn-light">
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
