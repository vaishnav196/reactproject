import React from "react";

export default function Personalcare() {
  return (
    <div style={{backgroundColor:'#effafa'}}>
      <div className="container-lg">
        <div className="row">
          <div className="col-md-4 py-3">
            <div className="card  w-75 border-0" style={{minWidth:'20rem'}} >
              <img src="img/bottle1.jpeg" class=" img-fluid mx-auto "  alt="..." />
              <div className="card-body">
                <h6 className="">Personal care</h6>
                <h6 className="text-success">
                  Personal Care Grabbit First Hand Sanitizer 5 Litres
                </h6>
                <h6 className="align-end text-black">
                 Rs 999.000
                </h6>
                <a href="#" class="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
