import React from "react";

export default function Personalcare() {
  return (
    <div style={{ backgroundColor: "#effafa" }}>
      <div className="container-lg">
        <div className="row">
          <div className="all mt-5  d-flex ">
            <h6>Showing all 3 Products</h6>
            <select class="form-select w-25 ms-auto border-0 " aria-label="Default select example">
              <option selected>Default Sorting</option>
              <option value="1">Sort by Popularity</option>
              <option value="2">Sort by average rating</option>
              <option value="3">Sort by latest</option>
              <option value="4">Sort by price:low to high</option>
              <option value="5">Sort by price: high to low</option>
            </select>
          </div>
          <div className="col-md-4 py-3">
            <div className="card  w-75 border-0" style={{ minWidth: "20rem" }}>
              <img
                src="img/bottle1.jpeg"
                class=" img-fluid mx-auto "
                alt="..."
              />
              <div className="card-body">
                <h6 className="">Personal care</h6>
                <h6 className="text-success">
                  Personal Care Grabbit First Hand Sanitizer 5 Litres
                </h6>
                <h6 className="align-end text-black">Rs 999.000</h6>
                <a href="#" class="btn btn-success">
                  Add to cart
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
